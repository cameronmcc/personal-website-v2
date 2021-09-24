import React from 'react';
import './style.css'
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xyylovjp");
  if (state.succeeded) {
      return <p>Thanks for reaching out! Expect a reply within 2 business days.</p>;
  }
  return (
      <form className='contact-form' onSubmit={handleSubmit}>
      
        <label htmlFor='name'>
            Name 
        </label>
        <input 
        className='name' 
        id='name'
        type='text'
        name='name'
        />
        <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">
        Email Address
      </label>
      <input 
        className='email'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea 
        className='message'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
