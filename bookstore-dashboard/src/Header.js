import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

function Header(){
    let user=JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();
    function logOut(){
        localStorage.clear();
        history.push('/register');

    }
    return(
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Knjizara</Navbar.Brand>
    <Nav className="mr-auto navbar_wrapper">
        {
            localStorage.getItem('user-info')?
            <>
            
            <Link to="/book-list-advanced">Uredi knjige</Link>
            <Link to="/search">Pretraži knjige</Link>
            <Link to="/add">Dodaj knjigu</Link>
            {/* <Link to="/update">Update book</Link>
         */}
            </>
            :
            <>
          
             <Link to="/book-list">Knjige</Link>
             <Link to="/advice">Savet</Link>
             <Link to="/map">Mapa</Link>
            <Link to="/login">Login</Link>
             <Link to="/register">Registracija</Link>
            </>
        }
        
        
      
    </Nav>

    {localStorage.getItem('user-info')?
    <Nav>
        <NavDropdown title={user && user.name}>
            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    :null
    }
  </Navbar>
        </div>
    )
}

export default Header