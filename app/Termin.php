<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Termin extends Model
{
    protected $table = "termin";
    public $timestamps = false;

    public function prijave()
    {
        return $this->hasMany('App\Prijava', 'termin_id', 'id');
    }
}
