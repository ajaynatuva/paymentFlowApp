import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { sentEmailsToVendors } from "../../redux/actions/ServerActions/ServerActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Swal from "sweetalert2";

interface NavbarProps {
  username: string | null;
  userRole: string | null; // Assuming role is provided
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ username, userRole, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = async () => {
    await sentEmailsToVendors();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Email Sent To All Vendors",
      showConfirmButton: false,
      timer: 1500
    });
    handleMenuClose();
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          UPI APP
        </Typography>
        {username ? (
          <>
            <Button
              color="inherit"
              aria-controls="user-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              {userRole === "admin" ? "Admin Actions" : "Vendor Actions"}
              <ExpandMoreIcon sx={{ ml: 1 }} />
            </Button>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            >
              {userRole === "admin" && (
                <>
                  <MenuItem
                    component={Link}
                    to="/employeeList"
                    onClick={handleMenuClose}
                  >
                    Employee List
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/vendorsList"
                    onClick={handleMenuClose}
                  >
                    Vendors List
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/admin"
                    onClick={handleMenuClose}
                  >
                    Add Employee
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/emails"
                    onClick={handleMenuClose}
                  >
                   View All Vendor Emails
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/vendor"
                    onClick={handleMenuClose}
                  >
                    Add Vendor
                  </MenuItem>
                  <MenuItem onClick={handleClick}>
                    Send Emails to Vendors
                  </MenuItem>
                </>
              )}
              {userRole === "vendor" && (
                <>
                  <MenuItem
                    component={Link}
                    to="/vendorsList"
                    onClick={handleMenuClose}
                  >
                    Vendor List
                  </MenuItem>
                </>
              )}
            </Menu>
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
