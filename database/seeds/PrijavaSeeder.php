<?php

use App\Termin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;;

class PrijavaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 40; $i++) {
            $id = rand(1, 10);
            $termin = Termin::where('id', $id)->get()[0];
            $max = $termin->max_broj_prijava;
            $trenutno = $termin->broj_prijava;

            if ($trenutno < $max) {
                DB::table('prijava')->insert([
                    'naziv' => Str::random(5) . "_NAZIV PRIJAVE",
                    'ime_student' =>  Str::camel(Str::random(5)) . " " . Str::camel(Str::random(7)),
                    'termin_id' => $id,
                ]);
                Termin::find($id)->increment('broj_prijava');
            }
        }
    }
}
