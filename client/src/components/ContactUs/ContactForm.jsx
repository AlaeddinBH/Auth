import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import emailjs from 'emailjs-com';
import Navbar from '../Navbar';
import Swal from 'sweetalert2';

const theme = createTheme();

const SERVICE_ID = "service_5ueqz52";
const TEMPLATE_ID = "template_yub835l";
const USER_ID = "quAh4dW7LI8-CcTsw";

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
   <div>
    <Navbar/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ContactMailOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Nous contactez
          </Typography>
          <Box component="form" onSubmit={handleOnSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="full Name"
              label="full Name"
              name="fullName"
              autoComplete="full Name"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle color="secondary"  />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon color="secondary"  />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
            margin="normal"
            id="outlined-multiline-static"
            label="Message"
            name="message"
            required
            fullWidth
            multiline
            rows={4} 
            />
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Envoyer
            </Button>
            
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
   </div> 
  )
}



export default ContactForm
