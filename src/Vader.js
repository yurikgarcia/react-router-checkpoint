import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Vader() {
 
 
return (


    <main>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.cadworxlive.com/blobs/usergallery/IMG_lordvaderDarth-Vader_phixr.jpg"
        alt="vader"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vader
        </Typography>

        <Typography variant="body2" color="text.secondary">
            Fullname: Darth Vader
            
            Birthday: 41BBY
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

export default Vader;