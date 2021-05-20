import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddBook from './AddBook'
import UpdateBook from './UpdateBook'
import Protected from './Protected'
import BookList from './BookList'
import BookListAdvaned from './BookListAdvanced'
import SearchBook from './SearchBook'
import Start from './Start'
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
     <Route path="/book-list">
       <BookList/>
     </Route>
    

    <Route path="/book-list-advanced">
       <Protected Cmp={BookListAdvaned} />
       {/* <AddProduct/> */}
     </Route>
     <Route path="/add">
       <Protected Cmp={AddBook} />
       {/* <AddProduct/> */}
     </Route>
     <Route path="/update/:id">
       <Protected Cmp={UpdateBook} />
       {/* <UpdateProduct/> */}
     </Route>
     <Route path="/search">
       <Protected Cmp={SearchBook} />
       {/* <UpdateProduct/> */}
     </Route>
     <Route path="/">
       <Start/>
     </Route>
     
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
