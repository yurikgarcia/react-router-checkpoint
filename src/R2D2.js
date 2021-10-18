import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function R2D2() {
 
 
return (

    
        <main>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_square.jpg"
            alt="luke"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              R2D2
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Fullname: R2D2
                
                Birthday: 33BBY
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Chat</Button>
            <Button size="small">Block</Button>
          </CardActions>
        </Card>

        </main>
)
        }

export default R2D2;