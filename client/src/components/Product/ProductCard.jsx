import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProductCard = ({Product}) => {
   
  return (
    <div>
       
        <Card 
        sx={{ minWidth: 1200 ,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',}}  >
      <CardContent sx={{ 
            minWidth: 1000 ,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',}} >
        <Typography variant="h5" >
          {Product.code}
        </Typography>
        <Typography variant="h5" component="div">
          {Product.name}
        </Typography>
        <Typography variant="h5">
        {Product.price}
        </Typography>
        <Typography variant="h5">
         {Product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </div>
  )
}

export default ProductCard