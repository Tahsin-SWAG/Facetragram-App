import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CampaignIcon from '@mui/icons-material/Campaign';
import GamesIcon from '@mui/icons-material/Games';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';



export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <CampaignIcon/>
          </ListItemIcon>
          <ListItemText primary="Ad Center" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <BloodtypeIcon/>
          </ListItemIcon>
          <ListItemText primary="Blood Donations" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <GamesIcon/>
          </ListItemIcon>
          <ListItemText primary="Play Games" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CurrencyBitcoinIcon/>
          </ListItemIcon>
          <ListItemText primary="Facebook Pay" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <LiveTvIcon/>
          </ListItemIcon>
          <ListItemText primary="Live Tv" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <FavoriteIcon/>
          </ListItemIcon>
          <ListItemText primary="Emotional health" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <LocalFireDepartmentIcon/>
          </ListItemIcon>
          <ListItemText primary="Climate Science center" />
        </ListItemButton>
       
        </List>
      </Collapse>
    </List>
  );
}
