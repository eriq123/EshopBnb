<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Convert extends Model
{
    use SoftDeletes;

    public function base()
    {
        return $this->belongsTo(Base::class);
    }

    public function getValueAttribute($value)
    {
        return $value / 100;
    }
    public function setValueAttribute($value)
    {
        $this->attributes['value'] = $value * 100;
    }
}
