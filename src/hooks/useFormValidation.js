import { useState } from "react";

export default function useContactFormValidation() {
  const [errors, setErrors] = useState({});
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^\d{8}$/; // Regex for 8-digit phone number

  const validate = (formData) => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    // ------------------
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email address";
    }
    // ------------------
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be 8 digits";
    }
    // ------------------
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    } else if (formData.message.trim().length > 300) {
      newErrors.message = "Message cannot exceed 300 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (name, value) => {
    let message = "";

    if (name === "name") {
      if (!value.trim()) message = "Please enter your name";
    }

    if (name === "email") {
      if (!value.trim()) message = "Please enter your email";
      else if (!emailRegex.test(value.trim()))
        message = "Invalid email address";
    }

    if (name === "phone") {
      if (!value.trim()) message = "Please enter your phone number";
      else if (!/^\d+$/.test(value.trim()))
        message = "Please enter a valid phone number";
      else if (!phoneRegex.test(value.trim()))
        message = "Phone number must be 8 digits";
    }

    if (name === "message") {
      if (!value.trim()) message = "Please enter your message";
      else if (value.trim().length > 300)
        message = "Message cannot exceed 300 characters";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  return {
    errors,
    validate,
    validateField,
  };
}
