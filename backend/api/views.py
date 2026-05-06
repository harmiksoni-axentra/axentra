from django.conf import settings
from django.core.mail import send_mail
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from core.data import SERVICES

from .models import ContactSubmission, Testimonial
from .serializers import (
    ContactSubmissionSerializer,
    PublicTestimonialCreateSerializer,
    TestimonialSerializer,
)


class ServicesListApi(APIView):
    def get(self, request):
        return Response(SERVICES)


class TestimonialsListApi(APIView):
    def get(self, request):
        queryset = Testimonial.objects.filter(flag=True).order_by("-created_at")
        serializer = TestimonialSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PublicTestimonialCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        testimonial = serializer.save()
        response_serializer = TestimonialSerializer(testimonial)
        return Response(response_serializer.data, status=201)


class ContactSubmissionCreateApi(generics.CreateAPIView):
    queryset = ContactSubmission.objects.all().order_by("-created_at")
    serializer_class = ContactSubmissionSerializer

    def perform_create(self, serializer):
        submission = serializer.save()

        recipient = getattr(settings, "CONTACT_NOTIFICATION_EMAIL", "")
        if not recipient:
            return

        subject = f"New contact submission from {submission.full_name}"
        body = (
            f"Name: {submission.full_name}\n"
            f"Email: {submission.email}\n"
            f"Phone: {submission.phone or '-'}\n"
            f"Service Interest: {submission.service_interest or '-'}\n\n"
            f"Message:\n{submission.message}\n"
        )

        send_mail(
            subject=subject,
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[recipient],
            fail_silently=True,
        )
