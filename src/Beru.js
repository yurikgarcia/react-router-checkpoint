import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Beru() {
 
 
return (


    <main>
    <Card sx={{ Width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.figurerealm.com/userimages/characterprofiles/2500/2466-1-58cbe33910930.jpg"
        alt="leia"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Beru
        </Typography>

        <Typography variant="body2" color="text.secondary">
            Fullname: Beru Whitesun
            
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

export default Beru;