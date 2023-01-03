import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { send } from 'emailjs-com';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';

import gomb from '../pictures/gomb.png';

function Bid() {

  const navigate = useNavigate();
    const nav = (path) => {
        console.log('rerouting');
        navigate(path);
    }

  const [toSend, setToSend] = useState({
    from_name: '', //1
    address: '', //2
    phone: '', //3
    email: '', //4
    first_day: '', //5
    last_day: '', //6
    feeding: '', //7
    number: '', //8
    name: '', //9
    age: '', //10
    sex: '', //11
    dietary: '', //12
    plant: '', //13
    mailbox: '', //14
    payment: '', //15
    billing_name: '', //16
    billing_address: '' //17
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
      nav('/siker')
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
      <br />
      <form onSubmit={onSubmit}>
    <TextField
      required
      id='input1'
      type='text'
      name='from_name'
      placeholder='Megrendelő neve'
      inputProps={{
        style: {
          height: "60px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Megrendelő neve </Typography>
      }
      value={toSend.from_name}
      onChange={handleChange}
      variant="filled"
      // helperText='Kötelező mező'
      color='warning'
    />
    <TextField
      id='input2'
      type='text'
      name='address'
      placeholder='Helyszín címe'
      inputProps={{
        style: {
          height: "60px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Helyszín címe </Typography>
      }
      value={toSend.address}
      onChange={handleChange}
      variant="filled"
      required
      color='warning'
    />
    <TextField
      id='input3'
      type='text'
      name='phone'
      placeholder='Telefonszám'
      inputProps={{
        style: {
          height: "60px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Telefonszám </Typography>
      }
      value={toSend.phone}
      onChange={handleChange}
      variant="filled"
      required
      color='warning'
    />
    <TextField
      id='input4'
      type='text'
      name='email'
      placeholder='E-mail cím'
      inputProps={{
        style: {
          height: "60px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> E-mail cím </Typography>
      }
      value={toSend.question}
      onChange={handleChange}
      variant="filled"
      color='warning'
    />
    <br />
    <TextField
      id='input5'
      type='text'
      name='first_day'
      placeholder='Gondozás első napja'
      value={toSend.first_day}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Gondozás első napja </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input6'
      type='text'
      name='last_day'
      placeholder='Gondozás utolsó napja'
      value={toSend.last_day}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Gondozás utolsó napja </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input7'
      type='text'
      name='feeding'
      placeholder='Etetés ideje'
      value={toSend.feeding}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Etetés ideje </Typography>
      }
      variant="filled"
      helperText='Pl.'
      color='warning'
    />
    <h2 className='category'>Cica/Cicák adatai</h2>
    <TextField
      id='input8'
      type='text'
      name='number'
      placeholder='Ellátott cicák száma'
      value={toSend.number}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Ellátott cicák száma </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input9'
      type='text'
      name='name'
      placeholder='Ellátott cicák neve'
      value={toSend.name}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Ellátott cicák neve </Typography>
      }
      variant="filled"
      color='warning'
    />
    
    <TextField
      id='input10'
      type='text'
      name='age'
      placeholder='Ellátott cicák kora'
      value={toSend.age}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Ellátott cicák kora </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input11'
      type='text'
      name='sex'
      placeholder='Ellátott cicák neme'
      value={toSend.sex}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Ellátott cicák neme </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input12'
      type='text'
      name='dietary'
      placeholder='Ellátott cicák étkezési szabályai'
      value={toSend.dietary}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Ellátott cicák étkezési szabályai </Typography>
      }
      variant="filled"
      color='warning'
    />
    <h2 className='category'>Egyéb infó</h2>
    <TextField
      id='input13'
      type='text'
      name='plant'
      placeholder='Növény locsolás'
      value={toSend.plant}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Növény locsolás </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input14'
      type='text'
      name='mailbox'
      placeholder='Postaláda ürítés'
      value={toSend.mailbox}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Postaláda ürítés </Typography>
      }
      variant="filled"
      color='warning'
    />
    <h2 className='category'>Számlázási adatok</h2>
    <TextField
      id='input15'
      type='text'
      name='payment'
      placeholder='Fizetési mód'
      defaultValue="Előre utalás"
      value="Előre utalás"
      // onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Fizetési mód </Typography>
      }
      variant="filled"
      disabled
      color='warning'
    />
    <TextField
      id='input16'
      type='text'
      name='billing_name'
      placeholder='Számlázási név'
      value={toSend.billing_name}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Számlázási név </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input17'
      type='text'
      name='billing_address'
      placeholder='Számlázási cím'
      value={toSend.billing_address}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography variant="headline" component="h2" color={'whitesmoke'}> Számlázási cím </Typography>
      }
      variant="filled"
      color='warning'
    />

    <button  
      type='submit'
      className='submit'
      // onClick={() => nav('/siker')}
      
    >
      <h2>Elküld</h2>
      <img className='cat-button'
                  src={gomb} alt="button" 
              /> 
    </button>
  </form>
    </div>
  )
}

export default Bid;