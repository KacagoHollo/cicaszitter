import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { send } from 'emailjs-com';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';

import gomb from '../pictures/gomb.png';
import info from '../pictures/info.png';


import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';

function Bid() {
  const [locale, setLocale] = React.useState('huHU');
  const theme = useTheme();
  const themeWithLocale = React.useMemo(
  () => createTheme(theme, locales[locale]),
    [locale, theme],
  );

  const navigate = useNavigate();
    const nav = (path) => {
        console.log('rerouting');
        navigate(path);
    }

    const [isHovering, setIsHovering] = useState(false);
    const [message, setMessage] = useState("");

    const handleMouseOver = (e) => {
      e.preventDefault();
      setIsHovering(true);
    };
  
    const handleMouseOut = (e) => {
      e.preventDefault();
      setIsHovering(false);
    };

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
      nav('/siker')
      console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  // const validateEmail = (e) => {
  //   let email = e.target.value;

  //   if (email) {
  //     setToSend({ ...toSend, [e.target.name]: e.target.value });
  //     setMessage("Thank you");
  //   } else {
  //     setMessage("Please, enter valid Email!");
  //   }
  //  }

  return (
    ??<ThemeProvider theme={themeWithLocale}>
    <div className='bid'>
      <h1>??raj??nlat k??r??se</h1>
      <br />
      <form onSubmit={onSubmit}>
    <TextField
      required
      id='input1'
      type='text'
      name='from_name'
      placeholder='Megrendel?? neve'
      inputProps={{
        style: {
          height: "60px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Megrendel?? neve </Typography>
      }
      value={toSend.from_name}
      onChange={handleChange}
      variant="filled"
      // helperText='K??telez?? mez??'
      color='warning'
    />

    <TextField
      id='input2'
      type='text'
      name='address'
      placeholder='Helysz??n c??me'
      inputProps={{
        style: {
          height: "60px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Helysz??n c??me </Typography>
      }
      value={toSend.address}
      onChange={handleChange}
      variant="filled"
      required
      color='warning'
    />
    <TextField
      id='input3'
      type='tel'
      name='phone'
      placeholder='Telefonsz??m'
      inputProps={{
        style: {
          height: "60px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Telefonsz??m </Typography>
      }
      value={toSend.phone}
      onChange={handleChange}
      variant="filled"
      required
      color='warning'
    />
    <TextField
      id='input4'
      type='email'
      name='email'
      placeholder='E-mail c??m'
      inputProps={{
        style: {
          height: "60px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> E-mail c??m </Typography>
      }
      value={toSend.email}
      onChange={handleChange}
      variant="filled"
      color='warning'
      required
    />
     <span
        style={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        {message}
      </span>
    <br />
    <TextField
      id='input5'
      type='date'
      name='first_day'
      placeholder='Gondoz??s els?? napja'
      value={toSend.first_day}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' align='left' variant="headline" component="h2" color={'whitesmoke'}> Gondoz??s els?? napja </Typography>
      }
      variant="filled"
      color='warning'
      required
    />
    <TextField
      id='input6'
      type='date'
      name='last_day'
      placeholder='Gondoz??s utols?? napja'
      value={toSend.last_day}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Gondoz??s utols?? napja </Typography>
      }
      variant="filled"
      color='warning'
      required
      locale='huHU'
    />
    {/* <div className='feed'> */}
      <div 
      className='info'
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
      >
        {isHovering && <p className='hover'>
          p??ld??ul: 
          <ul>
            <li>- d??lel??tt: 8-12 ??ra k??z??tt</li>
            <li>- kora d??lut??n: 12-16 ??ra k??z??tt</li>
            <li>- k??s?? d??lut??n: 16-20 ??ra k??z??tt</li>
            <li>- b??rmikor: 8-20 ??ra k??z??tt</li>
          </ul>     
        </p>}
        <img className='inf'
                      style={{
                        width: '60%',
                      }}
                      src={info} alt="black" 
                      />
      </div>
      <TextField
        id='input7'
        type='text'
        name='feeding'
        placeholder='Etet??s ideje'
        value={toSend.feeding}
        onChange={handleChange}
        inputProps={{
          style: {
            height: "50px",
          }
        }}
        label={
          <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Etet??s ideje </Typography>
        }
        variant="filled"
        color='warning'
      />
    {/* </div> */}
    <h2 className='category'>Cica/Cic??k adatai</h2>
    <TextField
      id='input8'
      type='number'
      name='number'
      placeholder='Ell??tott cic??k sz??ma'
      value={toSend.number}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Ell??tott cic??k sz??ma </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input9'
      type='text'
      name='name'
      placeholder='Ell??tott cic??k neve'
      value={toSend.name}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Ell??tott cic??k neve </Typography>
      }
      variant="filled"
      color='warning'
    />
    
    <TextField
      id='input10'
      type='text'
      name='age'
      placeholder='Ell??tott cic??k kora'
      value={toSend.age}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Ell??tott cic??k kora </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input11'
      type='text'
      name='sex'
      placeholder='Ell??tott cic??k neme'
      value={toSend.sex}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Ell??tott cic??k neme </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input12'
      type='text'
      name='dietary'
      placeholder='Ell??tott cic??k ??tkez??si szab??lyai'
      value={toSend.dietary}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Ell??tott cic??k ??tkez??si szab??lyai </Typography>
      }
      variant="filled"
      color='warning'
    />
    <h2 className='category'>Egy??b inf??</h2>
    <TextField
      id='input13'
      type='text'
      name='plant'
      placeholder='N??v??ny locsol??s'
      value={toSend.plant}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> N??v??ny locsol??s </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input14'
      type='text'
      name='mailbox'
      placeholder='Postal??da ??r??t??s'
      value={toSend.mailbox}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Postal??da ??r??t??s </Typography>
      }
      variant="filled"
      color='warning'
    />
    <h2 className='category'>Sz??ml??z??si adatok</h2>
    <TextField
      id='input15'
      type='text'
      name='payment'
      placeholder='Fizet??si m??d'
      defaultValue="El??re utal??s"
      value="El??re utal??s"
      // onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Fizet??si m??d </Typography>
      }
      variant="filled"
      disabled
      color='warning'
    />
    <TextField
      id='input16'
      type='text'
      name='billing_name'
      placeholder='Sz??ml??z??si n??v'
      value={toSend.billing_name}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Sz??ml??z??si n??v </Typography>
      }
      variant="filled"
      color='warning'
    />
    <TextField
      id='input17'
      type='text'
      name='billing_address'
      placeholder='Sz??ml??z??si c??m'
      value={toSend.billing_address}
      onChange={handleChange}
      inputProps={{
        style: {
          height: "50px",
        }
      }}
      label={
        <Typography className='label' variant="headline" component="h2" color={'whitesmoke'}> Sz??ml??z??si c??m </Typography>
      }
      variant="filled"
      color='warning'
    />

    <button  
      type='submit'
      className='submit'
      // onClick={() => nav('/siker')}
      
    >
      <h2>Elk??ld</h2>
      <img className='cat-button'
                  src={gomb} alt="button" 
              /> 
    </button>
  </form>
    </div>
    </ThemeProvider>
  )
}

export default Bid;