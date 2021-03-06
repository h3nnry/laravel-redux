<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([
    'namespace'  => 'Api',
    'prefix'     => 'api/v1',
    'middleware' => ['api']
], function () {

    Route::post('/login',    'AuthController@login');
    Route::post('/register', 'AuthController@register');


    Route::group([ 'middleware' => ['jwt.auth'] ], function () {

        Route::get('/user', 'UserController@getAuthenticatedUser');

    });
});