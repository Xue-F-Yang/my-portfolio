
import React, { useState } from 'react';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError('Name cannot be blank');
    } else if (!email) {
      setEmailError('Email cannot be blank');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format');
    } else if (!message) {
      setMessageError('Message cannot be blank');
    } else {
      // submit form data
      console.log({ name, email, message });
    }
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        {nameError && <p>{nameError}</p>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError && <p>{emailError}</p>}

        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        {messageError && <p>{messageError}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;