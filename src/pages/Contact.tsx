import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { usePortfolioContext } from '../context/PortfolioContext';
import Toast from '../components/Toast';
import { AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FiMessageSquare } from 'react-icons/fi';
import { container, item } from '../variants';

const Contact = () => {
  const { setSelectedTab, ContactRef } = usePortfolioContext();

  const title = 'Contact';

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

  const [notification, setNotifications] = useState<any>(null);

  const onContactSubmit = () => {
    setEmailSending(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        handleToast('success', 3000);
        reset();
      })
      .catch(() => {
        handleToast('fail', 2000);
      })
      .finally(() => {
        setEmailSending(false);
      });
  };

  const handleToast = (text: string, timeout: number) => {
    if (text === 'success') {
      setNotifications(
        <Toast text={'Successfully sent!'} bgColor={'#B6F8C4'} />
      );
    } else if (text === 'fail') {
      setNotifications(<Toast text={'Failed to send!'} bgColor={'#FFB7B7'} />);
    }
    setTimeout(() => {
      setNotifications(null);
    }, timeout);
  };

  return (
    <section className='container' ref={ContactRef}>
      <div className='row'>
        <div className='contact__container'>
          <AnimatePresence>{notification}</AnimatePresence>
          <motion.h1
            className='contact__title'
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
          <motion.p
            onViewportEnter={() => setSelectedTab('Contact')}
            className={'contact__para--description'}
          >
            Reach me at{' '}
            <a
              className='contact__email'
              href='mailto:tahseenislam@outlook.com.au'
            >
              tahseenislam@outlook.com.au
            </a>{' '}
            or fill out the form below and I will get back to you!
          </motion.p>
          <form
            className='contact-form'
            ref={form}
            onSubmit={handleSubmit(onContactSubmit)}
          >
            <p ref={EmailMessage}> </p>
            <p className='contact__label'>Your Name</p>
            <div className='contact-input--wrapper'>
              <input
                className='contact__input'
                {...register('user_name')}
                name='user_name'
                placeholder='Your Name'
              />
              <BsPerson className='contact__icon' />
            </div>
            <p className='contact__error-message'>
              {errors.user_name && errors.user_name.message}
            </p>
            <p className='contact__label'>Email</p>
            <div className='contact-input--wrapper'>
              <input
                className='contact__input'
                {...register('user_email')}
                name='user_email'
                placeholder='Email'
              />
              <AiOutlineMail className='contact__icon' />
            </div>
            <p className='contact__error-message'>
              {errors.user_email && errors.user_email.message}
            </p>
            <p className='contact__label'>Message</p>
            <div className='contact-input--wrapper'>
              <textarea
                className='contact__textarea'
                {...register('message')}
                name='message'
                placeholder='Message'
              />
              <FiMessageSquare className='contact__icon contact__icon--textarea' />
            </div>
            <p className='contact__error-message'>
              {errors.message && errors.message.message}
            </p>
            <button type='submit' className='submitBtn'>
              {EmailSending ? (
                <span className='chaotic-orbit'></span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
