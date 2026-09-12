import type { EnquiryData } from "./enquiryService";

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  userType?: string;
  interest?: string;
  message?: string;
}

export const validateEnquiryForm = ( formData: EnquiryData) => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (!formData.userType) {
    errors.userType = "Please select your user type.";
  }

  if (!formData.interest) {
    errors.interest = "Please select a service or course.";
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
};