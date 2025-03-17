<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
   
    protected $fillable = [
        'isbn',
        'name',
        'author',
        'description',
        'price',
        'image',
        'quantity',
        'category',
    ];
    protected $casts = [
        'price' => 'double',
        'quantity' => 'integer',

    ];
}
