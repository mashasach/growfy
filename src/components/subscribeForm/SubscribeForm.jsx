import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BounceLoader } from "react-spinners";
import "./subscribeForm.scss";


const API_URL = 'http://localhost:3001/api/subscribe';

const SubscribeForm = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting }
   } = useForm({
      mode: 'onBlur'
   });

   const [submissionStatus, setSubmissionStatus] = useState('');

   useEffect(() => {
      if (errors.email) {
         setSubmissionStatus('');
      }
   }, [errors.email]);

   const onSubmit = async (data) => {
      setSubmissionStatus('Sending...');
      try {

         const response = await axios.post(API_URL, data);

         const successMessage = response.data.message || 'Successful! Thank you for subscribing.';
         setSubmissionStatus(successMessage);

         reset();
      } catch (error) {


         const errorMessage = error.response
            ? error.response.data.message || 'Error: The request could not be processed.'
            : 'Error: Could not connect to the server.';

         setSubmissionStatus(errorMessage);
         console.error('API Error:', error);
      }
   };

   return (
      <div className="footer__form-wrapper">

         <form onSubmit={handleSubmit(onSubmit)} className="footer__form">

            <div className="footer__input-group">
               <input
                  className={`footer__input ${errors.email ? 'is-invalid' : ''}`}
                  type="email"
                  aria-label="Enter your email."
                  placeholder="Your email"

                  {...register("email", {
                     required: "The field cannot be empty.",
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid address.",
                     }
                  })}
               />

               {errors.email && (
                  <p className="footer__error-message" role="alert">
                     {errors.email.message}
                  </p>
               )}
            </div>

            <button
               className="footer__button button button--accent"
               type="submit"
               disabled={isSubmitting}
            >
               {isSubmitting ? (
                  <BounceLoader
                     color={"#fff"}
                     loading={isSubmitting}
                     size={20}
                  />
               ) : (
                  "Subscribe"
               )}
            </button>
         </form>

         {submissionStatus && !errors.email && (
            <p className="footer__status-message">
               {submissionStatus}
            </p>
         )}
      </div>
   );
};

export default SubscribeForm;