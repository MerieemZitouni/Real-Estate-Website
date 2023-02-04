import { Link} from 'react-router-dom'
import logo from "./Logo2.png";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton     
} from "@material-tailwind/react"
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';



import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { KeyboardEvent  } from 'react';



  


function Nav02() {
    type Anchor = 'top' | 'left' | 'bottom' | 'right';
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event &&
            event.type === 'keydown' &&
            ((event ).key === 'Tab' ||
              (event ).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
    
      const list = (anchor: Anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
          <Link to="/userinfo"> 
          <ListItem key={'profile'} disablePadding>
          
                <ListItemButton>
                
                  <ListItemIcon>
                    <AccountCircleSharpIcon fontSize='large'></AccountCircleSharpIcon>
                  </ListItemIcon>
                  <ListItemText primary={'profile'} />
                  
                </ListItemButton>
                
              </ListItem>
              </Link>
              <Link to="www.mail.google.com/"> 
            <ListItem key={'Inbox'} disablePadding>
          
          <ListItemButton>
          
            <ListItemIcon>
              <InboxIcon fontSize='large'></InboxIcon>
            </ListItemIcon>
            <ListItemText primary={'Inbox'} />
            
          </ListItemButton>
          
        </ListItem>
        </Link>
        <Link to="/contact"> 
        <ListItem key={'Send email'} disablePadding>
          
          <ListItemButton>
          
            <ListItemIcon>
              <MailIcon fontSize='large'></MailIcon>
            </ListItemIcon>
            <ListItemText primary={'Send email'} />
            
          </ListItemButton>
          
        </ListItem>
        </Link>
        <Link to="/"> 
            <ListItem key={'Déconnexion'} disablePadding>
          
          <ListItemButton>
          
            <ListItemIcon>
              <LogoutSharpIcon fontSize='large'></LogoutSharpIcon>
            </ListItemIcon>
            <ListItemText primary={'Déconnexion'} />
            
          </ListItemButton>
          
        </ListItem>
           </Link> 
          </List>
          <Divider />
          <List>
          <Link to="/creer"> 
            <ListItem key={'Ajouter Annonce'} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CreateSharpIcon fontSize='large'></CreateSharpIcon>
                  </ListItemIcon>
                  <ListItemText primary={'Ajouter Annonce'} />
                </ListItemButton>
              </ListItem>
              </Link>
              <Link to="/user"> 
              <ListItem key={'Lister Annonces'} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FormatListBulletedSharpIcon fontSize='large'></FormatListBulletedSharpIcon>
                  </ListItemIcon>
                  <ListItemText primary={'Lister Annonces'} />
                </ListItemButton>
              </ListItem>
              </Link>
          </List>
          
        </Box>
      );
  






return(
<Navbar 
        color='transparent'
        fullWidth
        className="fixed z-50 top-0 left-0 right-0 bg-darkBlue-100/50 backdrop-blur-sm py-2 px-4 lg:px-8 lg:py-4 "
      >
       <div className=' flex justify-between items-center px-14 pb-1' >
        <img className='pt-1' src={logo} width="180px" />
        <ul className='flex justify-center text-2xl gap-28 text-dark  '>
            <li className=' hover:text-green'> <Link to="/userinfo">Refisse Youcef <AccountCircleSharpIcon fontSize='large'></AccountCircleSharpIcon></Link></li>
            <li className=' hover:text-green'> 
            <React.Fragment key={'right'}>
            <button onClick={toggleDrawer('right', true)}>
                 <AppsSharpIcon fontSize='large'></AppsSharpIcon>
                </button>
        
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
            </li>
        </ul>
    </div>
  </Navbar>
);




}

export default Nav02 ; 



