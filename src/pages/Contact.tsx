// TODO:Maybe use react-hook-forms?
// TODO:What will the contact form include?
// TODO:Get a UI design
// TODO: Use emailjs

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { motion } from 'framer-motion';
import { usePortfolioContext } from '../context/PortfolioContext';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Contact = () => {
  const { setSelectedTab, ContactRef } = usePortfolioContext();

  const title = 'Contact';

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const PUBLIC_KEY = 'user_YUqGOfbhTjX61mJSdOviw';
  const SERVICE_ID = 'service_5a1g3gy';
  const TEMPLATE_ID = 'template_3upc3jw';

  // yup validation
  const schema = yup.object().shape({
    user_email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),
    user_name: yup.string().required('A name is required'),
    message: yup.string().required('A message is required'),
  });

  // react-use-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const [EmailSending, setEmailSending] = useState<boolean>(false);

  const EmailMessage = useRef<any>(null);

  const form = useRef<any>();

  const onContactSubmit = (data: any) => {
    setEmailSending(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        EmailMessage.current.innerHTML = 'Sent Email';
      })
      .catch(() => {
        EmailMessage.current.innerHTML = 'Error try again later...';
      })
      .finally(() => {
        setEmailSending(false);
        setTimeout(() => {
          EmailMessage.current.innerHTML = '';
        }, 2500);
      });
    reset();
  };

  return (
    <section className='container' ref={ContactRef}>
      <div className='row'>
        <div className='resume__container'>
          <motion.h1
            className='resume__title'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.8, once: true }}
          >
            {title.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={item}
                style={{
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <form
            className='contact-form'
            ref={form}
            onSubmit={handleSubmit(onContactSubmit)}
          >
            <motion.p onViewportEnter={() => setSelectedTab('Contact')}>
              Reach me at{' '}
              <a href='mailto:tahseenislam@outlook.com.au'>
                tahseenislam@outlook.com.au
              </a>{' '}
              or fill out the form below and I will get back to you!
            </motion.p>
            <p ref={EmailMessage}> </p>
            <input
              {...register('user_name')}
              name='user_name'
              placeholder='Name'
            />
            {errors.user_name && errors.user_name.message}
            <input
              {...register('user_email')}
              name='user_email'
              placeholder='Email'
            />
            {errors.user_email && errors.user_email.message}
            <textarea
              {...register('message')}
              name='message'
              placeholder='Message'
            />
            {errors.message && errors.message.message}
            <input type='submit' />
            {EmailSending && <span>Sending...</span>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
