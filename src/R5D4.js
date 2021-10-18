import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function R5D4() {
 
 
return (

    
        <main>
       <Card sx={{ Width: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://pbs.twimg.com/profile_images/1425434353543286787/GAvtsVeq_400x400.jpg"
            alt="luke"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            R5D4
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Fullname: R5D4
                
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

export default R5D4;