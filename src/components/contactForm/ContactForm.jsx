import React from 'react';
import './contactForm.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      mode: 'onChange',
   });

   const onSubmit = async (data) => {
      try {

         const API_URL = 'http://localhost:3001/api/contact';
         const response = await axios.post(API_URL, data);

         alert('Message sent successfully!');
         reset();
      } catch (error) {
         console.error(
            'Error:',
            error.response ? error.response.data : error.message
         );
         alert('Sending error: Please try again later.');
      }
   };

   return (
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

         <div className="contact__input-group">
            <input
               className="contacts__input"
               aria-label="Enter Your name."
               type="text"
               placeholder="Your name"
               {...register('name', {
                  required: "Enter Your name.",
               })}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
         </div>

         <div className="contact__input-group">
            <input
               className="contacts__input"
               type="tel"
               placeholder="Your phone"
               aria-label="Enter Your phone."
               {...register('phone', {
                  required: "Enter Your phone number.",
                  pattern: {
                     value: /^(?:\+?38)?0\d{9}$/,
                     message: "Enter the phone correctly.",
                  },
               })}
            />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
         </div>

         {/* Email */}
         <div className="contact__input-group">
            <input
               className="contacts__input"
               type="email"
               placeholder=" Your email"
               aria-label="Enter Your email."
               {...register('email', {
                  required: "Enter Your email",
                  pattern: {
                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                     message: "Enter the email correctly.",
                  },
               })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
         </div>


         <button className="button button--accent" type="submit">
            Send
         </button>
      </form>
   );
};

export default ContactForm;