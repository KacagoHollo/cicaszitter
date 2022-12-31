import React, { useState } from 'react';
import { send } from 'emailjs-com';
import TextField from "@mui/material/TextField";


function Bid() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    question: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_e2i9rjw',
      'template_kky4w6o',
      toSend,
      'OvK2rMIAAgvQVhCEN'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='bid'>
      <h1>Árajánlat kérése</h1>

      <form onSubmit={onSubmit}>
    <TextField
      id='input1'
      type='text'
      name='from_name'
      placeholder='Megrendelő neve'
      label='Megrendelő neve'
      value={toSend.from_name}
      onChange={handleChange}
      variant="filled"
      required
      helperText='Kötelező mező'
    />
    <TextField
      id='input2'
      type='text'
      name='to_name'
      placeholder='to name'
      value={toSend.to_name}
      onChange={handleChange}
    />
    <TextField
      id='input3'
      type='text'
      name='message'
      placeholder='Your message'
      value={toSend.message}
      onChange={handleChange}
    />
    <TextField
      id='input4'
      type='text'
      name='question'
      placeholder='Your question'
      value={toSend.question}
      onChange={handleChange}
    />
    <TextField
      id='input5'
      type='text'
      name='reply_to'
      placeholder='Your email'
      value={toSend.reply_to}
      onChange={handleChange}
    />
    <button  type='submit'
    >
      Submit
    </button>
  </form>
    </div>
  )
}

export default Bid;