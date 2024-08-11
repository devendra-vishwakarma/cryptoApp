import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import HomePage from './component/HomePage';
import Coin from './component/Coin';
import { makeStyles } from '@material-ui/core';
import SignupForm from './component/SingUpForm';


function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight:"100vh"
    }

  }));

  const classes = useStyles();
  return (
    <>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/coins/:id' element={<Coin />} />
          <Route path='/signUp' element={<SignupForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
