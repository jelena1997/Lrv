<?php


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;



class TerminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('termin')->insert([
                'tema' => Str::random(5) . "_TERMIN",
                'pocetak' => rand(1611705600, 1614643200), // 27/1/2021 - 2/3/2021
                'trajanje' => rand(3600, 10800),
                'tema' => Str::random(5) . " " . Str::random(6) . " " . Str::random(1) . "_TEMA",
                'max_broj_prijava' => 10,

            ]);
        }
    }
}
