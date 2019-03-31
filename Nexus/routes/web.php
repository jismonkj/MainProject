<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Auth::routes(['verify' => true]);
Route::get('/', 'Auth\LoginController@showLoginForm');
Route::view('/some', 'some');
Route::get('/home', 'HomeController@index')->name('nexushome');

/* COMMON
_________________________________________________________________
___________________________________________________________________ */

//places
Route::resource('/country', 'CountryController');
Route::resource('/state', 'StateController');
Route::resource('/city', 'CityController');

Route::post('/check/mail/exists', 'GuestController@checkIfMailExists');

/* MEMBER
____________________________________________________________________
________________________________________________________________________*/
Route::post('/user/basicinfo', 'HomeController@getUserBasicInfo');
Route::post('/user/info', 'HomeController@getUserInfo');
Route::resource('/member/profile', 'Member\ProfileController');
Route::post('/member/password/change', 'Member\ProfileController@changePassword');
# -- interests
Route::post('member/interest/search', 'Member\MemberController@searchInt');
Route::put('member/interest', 'Member\MemberController@setUserInterest');
Route::post('member/interest/del', 'Member\MemberController@delUserInterest');
Route::get('member/interest', 'Member\MemberController@getUserInterests');
# -- status
Route::post('member/status/text', 'Member\MemberController@updateStatus');
# -- friends
Route::resource('member/friends', 'Member\FriendCircleController');
Route::get('member/fsuggestions', 'Member\FriendCircleController@getFriendSuggestions');
Route::post('member/friend_circle', 'Member\FriendCircleController@getMemberFriendCircle');

/* ADMIN
_____________________________________________________________________________
______________________________________________________________________________*/

Route::resource('/admin', 'Admin\AdminController');
Route::post('/admin/users/list', 'Admin\AdminController@listUsers');

/* FILES
______________________________________________________________________________
_______________________________________________________________________________*/
# -- images
Route::post('images/upload', 'FileController@imageCollect');
Route::post('images/url', 'FileController@getImageUrl');

/* testing routes
___________________________________ _________________________________________
_______________________________________________________________________________*/
Route::get('/test', 'HomeController@test');
Route::get('/te', 'GuestController@checkIfMailExists');

// end testing routes ________________________