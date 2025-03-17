<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\BooksStoreRequest;
use Illuminate\Http\Request;
use App\Models\Books;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class BooksController extends Controller
{
    public function index(Request $request)
    {
        $query = Books::query();
        if ($s = $request->input('name')) {
            $query->where('name', 'like', '%' . $s . '%');
        }
        if ($a = $request->input('author')) {
            $query->where('author', 'like', '%' . $a . '%');
        }
        if ($c = $request->input('category')) {
            $query->where('category', 'like', '%' . $c . '%');
        }
        $books = $query->paginate(10);
        return response()->json([
            'Result' => $books
        ], 200);
    }
    public function show($isbn)
    {
        $book = books::where('isbn',$isbn)->first();
        if (!$book) {
            return response()->json([
                'message' => "Book not found."
            ], 404);
        }
        return response()->json([
            'Result' => $book
        ], 200);
    }
    public function store(BooksStoreRequest $request)
    {
        try {
            $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
            Storage::disk('public')->put($imageName, file_get_contents($request->image));
            books::create([
                'isbn' => $request->isbn,
                'name' => $request->name,
                'author' => $request->author,
                'description' => $request->description,
                'price' => $request->price,
                'quantity' => $request->quantity,
                'category' => $request->category,
                'image' => $imageName,
            ]);
            return response()->json([
                'message' => "book successfully create.'$request->name' -- '$imageName' "
            ], 200);
        } catch (\exception $e) {
            return response()->json([
                'Message' => "something went really wrong ! when create book",
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    public function update(BooksStoreRequest $request, $isbn)
    {
        try {
            $book = books::find($isbn);
            if (!$book) {
                return response()->json([
                    'Message' => "book is not found"
                ], 200);
            }

            $book->isbn = $request->isbn;
            $book->name = $request->name;
            $book->author = $request->author;
            $book->description = $request->description;
            $book->price = $request->price;
            $book->quantity = $request->quantity;
            $book->category = $request->category;
            $book->status = $request->status;

            if ($request->hasFile('image')) {
                $storage = Storage::disk(('public'));

                if (!empty($book->image) && $storage->exists($book->image)) {
                    $storage->delete($book->image);
                }
                // Image name
                $imageName = Str::random(32) . "." . $request->image->getClientOriginalExtension();
                $book->image = $imageName;

                // Image save in public folder
                $storage->put($imageName, file_get_contents($request->image));
            }

            $book->save();

            return response()->json([
                'message' => "book is updated"
            ], 500);
        } catch (\Exception) {
            return response()->json([
                'message' => "something went really wrong"
            ], 500);
        }
    }
    public function destroy($isbn)
    {
        try {
            $book = books::find($isbn);
            if (!$book) {
                return response()->json([
                    'message' => "book is not found"
                ], 200);
            }

            $bookInOrderDetail = DB::table('order_details')->where('book_id', $isbn)->exists();
            if ($bookInOrderDetail) {
                return response()->json([
                    'message' => "book is in order detail. you can't delete this book. pls update status to hidden"
                ], 200);
            }

            $storage = Storage::disk('public');
            if (!empty($book->image) && $storage->exists($book->image)) {
                $storage->delete($book->image);
            }
            $book->delete();
            return response()->json([
                'message' => "book is deleted"
            ], 200);
        } catch (\Exception) {
            return response()->json([
                'message' => "something went really wrong"
            ], 500);
        }
    }
}
