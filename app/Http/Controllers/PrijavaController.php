<?php

namespace App\Http\Controllers;

use App\Prijava;
use App\Termin;
use Illuminate\Http\Request;

class PrijavaController extends Controller
{

    public function getPrijave(Request $request)
    {
        $idTermina = $request->input('termin_id');
        $svePrijave = Termin::find($idTermina)->prijave()->get();
        return response()->json([
            'prijave' => $svePrijave
        ]);
    }

    public function addPrijava(Request $request)
    {
        $naziv =  $request->input('naziv');
        $idTermina =  $request->input('termin_id');
        $imeStudenta =  $request->input('ime_student');
        if ($this->imaMesta($idTermina)) {
            Termin::find($idTermina)->increment('broj_prijava');
            Prijava::insert([
                'naziv' => $naziv,
                'termin_id' => $idTermina,
                'ime_student' => $imeStudenta,
            ]);

            return response()->json([
                'poruka' => 'Uspesno dodata prijava!'
            ]);
        } else {
            return response()->json([
                'poruka' => 'Termin je pun! Nije dodata prijava!'
            ]);
        }
    }
    public function editPrijava(Request $request)
    {
        $imeStudenta = $request->input('ime_student');
        $idPrijava = $request->input('id');
        if (Prijava::where('id', $idPrijava)->update(['ime_student' => $imeStudenta]))
            return response()->json([
                'poruka' => 'Uspesno preimenovan student!'
            ]);
    }
    public function deletePrijava(Request $request)
    {
        $idPrijava = $request->input('id');
        Prijava::find($idPrijava)->delete();
    }

    private function imaMesta($id)
    {
        $termin = Termin::where('id', $id)->get()[0];
        $max = $termin->max_broj_prijava;
        $trenutno = $termin->broj_prijava;

        if ($trenutno < $max) return true;
        return false;
    }
}
