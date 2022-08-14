import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delProduct, getProduct } from '../../redux/productActions';
import { getProfil } from './../../redux/action';
import Navbar from '../Navbar'
import ProductAdd from './ProductAdd';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductEdit from './ProductEdit';

const ProductList = () => {
    const { product } = useSelector((state) => state.productReducer)
    const { user } = useSelector((state) => state.reducer)
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getProfil());
    dispatch(getProduct());
  }, []);

  
  

  return (
    <div>
        <Navbar/>
        { user.userRole === "Admin" ?

          <ProductAdd/>
          :
          <></>
        }
        
        
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Stock Min</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((el) => (
            <TableRow
              key={el._id}
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {el.code}
              </TableCell>
              <TableCell align="center">{el.name}</TableCell>
              <TableCell align="center">{el.description}</TableCell>
              <TableCell align="center">{el.price}</TableCell>
              <TableCell align="center">{el.stock}</TableCell>
              <TableCell align="center">{el.minStock}</TableCell>
              <TableCell align="center">
                <Button onClick={()=>{dispatch(delProduct(el._id)); dispatch(getProduct())}}>delete</Button>
              </TableCell>
              <TableCell align="center"> <ProductEdit product={el}/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductList