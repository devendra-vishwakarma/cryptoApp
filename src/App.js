import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import HomePage from './component/HomePage';
import Coin from './component/Coin';
import { makeStyles } from '@material-ui/core';
import SignupForm from './component/SingUpForm';
import FavList from './component/FavList';
import { FavProvider } from './component/FavContext';
import LogOut from './component/LogOut';
import CryptoContext from './CryptoContext';
import SignInForm from './component/SigninForm';
import Protected from './component/ProtectedRoute/Protected';
import UserProfile from './component/UserProfile';



const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <CryptoContext>
      <FavProvider>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signUp' element={<SignupForm />} />
            <Route path='/signIn' element={<SignInForm />} />

            {/* Protect the routes that require authentication */}
            <Route path='/coins/:id' element={<Protected><Coin /></Protected>} />
            <Route path='/addCart' element={
                <Protected>
                  <FavList />
                </Protected>
              }
            />
            <Route
              path='/userprofile'
              element={
                // <Protected>
                  <UserProfile />
                // </Protected>
              }
            />
            {/* <Route
              path='/logout'
              element={
                <Protected>
                  <LogOut />
                </Protected>
              }
            /> */}
          </Routes>
        </div>
      </FavProvider>
    </CryptoContext>
  );
}

export default App;
