<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserStoreRequest;
use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query();
        if ($s = $request->input('email')) {
            $query->where('email', 'like', '%' . $s . '%');
        }
        $users = $query->paginate(10);
        return response()->json([
            'Result' => $users
        ], 200);
    }

    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'message' => "User not found."
            ], 404);
        }
        return response()->json([
            'Result' => $user
        ], 200);
    }
    public function store(UserStoreRequest $request)
    {
        try {
            User::create([
                'id' => $request->id,
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
                'phone' => $request->phone,
                'address' => $request->address,

            ]);
            return response()->json([
                'message' => "User created successfully. '$request->name'"
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "User created failed."
            ], 400);
        }
    }

    public function update(UserStoreRequest $request, $id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                return response()->json([
                    'message' => "User not found."
                ], 404);
            }

            $user->name = $request->name;
            $user->email = $request->email;
            if ($request->password) {
                $user->password = $request->password;
            }
            $user->address = $request->address;
            $user->phone = $request->phone;
            $user->is_admin = $request->is_admin;




            $user->save();

            return response()->json([
                'message' => "User updated successfully. "
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "User updated failed.",
                $e->getMessage()
            ], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                return response()->json([
                    'message' => "User not found."
                ], 404);
            }
            $user->delete();

            return response()->json([
                'message' => "User deleted successfully."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "User deleted failed.",
            ], 400);
        }
    }
}
