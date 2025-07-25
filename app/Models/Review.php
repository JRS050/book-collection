<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function book() {
        return $this->belongsTo(Book::class);
    }
    use HasFactory;
}
