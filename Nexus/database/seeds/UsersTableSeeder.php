<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 12)->create();
    }
}
