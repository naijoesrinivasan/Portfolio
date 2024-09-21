import React, { useState } from 'react';
import { useNavigation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const navigation = useNavigation();
  console.log(navigation.state)

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

    emailjs.sendForm('service_f2yzxfp', 'template_jzvf9gp', document.querySelector('form'), {
      publicKey: '7D_hCHnDrRw8L5ucZ'
    })
    .then(() => console.log("Email sent"))
    .catch(err => console.log(err))
  }


  return (
    <main className='row-span-10 w-full'>
      <section className="p-4 md:p-10 h-full flex flex-col gap-2 md:gap-4 justify-center">
        <h1 className='text-center'>Send me a message</h1> 
        <form className='flex flex-col gap-2 items-center' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              placeholder="Name" 
              value={formData.name}
              name='name' 
              className='block'
              onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder='Email' 
              value={formData.email} 
              className='block'
              onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea 
              type="text" 
              placeholder='Message' 
              name='message' 
              value={formData.message}
              className='block'
              onChange={handleChange}/>
          </div>  
          <button type='submit' className='px-6 py-2 rounded-lg bg-themeDarkRed hover:bg-themeCrimRed'>
            {navigation.state === 'submitting' ? 'Submitting' : 'Submit'}
          </button>
        </form>
      </section>
    </main>
  )
}
