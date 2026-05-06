const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.getElementById("menu-links");

if (menuToggle && menuLinks) {
  menuToggle.addEventListener("click", () => {
    menuLinks.classList.toggle("open");
  });
}

document.querySelectorAll('a[href^="/#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const id = href.replace("/#", "");
    const samePage = window.location.pathname === "/";
    if (!samePage) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll('input[name="phone"]').forEach((phoneInput) => {
  phoneInput.addEventListener("input", () => {
    const digits = phoneInput.value.replace(/\D/g, "").slice(0, 10);
    phoneInput.value = digits;
  });
});

const contactForm = document.getElementById("contact-form");
const contactFormHome = document.getElementById("contact-form-home");
const testimonialForm = document.getElementById("testimonial-form");

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return "";
}

async function submitContactForm(formEl, statusId) {
  const status = document.getElementById(statusId);
  const formData = new FormData(formEl);
  const payload = Object.fromEntries(formData.entries());
  const csrfToken = getCookie("csrftoken");

  try {
    const response = await fetch("/api/contact-submissions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      let errorMessage = "Unable to send message. Please check the form fields.";
      try {
        const errorData = await response.json();
        const firstField = Object.keys(errorData)[0];
        const fieldErrors = errorData[firstField];
        if (Array.isArray(fieldErrors) && fieldErrors.length) {
          errorMessage = fieldErrors[0];
        }
      } catch (_jsonError) {
        errorMessage = "Unable to send message. Please try again.";
      }
      throw new Error(errorMessage);
    }
    formEl.reset();
    if (status) status.textContent = "Message sent successfully.";
  } catch (error) {
    if (status) status.textContent = error.message || "Unable to send message. Please try again.";
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitContactForm(contactForm, "contact-status");
  });
}

if (contactFormHome) {
  contactFormHome.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitContactForm(contactFormHome, "contact-status-home");
  });
}

async function submitTestimonialForm(formEl, statusId) {
  const status = document.getElementById(statusId);
  const formData = new FormData(formEl);
  const payload = Object.fromEntries(formData.entries());
  const csrfToken = getCookie("csrftoken");

  try {
    const response = await fetch("/api/testimonials/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorMessage = "Unable to submit testimonial. Please check the form fields.";
      try {
        const errorData = await response.json();
        const firstField = Object.keys(errorData)[0];
        const fieldErrors = errorData[firstField];
        if (Array.isArray(fieldErrors) && fieldErrors.length) {
          errorMessage = fieldErrors[0];
        }
      } catch (_jsonError) {
        errorMessage = "Unable to submit testimonial. Please try again.";
      }
      throw new Error(errorMessage);
    }

    formEl.reset();
    if (status) {
      status.textContent = "Thank you! Your testimonial has been submitted.";
    }
  } catch (error) {
    if (status) {
      status.textContent =
        error.message || "Unable to submit testimonial. Please try again.";
    }
  }
}

if (testimonialForm) {
  testimonialForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await submitTestimonialForm(testimonialForm, "testimonial-status");
  });
}
