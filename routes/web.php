<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'StraniceController@index');

Route::get('/termini/getSvi', 'TerminController@sviTermini');
Route::get('termin/prijave', 'TerminController@svePrijave');
Route::get('/prijave/get', 'PrijavaController@getPrijave');

Route::put('/prijava/editPrijava', 'PrijavaController@editPrijava');
Route::delete('/prijave/deletePrijava', 'PrijavaController@deletePrijava');
Route::post('/prijave/addPrijava', 'PrijavaController@addPrijava');
