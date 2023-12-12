import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CatImage from './Image'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function BasicCard(props) {
  console.log('props', props)
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CatImage url={props.catInfo.img}/>
        <Typography>Name : {props.catInfo.name}</Typography>
        <Typography>Origin : {props.catInfo.origin}</Typography>
        <Typography> Weight : {props.catInfo.weight}</Typography>
        <Typography> HairLess : {props.catInfo.hairless}</Typography>
        <Link href={props.catInfo.wiki} target="_blank">Cat Details</Link> 
        </CardContent>
    </Card>
  );
}
