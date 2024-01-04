import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PersonCard(props) {
  return (
    <Card className='card' sx={{ maxWidth: 345, padding: 2, margin: 1, color: "black", backgroundColor: "#EDEDED"}}>
      <CardActionArea>
        <Typography variant="h5" color="text.secondary">
          {props.name}
        </Typography>
        <CardMedia
          component="img"
          height="180"
          image={props.image}
          alt="team member"
        />
        <CardContent>
          <Typography className='cardText' variant="p" color="text.secondary">
            {props.subteam}
          </Typography>
          <br />
          <Typography className='cardText' variant="p" color="text.secondary">
            {props.major} {props.year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button size="small" color="primary">
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
}