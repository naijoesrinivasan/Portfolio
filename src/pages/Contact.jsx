import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import clsx from 'clsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [navState,  setNavState] = useState("idle");
  const [success, setSuccess] = useState(false);

  function handleChange(e)  {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(e)  {
    e.preventDefault();
    setNavState("submitting");
    console.log("State 1: ", navState);
    console.log("State 2: ", navState);
    emailjs.sendForm('service_f2yzxfp', 'template_jzvf9gp', document.querySelector('form'), {
      publicKey: '7D_hCHnDrRw8L5ucZ'
    })
    .then(() => console.log("Email sent"))
    .catch(err => console.log(err))
    .finally(() => {
      setNavState("idle");
      setFormData({ email: "", name: "", message: "" });
      setSuccess(true);
    });
  }


  return (
    <main className='row-span-10 w-full'>
      <section className="p-4 md:p-10 h-full flex flex-col gap-2 md:gap-4 justify-center items-center">
        <h1 className='text-center'>Send me a message</h1> 
        <form className='md:w-full flex flex-col items-center gap-2' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              placeholder="Name" 
              value={formData.name}
              name='name' 
              className='block'
              onChange={handleChange}/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder='Email' 
              value={formData.email} 
              className='block'
              onChange={handleChange}/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="message">Message</label>
            <textarea 
              type="text" 
              placeholder='Message' 
              name='message' 
              value={formData.message}
              className='block'
              onChange={handleChange}/>
          </div>  
          {success && <p>Your message has been sent successfully!</p>}
          <button type='submit' className={clsx(
            'px-6 py-2 rounded-lg bg-themeDarkRed hover:bg-themeCrimRed',
            {'disabled' : navState === 'submitting'})}>
            {navState === 'idle' ? 'Submit' : 'Submitting'}
          </button>
        </form>
      </section>
    </main>
  )
}
