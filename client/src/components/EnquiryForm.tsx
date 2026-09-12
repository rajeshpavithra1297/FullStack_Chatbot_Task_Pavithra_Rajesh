import { FormEvent, useState } from "react";
import {submitEnquiry} from "../services/enquiryService";
import type {EnquiryData} from "../services/enquiryService";
import {validateEnquiryForm} from "../services/enquiryValidation";
import type {FormErrors} from "../services/enquiryValidation";

function EnquiryForm() {
  // Form data
  const [formData, setFormData] = useState<EnquiryData>({
    name: "",
    email: "",
    phone: "",
    userType: "",
    interest: "",
    message: "",
  });

  // Validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Success message
  const [successMessage, setSuccessMessage] = useState("");

  // Loading state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Clear error for the field being edited
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  // Handle form submission
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setSuccessMessage("");

    // Validate form
    const validationErrors = validateEnquiryForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Send data to backend
      await submitEnquiry(formData);

      setSuccessMessage(
        "Thank you! Your enquiry has been submitted successfully."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        userType: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);

      setSuccessMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="font-semibold text-cyan-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            START AN ENQUIRY
          </h2>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-xl md:p-8"
        >

          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium"
            >
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">
                {errors.phone}
              </p>
            )}
          </div>

          {/* User Type */}
          <div className="mb-5">
            <label
              htmlFor="userType"
              className="mb-2 block text-sm font-medium"
            >
              User Type
            </label>

            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            >
              <option value="">Select user type</option>
              <option value="Student">Student</option>
              <option value="Customer">Customer</option>
              <option value="Other">Other</option>
            </select>

            {errors.userType && (
              <p className="mt-1 text-sm text-red-400">
                {errors.userType}
              </p>
            )}
          </div>

          {/* Interest */}
          <div className="mb-5">
            <label
              htmlFor="interest"
              className="mb-2 block text-sm font-medium"
            >
              Interested In
            </label>

            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            >
              <option value="">
                Select a service or course
              </option>

              <option value="Drone Pilot Training">
                Drone Pilot Training
              </option>

              <option value="Advanced Drone Training">
                Advanced Drone Training
              </option>

              <option value="Drone Technology Program">
                Drone Technology Program
              </option>

              <option value="Drone Services">
                Drone Services
              </option>

              <option value="Technology Solutions">
                Technology Solutions
              </option>
            </select>

            {errors.interest && (
              <p className="mt-1 text-sm text-red-400">
                {errors.interest}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
            />

            {errors.message && (
              <p className="mt-1 text-sm text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          {/* Success message */}
          {successMessage && (
            <p className="mb-4 rounded-lg bg-slate-900 p-3 text-center text-sm text-cyan-400">
              {successMessage}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>

        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;