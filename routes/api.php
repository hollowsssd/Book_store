<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BooksController;
use App\Models\Books;

//php artisan install:api

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//api user
Route::get('users', [UserController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::post('AddUsers', [UserController::class, 'store']);
Route::post('usersUpdate/{id}', [UserController::class, 'update']);
Route::get('users/search',[UserController::class, 'search']);
Route::delete('usersDelete/{id}',[UserController::class,'destroy']);


//api books
Route::get('books',[BooksController::class,'index']);
Route::get('books/{isbn}', [BooksController::class, 'show']);
Route::post('addBook', [BooksController::class, 'store']);
Route::post('booksUpdate/{isbn}', [BooksController::class, 'update']);
Route::get('books/search',[BooksController::class, 'search']);
Route::delete('booksDelete/{isbn}',[BooksController::class,'destroy']);


//api auth
Route::post('/auth/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/auth/logout', [AuthController::class, 'logout']);

Route::post('/auth/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->get('profile', [AuthController::class, 'profile']);





