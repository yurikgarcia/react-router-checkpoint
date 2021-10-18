import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Owen() {
 
 
return (


    <main>
    <Card sx={{ Width: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://pbs.twimg.com/media/Dqx1HA0U8AAHNAE.jpg"
        alt="leia"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Owen
        </Typography>

        <Typography variant="body2" color="text.secondary">
            Fullname: Owen Lars
            
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

export default Owen;