import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login_page from './pages/Login_page';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Landing}/>
        <Route path='/login' Component={Login_page}/>
      </Routes>  
    </Router>
  );
}

export default App;
