<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    //
    function addBook(Request $req){
        $book=new Book;
        $book->name=$req->input('name');
        $book->genre=$req->input('genre');
        $book->description=$req->input('description');
        $book->autor=$req->input('autor');
        $book->file_path=$req->file('file')->store('books');
        $book->quantity=$req->input('quantity');
        $book->save();
        return $book;
    }

    function list(){
        return Book::all();
    }

    function delete($id){
        $result=Book::where('id',$id)->delete();
        if($result){
            return ["result"=>"Book has been deleted"];
        }
        else{
            return["result"=>"Operation failed"];
        }
    }

    function getBook($id){
        return Book::find($id);
    }

    function search($key){
        return Book::where('name','Like',"%$key%")->get();
    }
}
