from django.contrib import admin

from .models import ContactSubmission, Testimonial


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "email",
        "phone",
        "service_interest",
        "created_at",
    )
    list_filter = ("service_interest", "created_at")
    search_fields = ("full_name", "email", "phone", "message")
    ordering = ("-created_at",)
    readonly_fields = ("created_at",)


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "designation",
        "company_name",
        "flag",
        "created_at",
    )
    list_filter = ("flag", "company_name", "created_at")
    search_fields = ("name", "designation", "company_name", "message")
    ordering = ("-created_at",)
    readonly_fields = ("created_at",)
