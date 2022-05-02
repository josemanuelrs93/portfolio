import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-auto lg:h-screen bg-black flex justify-center items-center'>
      <form action="https://getform.io/f/19873146-6e6f-4238-8911-8eb17739150b" method="POST" className='flex flex-col py-5'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='pt-5 text-gray-300'>You can contact me here or mail me to 'josemanuelrs726@gmail.com'</p>
          <p className='pt-5 text-gray-300'>Also, you can phone me at +34 648 700 897</p>
        </div>
        <input className='p-2' type="text" placeholder='Name' name='name' />
        <input className='p-2 my-5' type="email" placeholder='Email' name='email' />
        <textarea className='p-2' name="message" rows="10" placeholder="Type your message here"></textarea>
        <button className='p-2 bg-pink-600 text-2xl font-bold text-gray-200' type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
