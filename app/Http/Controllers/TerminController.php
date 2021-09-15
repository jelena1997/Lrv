<?php

namespace App\Http\Controllers;

use App\Termin;
use Illuminate\Http\Request;

class TerminController extends Controller
{
    public function sviTermini()
    {
        $termini = Termin::all();

        return response()->json([
            'termini' => $termini
        ]);
    }

    public function svePrijave(Request $request)
    {
        $idTermina = $request->input('termin_id');
        $temaTermina = $request->input('tema');

        return view('prijave', [
            'terminID' => $idTermina,
            'tema' => $temaTermina,

        ]);
    }
}
