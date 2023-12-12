import MyNavbar from "./components/MyNavbar";
import HomePage from './Screens/HomePage';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './Screens/SignInPage';
import SignUpPage from './Screens/SignUpPage';
function App() {
  return (
      
      <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path = "/home" element ={<HomePage/>}></Route>
        <Route path = "/signin" element ={<SignInPage/>}></Route>
        <Route path ="/signup" element = {<SignUpPage/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
