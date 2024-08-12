import React from 'react';
import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  SvgIcon,
  ThemeProvider,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu
} from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// Import ShoppingCartIcon
import { CryptoState } from '../CryptoContext';
import LogOut from './LogOut';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  cartIcon: {
    marginLeft: 20
  }
}));

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const navigate = useNavigate();
  console.log(currency);

  // State for Cart Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleCartClick = (event) => {
    navigate("/addCart");
  };

  const handleCloseCartMenu = () => {
    setAnchorEl(null);
  };

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar className='d-flex align-item-center justify-content-between'>
            <Typography
              className={classes.title}
              variant='h6'
            >
              Crypto <span>Hunter</span>
            </Typography>
            <Typography style={{
              height: 40,
              aspectRatio: 1,
              marginRight: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: 'center'
            }}>
              <HomeIcon color="action" />
              <IconButton
                style={{
                  height: 40,
                  aspectRatio: 1,
                  marginRight: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: 'center'
                }}
                className={classes.cartIcon}
                color="inherit"
                onClick={handleCartClick}
              >
                <div onClick={()=>{navigate("/addCart")}}>
                  <Badge  color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </div>
              </IconButton>
            </Typography>
            <Select
              variant='outlined'
              style={{
                width: 100,
                height: 40,
                marginRight: 15
              }}
              value={currency}
              onChange={(e) => { setCurrency(e.target.value) }}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'INR'}>INR</MenuItem>
            </Select>



            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseCartMenu}
            >
              {/* Add cart items or placeholder */}
              <MenuItem>
                <Typography variant="body2">Your cart is empty</Typography>
              </MenuItem>
            </Menu>

            <div className='btn btn-outline-secondary'>
              <LogOut />
              LogOut
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
