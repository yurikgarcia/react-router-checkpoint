import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

function Home() {
 
 
    return (

    <main>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://avatarfiles.alphacoders.com/454/thumb-45432.jpg"
            alt="luke"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Luke Skywalker
            </Typography>
            <Typography variant="body2" color="text.secondary">
           
            </Typography>
          </CardContent>
          <CardActions>
    
          </CardActions>
        </Card>

        <div style={{ height: 250, width: '100%' }}>
                    <DataGrid
                    columns={[{ field: 'News' }]}
                    rows={[
                        { id: 1, News: 'Naboo Blows Up' },
                        { id: 2, News: 'Jar-Jar is a Sith' },
                    ]}
                    />
        </div>

        </main>


      );
    }

export default Home;