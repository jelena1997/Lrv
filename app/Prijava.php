<?php

namespace App;
//sta prijava sadrzi
use Illuminate\Database\Eloquent\Model;

class Prijava extends Model
{
    protected $table = "prijava";
    public $timestamps = false;

    public function termin()
    {
        return $this->belongsTo('App\Termin', 'termin_id', 'id');
    }
}
