import logo from './logo.svg';
import './App.css';
import MyNavbar from "./components/MyNavbar";
import HomePage from './Screens/HomePage';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <MyNavbar />
       <HomePage/>
       <Footer/>
    </div>
    
  );
}

export default App;
