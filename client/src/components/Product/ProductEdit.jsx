import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { editProduct, getProduct } from '../../redux/productActions';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const ProductEdit = ({product}) => {
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState(product.code);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [stock, setStock] = useState(product.stock);
    const [minStock, setMinStock] = useState(product.minStock);
    const dispatch = useDispatch();

    const handelSubmit = (e) => {
        e.preventDefault();
        const editedProduct = {
          id:product._id,
          code,
          name,
          description,
          price,
          stock,
          minStock,
        };
        dispatch(editProduct(editedProduct));
        //dispatch(getProduct());
        handleClose();
      };

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const theme = createTheme();
    return (
      <div>
        
        <Button onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ThemeProvider theme={theme} >
            <Grid container component="main" >
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
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
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
                    >save
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      </Modal>
      </div>
    );
}

export default ProductEdit
