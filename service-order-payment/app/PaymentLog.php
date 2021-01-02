<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentLog extends Model
{
    protected $table = 'payment_logs';

    protected $fillable = [
        'status', 'payment_type', 'order_id', 'raw_response'
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'updated_at' => 'datetime:Y-m-d H:m:s'
    ];
}
