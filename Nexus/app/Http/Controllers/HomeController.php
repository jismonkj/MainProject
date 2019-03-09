<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if(Auth::user()->type == 'admin'){
            return view('layouts.admin');
        }
        else if(Auth::user()->type == 'distrib'){

        }else{
            return view('/nexushome');
        }
    }

    public function getUserInfo()
    {
        return Auth::user();
    }
}
