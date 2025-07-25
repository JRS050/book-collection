<?php

namespace App\Http\Controllers;
use App\Models\Book;
use App\Http\Resources\BookResource;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index() {
        return BookResource::collection(Book::all());
    }
}
