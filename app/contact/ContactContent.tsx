"use client";

import { useState } from "react";

export default function ContactContent() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Отправка...");
  
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });
  
    const data = await res.json();
    console.log("Ответ от сервера:", data); 
  
    if (res.ok) {
      setStatus("Сообщение отправлено!");
      setEmail("");
      setMessage("");
    } else {
      setStatus(`Ошибка при отправке: ${data.error || data.details}`);
    }
  };

  return (
    <div className="min-h-screen to-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl w-full space-y-10 bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Обратная связь
          </h2>
          <p className="text-center text-gray-500 text-base sm:text-lg">
            Мы ответим вам в ближайшее время
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш E-mail"
                className="appearance-none relative block w-full px-5 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-200 text-base sm:text-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ваше сообщение"
                className="appearance-none relative block w-full px-5 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition duration-200 min-h-[200px] sm:min-h-[250px] resize-y text-base sm:text-lg"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-base sm:text-lg font-medium rounded-xl text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition duration-200"
            >
              Отправить
            </button>
          </div>

          {status && (
            <div className={`text-center text-base sm:text-lg ${
              status === "Сообщение отправлено!" 
                ? "text-green-600" 
                : status === "Отправка..." 
                  ? "text-gray-600"
                  : "text-red-600"
            }`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 