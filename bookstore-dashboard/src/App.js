import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddBook from './AddBook'
import UpdateBook from './UpdateBook'
import Protected from './Protected'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Switch>
     <Route path="/login">
       <Login/>
     </Route>
     <Route path="/register">
       <Register/>
     </Route>
    
     <Route path="/add">
       <Protected Cmp={AddBook} />
       {/* <AddProduct/> */}
     </Route>
     <Route path="/update">
       <Protected Cmp={UpdateBook} />
       {/* <UpdateProduct/> */}
     </Route>
     
     
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
