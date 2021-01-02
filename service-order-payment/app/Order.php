<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    protected $fillabble = [
        'status', 'user_id', 'course_id', 'metadata', 'snap_url'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'update_at' => 'datetime:Y-m-d H:m:s',
        'metadata' => 'array'
    ];
}