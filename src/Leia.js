import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Leia() {
 
 
return (


    <main>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://avatarfiles.alphacoders.com/711/thumb-71124.jpg"
        alt="leia"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Leia
        </Typography>

        <Typography variant="body2" color="text.secondary">
            Fullname: Leia Organa
            
            Birthday: 19BBY
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

export default Leia;