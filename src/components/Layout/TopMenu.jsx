import { Avatar, IconButton, Link, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Layout.css";
const TopMenu = () => {
    return (
      <React.Fragment>
        <Box className="box-menu">
          <Link className="link-menu" href="#">
            Home
          </Link>
          <Link className="link-menu" href="#">
            Approved List
          </Link>
          <Link className="link-menu" href="/toBeApproved">
            To Be Approved
          </Link>
          <Link className="link-menu" href="#">
            Profile
          </Link>
          {/* <Typography sx={{ minWidth: 150 }}>Home</Typography>
          <Typography sx={{ minWidth: 150 }}> </Typography>
          <Typography sx={{ minWidth: 150 }}></Typography> */}
          <Tooltip title="Account settings">
            <IconButton size="small" sx={{ ml: 2 }}>
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      </React.Fragment>
    );
}
 
export default TopMenu;