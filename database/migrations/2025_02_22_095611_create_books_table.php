<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->string('isbn')->primary();
            $table->string('name');
            $table->string('author',255);
            $table->string('description');
            $table->decimal('price',10,2)->nullable();
            $table->string('image');
            $table->integer('quantity')->nullable();
            $table->enum('status', ['available', 'out_of_stock', 'hidden'])->default('available');
            $table->string('category');
            $table->string('publisher')->default('bookstoreM&H');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
