<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Http\Requests;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\User;
use Validator;

class AuthController extends Controller
{

    public function login(Request $request) {

        $credentials = $request->only('email', 'password');

        try {
            $token = JWTAuth::attempt($credentials);
            if (!$token) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 400);
        }

        return response()->json(compact('token'), 200);
    }

    public function register(Request $request) {

        $credentials = $request->only('email', 'password', 'name');

        $validator = Validator::make($credentials, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:5',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['error' => array(
                'name'     => $errors->first('name'),
                'email'    => $errors->first('email'),
                'password' => $errors->first('password'),
            )], 400);
        }

        $user = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => bcrypt($request->password),
        ]);

        $token = JWTAuth::fromUser($user);
        return response()->json(compact('token'));
    }
}
