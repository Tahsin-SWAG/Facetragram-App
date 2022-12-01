/* eslint-disable react/jsx-no-comment-textnodes */
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { Button,  Typography ,Box, Card, CardHeader , Avatar , CardContent, CardMedia} from '@mui/material';


export default function Api_Post(){

    const [all , setall] = useState([]);
    const [error , setError] = useState(null);


    const fetch = () => {
       axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=4c505d8e146442d1a89aa11ebcd0321f")
         .then((res) => {
           const data = res.data.articles;
            setall(data)          
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
                <Button onClick={fetch}  sx={{margin:'auto'}}>Show Public Post</Button>
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
                            <Avatar src={item.urlToImage}/>
                          }
                          title={item.author}
                          subheader={item.publishedAt}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {item.content}
                          </Typography>
                        </CardContent>
                        <CardMedia><img src={item.urlToImage} alt='' style={{width:'100%'}}/></CardMedia>
                      </Card>
                        ))}
                </Box>
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
