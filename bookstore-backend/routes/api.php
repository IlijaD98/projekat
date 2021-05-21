<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register' ,[UserController::class,'register']);
Route::post('login' ,[UserController::class,'login']);
Route::post('addBook' ,[BookController::class,'addBook']);
Route::get('list' ,[BookController::class,'list']);
Route::delete('delete/{id}' ,[BookController::class,'delete']);
Route::get('book/{id}' ,[BookController::class,'getBook']);
Route::put('updatebook/{id}',[BookController::class,'updateBook']);
Route::get('search/{key}' ,[BookController::class,'search']);