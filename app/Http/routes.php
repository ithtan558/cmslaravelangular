<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
/* Define all variable gobal for website */
define('TYPE_END_URL','.html');
/* End define all variable gobal for website */

Route::get('/', 'admin\User@index');

Route::get('add-user'.TYPE_END_URL.'', [
	'as' => 'add_user',
	'uses' => 'admin\User@create'
]);