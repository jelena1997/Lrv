<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StraniceController extends Controller
{
    public function index()
    {
        return view('index');
    }
}
