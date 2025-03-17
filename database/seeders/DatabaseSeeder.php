<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        //php artisan db:seed
        User::create([
            'name' => 'admin',
            'email' => 'admin@123',
            'password' => '123456',
            'is_admin' => true,
        ]);
        
    }
}
