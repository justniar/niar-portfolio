import React, { useRef, useState } from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type Props = {};

const ContactMe = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2lmho3l", // Service ID
        "template_0xdiby9", // Template ID
        form.current,
        "nRfi_u560p4G_2I27"
      )
      .then(
        (result) => {
          form.current.reset();
          toast.success("Thank you for contacting me! I will get back to you soon 👋");
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
  };

  const nameInputRef: any = useRef();
  const emailInputRef: any = useRef();
  const subjectInputRef: any = useRef();
  const messageInputRef: any = useRef();
  const focusInput = (inputRef: any) => {
    inputRef.current.focus();
  };

  return (
    <div className="h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-6 sm:px-10 justify-evenly mx-auto items-center">
      <h3 className="mt-8 sm:mt-16 tracking-[20px] text-gray-500 text-2xl cursor-default">
        Contact
      </h3>

      <div className="flex flex-col space-y-8 sm:space-y-10 mt-12 sm:mt-16 w-full sm:w-auto">
        <div className="space-y-4 sm:space-y-3">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">Cirebon, Indonesia</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">salsabilaniarno@gmail.com</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-full sm:w-fit mx-auto px-4"
        >
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
          >
            <input
              placeholder="Name"
              className="contactInput w-full sm:w-1/2"
              type="text"
              name="name"
              required
              ref={nameInputRef}
              onClick={() => focusInput(nameInputRef)}
            />
            <input
              placeholder="Email"
              className="contactInput w-full sm:w-1/2"
              type="email"
              name="email"
              required
              ref={emailInputRef}
              onClick={() => focusInput(emailInputRef)}
            />
          </motion.div>

          <motion.input
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            placeholder="Subject"
            className="contactInput w-full"
            type="text"
            name="subject"
            required
            ref={subjectInputRef}
            onClick={() => focusInput(subjectInputRef)}
          />

          <motion.textarea
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            placeholder="Message"
            className="contactInput w-full"
            name="message"
            required
            ref={messageInputRef}
            onClick={() => focusInput(messageInputRef)}
          />

          <motion.button
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            type="submit"
            className="bg-[#F7AB0A] py-3 px-8 sm:py-5 sm:px-10 rounded-md text-black font-bold transition duration-200 ease-in-out hover:drop-shadow-[0_0px_4px_#F7AB0A]"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
