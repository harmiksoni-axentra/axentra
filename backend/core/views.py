from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

from api.models import Testimonial

from .data import (
    ABOUT_ITEMS,
    CLIENT_LOGOS,
    HOME_SERVICES,
    HOME_STATS,
    IT_ROLES,
    NON_IT_ROLES,
    SERVICES,
    TRACK_RECORD,
)


def index(request: HttpRequest) -> HttpResponse:
    testimonials = Testimonial.objects.filter(flag=True).order_by("-created_at")
    return render(
        request,
        "pages/index.html",
        {
            "home_stats": HOME_STATS,
            "about_items": ABOUT_ITEMS,
            "home_services": HOME_SERVICES,
            "it_roles": IT_ROLES,
            "non_it_roles": NON_IT_ROLES,
            "client_logos": CLIENT_LOGOS,
            "testimonials": testimonials,
        },
    )


def services(request: HttpRequest) -> HttpResponse:
    return render(request, "pages/services.html", {"services": SERVICES})


def testimonials(request: HttpRequest) -> HttpResponse:
    testimonials_data = Testimonial.objects.filter(flag=True).order_by("-created_at")
    return render(
        request,
        "pages/testimonials.html",
        {"testimonials": testimonials_data, "track_record": TRACK_RECORD},
    )


def contact(request: HttpRequest) -> HttpResponse:
    return render(request, "pages/contact.html", {"services": SERVICES})


def handler404(request: HttpRequest, exception: Exception) -> HttpResponse:
    return render(request, "404.html", status=404)
