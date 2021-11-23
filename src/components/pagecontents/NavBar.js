import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import Stack from '@mui/material/Stack';

class NavBar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (

            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit">Parts</Button>
                <Button color="inherit">News</Button>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  AUTO SERVICE
                </Typography>
            
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Box>


        )
    }
}
export default NavBar;