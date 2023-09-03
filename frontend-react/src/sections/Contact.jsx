import React, { useEffect , useState } from 'react';
import { urlFor, client } from "../client";

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col gap-20 align-middle justify-center items-center">
      <h1 className="flex justify-center text-3xl font-semibold">contact me</h1>
      <form className="space-y-6 w-[60%] max-lg:w-full">
        <div>
          <input
            placeholder='Your Name'
            type="text"
            name="username" 
            value={username} 
            onChange={handleChangeInput}
            id="name"
            className="mt-1 p-4 w-full bg-[#edf2f8] rounded-md text-md leading-6 text-left focus:outline-none"
            required
          />
        </div>

        <div>
          <input
            placeholder='Your Email'
            type="email"
            name="email" 
            value={email} 
            onChange={handleChangeInput}
            id="email"
            className="mt-1 p-4 w-full bg-[#edf2f8] rounded-md text-md leading-6 text-left focus:outline-none"
            required
          />
        </div>

        <div>
          <textarea
            placeholder='Description'
            id="description"
            rows="4"
            value={message}
            name="message"
            onChange={handleChangeInput}
            className="mt-1 p-4 w-full bg-[#edf2f8] rounded-md text-md leading-6 text-left focus:outline-none"
            required
          ></textarea>
        </div>

        <div className='flex flex-row align-middle items-center w-full justify-center'>
          <button
            onClick={handleSubmit}
            type="submit"
            className="group relative w-fit px-10 py-4 flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact