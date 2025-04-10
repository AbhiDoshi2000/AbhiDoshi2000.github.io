import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Typewriter from 'typewriter-effect';
import Confetti from 'react-confetti';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 1000) return;
    
    setForm({ ...form, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !form.name.trim(),
      email: !validateEmail(form.email.trim()),
      message: !form.message.trim()
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please check the highlighted fields.", {
        position: "bottom-right",
      });
      return;
    }

    setLoading(true);

    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: username,
          to_name: "Abhishek Doshi",
          reply_to: user_email,
          to_email: "abhidoshi2000@gmail.com",
          message: user_message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setShowConfetti(true);
          toast.success("Message sent successfully!", {
            position: "bottom-right",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Uh, oh! Something went wrong. Please try again later.", {
            position: "bottom-right",
          });
        }
      );
  };

  return (
    <div className="relative z-0 bg-black w-full min-h-screen overflow-x-hidden mt-12">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
      
      {/* Floating Icon with Tooltip */}
      <div className="absolute top-4 right-6 z-10">
        <div className="relative group">
          <span className="text-4xl inline-block animate-bounce select-none cursor-pointer">📬</span>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded shadow-lg invisible group-hover:visible transition-all duration-300 whitespace-nowrap z-50">
            Drop a message below!
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-white contact pt-12 mt-8" id="contact">
        <div className="z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl">
          {/* Updated Tagline with gradient and typing effect */}
          <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-pink-500 to-purple-500 leading-normal py-2">
            <Typewriter
              options={{
                strings: ['Your Ideas. My Inbox.'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 3000,
              }}
            />
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 ${errors.name ? 'border-2 border-red-500' : ''}`}
                required
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">Name is required</span>}
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex: abc@gmail.com"
                className={`py-4 px-6 rounded-lg font-medium bg-gray-900 ${errors.email ? 'border-2 border-red-500' : ''}`}
                required
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">Please enter a valid email</span>}
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <div className="relative">
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Do you have anything to say?"
                  className={`w-full py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900 resize-y ${errors.message ? 'border-2 border-red-500' : ''}`}
                  required
                  maxLength={1000}
                />
                <span className="absolute bottom-[-1.5rem] right-0 text-gray-400 text-xs">
                  in 1000 chars ({form.message.length}/1000)
                </span>
              </div>
              {errors.message && <span className="text-red-500 text-sm mt-1">Message is required</span>}
            </label>

            <button
              type="submit"
              className="py-3 px-8 rounded-xl outline-none w-fit font-bold bg-gray-900 text-white hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 flex items-center justify-center h-12"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
