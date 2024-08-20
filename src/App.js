// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from './component/Header';
// import HomePage from './component/HomePage';
// import Coin from './component/Coin';
// import { makeStyles } from '@material-ui/core';
// import SignupForm from './component/SingUpForm';
// import FavList from './component/FavList';
// import { FavProvider } from './component/FavContext';
// import LogOut from './component/LogOut';
// import StockBuySell from './component/StockBuySell';
// import CryptoContext from './CryptoContext';
// import SignInForm from './component/SigninForm';

// const useStyles = makeStyles(() => ({
//   App: {
//     backgroundColor: "#14161a",
//     color: "white",
//     minHeight: "100vh"
//   }
// }));

// function App() {
//   const classes = useStyles();

//   return (
//     <CryptoContext>
//       <FavProvider>
//         <div className={classes.App}>
//           <Header />
//           <Routes>
//             <Route path='/' element={<HomePage />} />
//             <Route path='/coins/:id' element={<Coin />} />
//             <Route path='/signUp' element={<SignupForm />} />
//             <Route path='/signIn' element={<SignInForm />} />
//             <Route path='/addCart' element={<FavList />} />
//             <Route path='/logout' element={<LogOut />} />
//             <Route path='/buysellstock' element={<StockBuySell />} />
//           </Routes>
//         </div>
//       </FavProvider>
//     </CryptoContext>
//   );
// }

// export default App;


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
import StockBuySell from './component/StockBuySell';
import CryptoContext from './CryptoContext';
import SignInForm from './component/SigninForm';
import Protected from './component/ProtectedRoute/Protected';


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
              path='/buysellstock'
              element={
                <Protected>
                  <StockBuySell />
                </Protected>
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
