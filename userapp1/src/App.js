
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Adduser from './Components/Users/Adduser';
import Edit from './Components/Users/Edit';
import User from './Components/Users/User';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/Layout/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
     <div className="App"> 
   <Navbar />
         <Routes>
         <Route exact path="/home"  element={<Home />}>Home</Route>
         <Route exact path="/About"  element={<About />}>About</Route>
         <Route exact path="/Contact"  element={<Contact />}>Contact</Route>
         <Route exact path="/Users/add"  element={<Adduser />}>Adduser</Route>
         <Route exact path="/Users/:id"  element={<User />}>User</Route>
         <Route exact path="/Users/edit/:id"  element={<Edit />}>Edit</Route>
</Routes>
       </div>
     </Router>
    
  );
}

export default App;
