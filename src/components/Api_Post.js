/* eslint-disable react/jsx-no-comment-textnodes */
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { Button,  Typography ,Box, Card, CardHeader , Avatar , CardContent, CardMedia} from '@mui/material';


export default function Api_Post(){

    const [all , setall] = useState([]);
    const [error , setError] = useState(null);


    const fetch = () => {

       axios.get("https://gnews.io/api/v4/top-headlines?token=c00cb27c6b2c2bb3f88ffdf049b095f2&topic=breaking-news")
         .then((res) => {
            setall(res.data.articles);    
            console.log(res.data.articles);     
        })
        .catch((err) => {
            setError('Oops! Something went wrong please try again later');
        })
    }
    

    if(error === null){
        return (
            <Container sx={{ display: "flex", mt: 3, ml: { md: "-4.5%", sm: 0, xs: 0 } }}>
                <Box>
                <Box sx={{justifyContent:'center' , alignItems :"center" , display:'flex'}}>
                </Box>
        
                <Box>
                    {all.map((item) => (
                        <Card
                        sx={{
                          maxWidth: 475,
                          maxHeight: 700,
                          mt: 5,
                          border: "1px solid gray",
                        }}
                      >
                          <CardHeader
                          avatar={
                            <Avatar src={item.image}/>
                          }
                          title={item.source.name}
                          subheader={item.publishedAt}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {item.title}
                          </Typography>
                          <hr></hr>
                          <a style={{fontSize:'14px'}} href={item.source.url}>Learn more</a>
                        </CardContent>
                        <CardMedia><img src={item.image} alt='' style={{width:'100%'}}/></CardMedia>
                      </Card>
                        ))}
                </Box>
                <Button onClick={fetch}  sx={{margin:'auto'}} variant='contained'>Show Public Post</Button>
                </Box>
            </Container>
        )
    } else {
        return (
            <Container sx={{mt:3}}>
                <Typography color="error">{error}</Typography>
            </Container>
        )
    }
}
