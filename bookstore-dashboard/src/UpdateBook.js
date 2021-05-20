import Header from './Header'
import {withRouter} from 'react-router-dom'
import {useState,useEffect} from 'react'

function UpdateBook(props){
    console.warn("props",props.match.params.id)
     const [data,setData]=useState([])
     const [name,setName]=useState("");
     const [description,setDescription]=useState("");
     const [genre,setGenre]=useState("");
     const [autor,setAutor]=useState("");
     const [quantity,setQuantity]=useState("");
     const [file,setFile]=useState("");
     useEffect( async ()=>{
             let result= await fetch("http://localhost:8000/api/book/"+props.match.params.id)
             result=await result.json();
             setData(result)
            setName(result.name)
             setDescription(result.description)
             setGenre(result.genre)
              setAutor(result.autor)
               setQuantity(result.quantity)
       setFile(result.file)
     })
    return(
        <div>
            <Header/>
            <h1>Ažuriraj podatke o knjizi</h1>
            <div className="col-sm-6 offset-sm-3">
            <label>Unesite naslov knjige</label>
            <input type="text" defaultValue={data.name} className="form-control"/>
            <br/>
            <label>Unesite žanr knjige</label>
            <input type="text" defaultValue={data.genre}  className="form-control"/>
            <br/>
            <label>Unesite kratak opis knjige</label>
            <input type="text"  defaultValue={data.description} className="form-control"/>
            <br/>
            <label>Unesite pisca</label>
            <input type="text"  defaultValue={data.autor} className="form-control"/>
            <br/>
            <label>Unesite količinu</label>
            <input type="text" defaultValue={data.file_path} defaultValue={data.quantity} className="form-control"/>
            <br/>
            <label>Enter file</label>
            <input type="file"  className="form-control"/>
            <br/>
            <img style={{width:100}} src={"http://localhost:8000/"+data.file_path}/>
            <br/>
            <br/>
            <button className="btn btn-primary" >Update Product</button>
            </div>
        </div>
    )
}

export default withRouter(UpdateBook)