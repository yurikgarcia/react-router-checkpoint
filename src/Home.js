import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';



function Home() {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
      


    return (
        

    <main>



<Stack direction="row" spacing={2}>

<StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="C3PO" src="data:image/jpeg;base64,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" />
      </StyledBadge>

        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Vader" src="https://www.cadworxlive.com/blobs/usergallery/IMG_lordvaderDarth-Vader_phixr.jpg" />
      </StyledBadge>

      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="R2D2" src="https://www.sideshow.com/storage/product-images/2172/r2-d2-deluxe_star-wars_square.jpg" />
      </StyledBadge>

      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Leia" src="https://avatarfiles.alphacoders.com/711/thumb-71124.jpg" />
      </StyledBadge>
      
    </Stack>




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

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Naboo"
        height="140"
        image="data:image/jpeg;base64,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"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Invasion of Naboo
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "The situation here is not what it seems. There is something else behind all this, Your Highness. 
        There is no logic in the Federation's move here. My feelings tell me they will destroy you."
            ―Jedi Master Qui-Gon Jinn —
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Button size="small">Like</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Yoda"
        height="140"
        image="data:image/jpeg;base64,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"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Master Yoda Passes Away
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "Luke... when gone am I, the last of the Jedi, will you be. Luke... the Force runs strong in your family. Pass on what you have learned. Luke... There... is... another... Sk-... Sky... walker..."
―Yoda's last words, to Luke Skywalker
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Button size="small">Like</Button>
      </CardActions>
    </Card>


  
</main>




      );
    }

export default Home;