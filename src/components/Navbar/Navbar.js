import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import ContactsIcon from '@material-ui/icons/Contacts';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';
import logo from "./logo.jpg";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Musical Instruments
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
            <IconButton component={Link} to="/Contacts" aria-label="Contacts" color="inherit">
                <ContactsIcon/>
            </IconButton>
            <IconButton component={Link} to="/logIn" aria-label="Contacts" color="inherit">
                <LockOpenIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;