"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("Submitting contact form:", data);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        console.error("Server error:", responseData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                {t.contact.name}
              </label>
              <input
                {...register("name", { required: t.contact.required.name })}
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
              >
                {t.contact.email}
              </label>
              <input
                {...register("email", {
                  required: t.contact.required.email,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t.contact.required.emailInvalid,
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              {t.contact.subject}
            </label>
            <input
              {...register("subject", { required: t.contact.required.subject })}
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            >
              {t.contact.message}
            </label>
            <textarea
              {...register("message", { required: t.contact.required.message })}
              id="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              t.contact.sending
            ) : (
              <>
                <FaPaperPlane className="mr-2" />
                {t.contact.send}
              </>
            )}
          </button>

          {submitStatus === "success" && (
            <p className="mt-4 text-green-600 dark:text-green-400 text-center">
              {t.contact.success}
            </p>
          )}

          {submitStatus === "error" && (
            <p className="mt-4 text-red-600 dark:text-red-400 text-center">
              {t.contact.error}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
