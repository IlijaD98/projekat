import Header from "./Header"
import {useState} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function SearchBook(){
    const [data,setData]=useState([])
    async function search(key){
        // console.warn(key);
        let result=await fetch("http://localhost:8000/api/search/"+key);
        result=await result.json();
        // console.warn(result)
        setData(result)
    }
   
    return (
        <div>
            <Header/>
            
            <div className="col-sm-6 offset-sm-3">
                <h1>Pretraži knjige</h1>
                <br/>
                <input type="text" onChange={(e)=>search(e.target.value)} className="form-control"/>
                <br/>
                <Table>
                <tr>
                    <td>Id</td>
                    <td>Naslov</td>
                    <td>Žanr</td>
                    <td>Opis</td>
                    <td>Pisac</td>
                    <td>Količina</td>
                    <td>Slika</td>
                   
                </tr>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.genre}</td>
                    <td>{item.description}</td>
                    <td>{item.autor}</td>
                    <td>{item.quantity}</td>
                    <td><img style={{width:100}} src={"http://localhost:8000/"+item.file_path}/></td>
                        
                    </tr>
                    )
                }
            </Table>
            </div>
        </div>
    )
}

export default SearchBook