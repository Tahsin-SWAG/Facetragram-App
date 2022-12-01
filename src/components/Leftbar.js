import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import { Container } from '@mui/system';
import StoreIcon from '@mui/icons-material/Store';
import { Typography , Avatar , Box} from '@mui/material';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FlagIcon from '@mui/icons-material/Flag';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NestedList from './Collapse';
import { useAuth } from './Firebase';
export default function Leftbar() {

  const profile = useAuth();

  return (
  <Container  sx={{ width:'20%' ,bgcolor: 'background.paper' , float:'left' , display:{sm:'none' , xs:'none' , md:'block' } , borderRight:'1px solid grey' , height:"100vh" , position:'fixed'}}>
     <Typography variant='h4' sx={{mt:3}}>Facetragram</Typography>
        <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
           <PeopleIcon/>
          </ListItemIcon>
          <ListItemText primary="Find Friends"/>
        </ListItemButton>
        <ListItemButton
        >
          <ListItemIcon>
           <GroupsIcon/>
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        
        <ListItemButton
          
        >
          <ListItemIcon>
            <StoreIcon/>
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      
        <ListItemButton
          
        >
          <ListItemIcon>
            <SmartDisplayIcon/>
          </ListItemIcon>
          <ListItemText primary="Watch"/>
        </ListItemButton>
        
        <ListItemButton>
          <ListItemIcon>
            <SaveAltIcon/>
          </ListItemIcon>
          <ListItemText primary="Saved" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <FlagIcon/>
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <EventAvailableIcon/>
          </ListItemIcon>
          <ListItemText primary="Event" />
        </ListItemButton>

        
        <ListItemButton>
          <ListItemIcon>
            <Avatar sx={{width:'25px' , height:'25px'}}  src={profile?.photoURL}/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
<NestedList/>
      <Box>
      </Box>
      </List>
    </Container>
  );
}
