import Header from './Header'
import React,{useState,useEffect, isValidElement} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function BookList(){
    const [data,setData]=useState([]);
    useEffect( ()=>{
       getData();
    },[])
    console.warn("result",data);

    async function deleteOperation(id){
        let result= await fetch("http://localhost:8000/api/delete/"+id,{
            method:'DELETE',
        });
        result=await result.json();
        console.warn(result)
        getData();
    }
   async function getData(){
        let result= await fetch("http://localhost:8000/api/list");
        result = await result.json();
       setData(result)
    }
    return(
        <div>
            <Header/>
            <h1>Lista knjiga</h1>
            <br/>
            <div className="col-sm-8 offset-sm-2">
            <Table responsive>
                <tr>
                    <td>Id</td>
                    <td>Naslov</td>
                    <td>Žanr</td>
                    <td>Opis</td>
                    <td>Pisac</td>
                    <td>Količina</td>
                    <td>Slika</td>
                    <td>Operacije</td>
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
                        <td><span className="delete" onClick={()=>deleteOperation(item.id)}>Obriši</span></td>
                        <td>
                            <Link to={"update/"+item.id}>
                            <span className="update">Update</span>
                            </Link>
                            </td>
                        
                    </tr>
                    )
                }
            </Table>
            </div>
        </div>
    )

}
export default BookList;