from django.urls import path

from . import views

urlpatterns = [
    path("services/", views.ServicesListApi.as_view(), name="api-services"),
    path("testimonials/", views.TestimonialsListApi.as_view(), name="api-testimonials"),
    path(
        "contact-submissions/",
        views.ContactSubmissionCreateApi.as_view(),
        name="api-contact-submissions",
    ),
]
