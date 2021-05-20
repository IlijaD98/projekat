import Header from "./Header"
import {useState} from 'react'

function AddBook(){
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [genre,setGenre]=useState("");
    const [autor,setAutor]=useState("");
    const [quantity,setQuantity]=useState("");
    const [file,setFile]=useState("");

   async function addBook(){
        console.warn(name,description,genre,autor,quantity,file);
        const formData=new FormData();
        formData.append('file',file);
        formData.append('genre',genre);
        formData.append('name',name);
        formData.append('description',description);
        formData.append('autor',autor);
        formData.append('quantity',quantity);
        
        let result=await fetch("http://localhost:8000/api/addBook",{
            method:'POST',
            body:formData,
            
        });
        alert("Data has been saved");
    }
    return(
        <div>
            <Header/>
            <h1>Unesite novu knjigu</h1>
            <div className="col-sm-6 offset-sm-3">
            <label>Unesite naziv knjige</label>
            <input type="text" placeholder="" onChange={(e)=>setName(e.target.value)}  className="form-control"/>
            <br/>
            <label>Unesite žanr knjige</label>
            <input type="text" placeholder="" onChange={(e)=>setGenre(e.target.value)} className="form-control"/>
            <br/>
            <label>Unesite kratak opis knjige</label>
            <input type="text" placeholder="" onChange={(e)=>setDescription(e.target.value)} className="form-control"/>
            <br/>
            <label>Unesite autora</label>
            <input type="text" placeholder="" onChange={(e)=>setAutor(e.target.value)} className="form-control"/>
            <br/>
            <label>Unesite količinu</label>
            <input type="text" placeholder="" onChange={(e)=>setQuantity(e.target.value)} className="form-control"/>
            <br/>
            <label>Unesite sliku</label>
            <input type="file" placeholder="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control"/>
            <br/>
            <button className="btn btn-primary" onClick={addBook}>Add Product</button>
            </div>
        </div>
    )
}

export default AddBook