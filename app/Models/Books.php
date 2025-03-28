<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    protected $primaryKey = 'isbn'; // Đặt khóa chính là isbn
    public $incrementing = false; // Vì isbn là string, không phải số tự tăng
    protected $keyType = 'string'; // Xác định khóa chính là kiểu string

    protected $fillable = [
        'isbn',
        'name',
        'author',
        'description',
        'price',
        'image',
        'quantity',
        'category',
        'status',
    ];
    protected $casts = [
        'price' => 'double',
        'quantity' => 'integer',

    ];
}
