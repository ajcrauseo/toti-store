import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  // MenuItem,
  // Menu,
  Typography,
} from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';

import totiImage from '../../assets/T-DE-TOTI.png';

import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Link to='/' className={classes.link}>
            <Typography variant='h6' className={classes.title} color='inherit'>
              <img
                src={totiImage}
                alt='Toti Store Logo'
                height='25px'
                className={classes.image}
              />
              Toti Store
            </Typography>
          </Link>
          <div className={classes.grow} />
          {location.pathname === '/' && (
            <div className={classes.button}>
              <Link to='/cart' className={classes.link}>
                <IconButton aria-label='Show cart items'>
                  <Badge badgeContent={totalItems} color='secondary'>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
