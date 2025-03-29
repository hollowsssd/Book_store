<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;

        if (!$email || !$password) {
            return response()->json([
                'success' => false,
                'message' => "Please provide email and password"
            ], 400);
        }
        $status = Auth::attempt(['email' => $email, 'password' => $password]);
        if ($status) {
            $token = $request->user()->createToken('auth');
            return response()->json([
                'success' => true,
                'token' => $token->plainTextToken,
                'message' => "login success",
            ], 200);
        }

        return response()->json([
            'success' => false,
            'message' => "email or password is incorrect",
        ]);
    }
    public function profile(Request $request)
    {
        return response()->json([
            'success' => "true",
            'user' => $request->user(),
        ]);
    }

    public function logout(Request $Request)
    {

        $Request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => "User logged out",
        ]);
    }
    public function register(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;

        if (!$name || !$email || !$password) {
            return response()->json([
                'message' => 'Please provide name, email and password'
            ], 400);
        }
        $status = User::where('email', $email)->exists();
        if ($status) {
            return response()->json([
                'message' => 'email already exist'
            ], 400);
        }


        User::create([
            'name' => $name,
            'email' => $email,
            'password' => $password
        ]);
        return response()->json([
            'message' => 'User registered successfully'
        ], 201);
    }
}
