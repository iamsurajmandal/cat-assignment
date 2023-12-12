import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import axios from 'axios'

export default function BasicTable(props) {
    const [rows, setRows] = useState([]);
    const handleCat = (event) =>{
        const data = rows.filter((item) => item.id === event)[0];
        console.log(data)
        const catDetails = {
            name: data.name,
            origin: data.origin,
            hairless: data.hairless,
            weight: data.weight.imperial,
            img: data.image.url,
            wiki: data.wikipedia_url
          }
        props.setCatInfo(catDetails);
    }
    useEffect(() => {
     const pageNumber = 0;
     axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${pageNumber}`, {
        headers: {
        'x-api-key': 'live_HPvtNnVPu1A9xKut0K5qyf3W1PDYmtd0bF5cO9E4b91gexTeAIiryvgkuMhgSiqP'
        }
      }).then((success)=>{
        setRows(success.data);
        const item = success.data;
        const catDetails = {
            name: item[0].name,
            origin: item[0].origin,
            hairless: item[0].hairless,
            weight: item[0].weight.imperial,
            img: item[0].image.url,
            wiki: item[0].wikipedia_url
          }
        props.setCatInfo(catDetails);
     }).catch((err)=>{
        console.log(err);
     })
    }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Breed Name</TableCell>
            <TableCell align="right"> Breed Origin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" minWidth={100}>
             
              <Button  value={row.id} onClick={()=>handleCat(row.id)}>
              {row.name} 
              </Button>
              </TableCell>
              <TableCell align="right">{row.origin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
