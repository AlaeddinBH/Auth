import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {addProd} from '../../redux/productActions';

const ProductAdd = () => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [minStock, setMinStock] = useState('');
    const dispatch = useDispatch();
    
    const handelSubmit = (e) => {
      e.preventDefault();
      const newProduct = {
        code,
        name,
        description,
        price,
        stock,
        minStock,
      };
      dispatch(addProd(newProduct));
      setCode('');
      setName('');
      setDescription('');
      setPrice('');
      setStock('');
      setMinStock('');
    };

  const theme = createTheme();

  return (
    <div>
      

      
        <ThemeProvider theme={theme} >
            <Grid container component="main" sx={{ flexGrow: 1 }} >
            <CssBaseline />
              <Grid item xs={12}
                sm={2}
                md={16}
                component={Paper}
                elevation={0}
                square
              >
                <Box
                  sx={{
                    my: 4,
                    mx: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  
                  <Typography component="h1" variant="h5">
                    Ajouter un article
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handelSubmit}
                    sx={{mt: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexWrap: "wrap",
                    }}
                  >
                    <TextField
                      margin="normal"
                      required
                      label="Code Article"
                      name="Code"
                      autoFocus
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="name"
                      label="Nom Article"
                      type="name"
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="Description"
                      label="Description Article"
                      type="Description"
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="Prix"
                      label="Prix Article"
                      type="Prix"
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">dt</InputAdornment>,
                      }}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="Stock"
                      label="Quantité Stock"
                      type="Stock"
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      name="Stock Min"
                      label="Stock Min"
                      type="Stock Min"
                      size="small"
                      sx={{ m: 1, width: '25ch' }}
                      value={minStock}
                      onChange={(e) => setMinStock(e.target.value)}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{mt: 3, mb: 2}}
                    >ADD
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
         
        
    </div>
  )
}

export default ProductAdd
