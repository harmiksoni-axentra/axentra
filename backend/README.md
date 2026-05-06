# Django + DRF Migration

## Run locally

1. Create and activate a virtualenv
2. Install deps:
   `pip install -r requirements.txt`
3. Apply migrations:
   `python manage.py migrate`
4. Start server:
   `python manage.py runserver`

## Routes

- `/`
- `/services/`
- `/contact/`
- `/testimonials/`

## API

- `GET /api/services/`
- `GET /api/testimonials/`
- `POST /api/contact-submissions/`

## Django admin

1. Create admin user:
   `python manage.py createsuperuser`
2. Open:
   `/admin/`
3. You can view contact form submissions under `Contact submissions`.

## Contact form email notifications

Set these environment variables before starting server:

- `CONTACT_NOTIFICATION_EMAIL=you@example.com`
- `DEFAULT_FROM_EMAIL=no-reply@yourdomain.com`
- `EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend`
- `EMAIL_HOST=smtp.yourprovider.com`
- `EMAIL_PORT=587`
- `EMAIL_HOST_USER=your_smtp_user`
- `EMAIL_HOST_PASSWORD=your_smtp_password`
- `EMAIL_USE_TLS=true`

If SMTP values are not set, emails are printed to console (development mode).
