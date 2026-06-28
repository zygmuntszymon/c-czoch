"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Brak konfiguracji EmailJS.");
      console.error("Brakuje zmiennych środowiskowych EmailJS.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          replyTo: formData.email,
        },
        publicKey
      );

      alert("Wiadomość została wysłana!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Błąd EmailJS:", error);
      alert("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-black p-8 shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 mt-12 text-center text-white">
          Kontakt
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Imię:
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 bg-black border-0 border-b border-white text-white shadow-sm outline-none rounded-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Twój adres e-mail:
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 bg-black border-0 border-b border-white text-white shadow-sm outline-none rounded-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Wiadomość:
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full p-3 bg-black border-0 border-b border-white text-white shadow-sm outline-none rounded-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-white text-black font-semibold shadow-md hover:bg-gray-200 transition-colors"
          >
            Wyślij
          </button>
        </form>

        <div className="w-full py-4 bg-black text-center text-white mt-12">
          <div className="flex flex-col items-center">
            <p className="text-md mb-1">
              <a
                href="https://www.facebook.com/cczoch/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:underline"
              >
                <i className="fab fa-facebook-square mr-2"></i>
                Facebook
              </a>
            </p>

            <p className="text-md mb-1">
              <a href="tel:+48503853445">
                <i className="fas fa-phone-alt mr-1"></i>
                +48 503 853 445
              </a>
            </p>

            <p className="text-md mb-1">
              <i className="fas fa-map-marker-alt mr-1"></i>
              ul. Bielowicka 50, Nowy Sącz
            </p>

            <p className="text-md">
              <i className="fas fa-envelope mr-1"></i>
              <a href="mailto:kontakt@customwelding.pl">
                {" "}
                kontakt@customwelding.pl
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}