/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import Api_Post from "./Api_Post";
import red from "../Images/animeBoy.jpg";
import { useContext,  useState } from "react";
import {Button,Typography,Card,CardContent,CardHeader,Avatar,CardMedia,IconButton} from "@mui/material";
import { Box, Container } from "@mui/system";
import {Profile} from "./Styled";
import Notepad from "../context/Notepad";
import { useAuth } from "./Firebase";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import {logout} from './Firebase' 


export default function Onmind() {
  const [title , setTitle] = useState('');
  const [main_data , setMain_data] = useState([{caption:[] , picture:[]}]);
  const [phoco , setPhoco] = useState([]);
  const [time , setTime] = useState();

  const a = useContext(Notepad);

  const profile = useAuth()


  const handleCaptionn = (e) => {
    setTitle(e.target.value);
  };


  const handlePhoto = (files) => {
    const objet = new FormData();
    objet.append('file' , files[0]);
    objet.append('upload_preset' , 'a9djb0yl');
    axios.post("https://api.cloudinary.com/v1_1/dslcmjjf6/image/upload" , objet)
    .then((res) => {
     setPhoco([res.data.secure_url]);
    })
    .catch((err) => {
      console.log(err);
    }
    )
  };


  const upload = () => {
    const data = {
      caption : title,
      picture : phoco,
    }

    setMain_data([ data ,...main_data]);
    setTitle('');
    setPhoco([]);
    setTime(new Date().getMonth() + 1 + '/' + new Date().getDate() + '/' + new Date().getFullYear());
  }

  const delet = (index) => {
    const newPost = main_data.filter((post , i) => i !== index);
    setMain_data(newPost);
  }


  return (
    <Container sx={{ display: "flex", mt: 3, ml: { md: "39%", sm: 0, xs: 0 } }}>
      <Box  sx={{ ml: -1 , maxWidth:420}}>
          <Box sx={{ border: "1px solid gray", p: 2, borderRadius: "7px"}}>
            <Profile src={profile?.photoURL} style={{ marginTop: "5px" }} />
            <TextField
              sx={{ width: "80%", ml: 2 }}
              id="outlined-basic"
              label="Click to post"
              variant="outlined"
              onChange={(e) => handleCaptionn(e)}
              placeholder="What's on your mind?"
            />
            <hr style={{ marginTop: "20px" }}></hr>
            <Box>
              <input type='file' onChange={(e) => handlePhoto(e.target.files)}/>
              <Button color='error' onClick={logout} sx={{float:'end'}} variant='outlined'>Logout</Button>
            </Box>
          </Box>
          <Box>
            <p
              style={{
                color: a === false ? "white" : "black",
                textAlign: "center",
              }}
            >
              your Post : {main_data.length}

            </p>
            <p style={{justifyContent:'center' , alignItems:'center' , color:'grey' , marginLeft:'40px' , fontSize:'14px'}}>please wait few secends after choose a picture</p>
            <Button
              variant="contained"
              onClick={upload}
              sx={{margin:'auto' , display:'block' , width:'80%' , mt:2}}
              disabled={title === ''}
            >
              Post
            </Button>
          </Box>
          <Box>
          {main_data.map((data , index) => (
                <Card sx={{ maxWidth: 420 , mt:4}}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red }} aria-label="recipe" src={profile?.photoURL}/>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <DeleteIcon onClick={() => delet(index)}/>
                    </IconButton>
                  }
                  title={profile?.displayName}
                  subheader={time}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {data.caption}
                  </Typography>
                </CardContent>
                <CardMedia height='194'> <img src={data.picture} style={{width:'100%'}}/></CardMedia>
              </Card>
            ))}
        </Box>
        <Api_Post/>
      </Box>
    </Container>
  );
}
