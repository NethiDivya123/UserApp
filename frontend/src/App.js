import './App.css';
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateComponent from './Components/CreateComponent';
import ViewComponent from './Components/ViewComponent';
import ListComponent from './Components/ListComponent';
import UpdateComponent from './Components/UpdateComponent';

 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent />
      <div className='container'>
      <Switch>
      <Route path = "/" exact component = {ListComponent}></Route>
      <Route path = "/user" component = {ListComponent}></Route>
      <Route path = "/add-user/:id" component = {CreateComponent}></Route>
      <Route path = "/view-user/:id" component = {ViewComponent}></Route>
     <Route path = "/update-user/:id" component = {UpdateComponent}></Route>
       
      </Switch>
      
      </div>
      <FooterComponent/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
