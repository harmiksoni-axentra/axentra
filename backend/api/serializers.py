import re

from rest_framework import serializers

from core.data import SERVICES

from .models import ContactSubmission, Testimonial


class ContactSubmissionSerializer(serializers.ModelSerializer):
    allowed_service_titles = {service["title"] for service in SERVICES}

    class Meta:
        model = ContactSubmission
        fields = [
            "id",
            "full_name",
            "email",
            "phone",
            "service_interest",
            "message",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def validate_full_name(self, value: str) -> str:
        cleaned = value.strip()
        if len(cleaned) < 2:
            raise serializers.ValidationError("Full name must be at least 2 characters long.")
        if len(cleaned) > 150:
            raise serializers.ValidationError("Full name is too long.")
        if not re.fullmatch(r"[A-Za-z .'-]+", cleaned):
            raise serializers.ValidationError(
                "Full name can only contain letters, spaces, apostrophes, dots, and hyphens."
            )
        return cleaned

    def validate_email(self, value: str) -> str:
        return value.strip().lower()

    def validate_phone(self, value: str) -> str:
        cleaned = value.strip()
        if not cleaned:
            return ""
        digits_only = re.sub(r"\D", "", cleaned)
        if not re.fullmatch(r"^\d{10}$", digits_only):
            raise serializers.ValidationError("Phone number must contain exactly 10 digits.")
        return digits_only

    def validate_service_interest(self, value: str) -> str:
        cleaned = value.strip()
        if not cleaned:
            return ""
        if cleaned not in self.allowed_service_titles:
            raise serializers.ValidationError("Please select a valid service interest.")
        return cleaned

    def validate_message(self, value: str) -> str:
        cleaned = value.strip()
        if len(cleaned) < 20:
            raise serializers.ValidationError("Message must be at least 20 characters long.")
        if len(cleaned) > 2000:
            raise serializers.ValidationError("Message must be 2000 characters or less.")
        return cleaned


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = [
            "id",
            "name",
            "designation",
            "company_name",
            "message",
            "flag",
            "created_at",
        ]


class PublicTestimonialCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = [
            "id",
            "name",
            "designation",
            "company_name",
            "message",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def validate_name(self, value: str) -> str:
        cleaned = value.strip()
        if len(cleaned) < 2:
            raise serializers.ValidationError("Name must be at least 2 characters long.")
        if len(cleaned) > 150:
            raise serializers.ValidationError("Name is too long.")
        return cleaned

    def validate_designation(self, value: str) -> str:
        cleaned = value.strip()
        if len(cleaned) < 2:
            raise serializers.ValidationError("Designation must be at least 2 characters long.")
        if len(cleaned) > 150:
            raise serializers.ValidationError("Designation is too long.")
        return cleaned

    def validate_company_name(self, value: str) -> str:
        cleaned = value.strip()
        if len(cleaned) < 2:
            raise serializers.ValidationError("Company name must be at least 2 characters long.")
        if len(cleaned) > 150:
            raise serializers.ValidationError("Company name is too long.")
        return cleaned

    def validate_message(self, value: str) -> str:
        cleaned = value.strip()
        if len(cleaned) < 20:
            raise serializers.ValidationError("Message must be at least 20 characters long.")
        if len(cleaned) > 2000:
            raise serializers.ValidationError("Message must be 2000 characters or less.")
        return cleaned

    def create(self, validated_data):
        validated_data["flag"] = True
        return super().create(validated_data)
