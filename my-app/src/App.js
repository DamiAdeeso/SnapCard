import MyNavbar from "./components/MyNavbar";
import HomePage from './Screens/HomePage';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './Screens/SignInPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import SignUpPage from "./Screens/SignupPage";
function App() {
  return (
      
      <BrowserRouter>
      <MyNavbar />
      <ToastContainer/>
      <Routes>
        <Route path = "/dashboard" element ={<HomePage/>}></Route>
        <Route path = "/signin" element ={<SignInPage/>}></Route>
        <Route path ="/signup" element = {<SignUpPage/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
