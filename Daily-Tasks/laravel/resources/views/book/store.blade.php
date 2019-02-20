@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Store Books') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ asset('book') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="title" class="col-md-4 col-form-label text-md-right">{{ __('Title') }}</label>

                            <div class="col-md-6">
                                <input id="title" type="text" class="form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" name="title" value="{{ old('title') }}" required autofocus>

                                @if ($errors->has('title'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('title') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="body" class="col-md-4 col-form-label text-md-right">{{ __('Body') }}</label>

                            <div class="col-md-6">
                                <textarea ut id="body" type="text" class="form-control{{ $errors->has('body') ? ' is-invalid' : '' }}" name="body" value="{{ old('body') }}" required rows="12">
                                </textarea>

                                @if ($errors->has('body'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('body') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Save') }}
                                </button>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4 py-4">
                                @isset($message) 
                                    <div class="alert alert-info">{{ $message }}</div>
                                @endisset
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
