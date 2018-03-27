@extends('layouts.app')

@section('title', 'Seleccion de Aportes')

@section('content')

<div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-9">
        
    </div>
</div>

<div class="wrapper wrapper-content animated fadeInRight">
    {{--  <contribution-create :contributions1="{{ json_encode($contributions) }}" :afid="{{ $affiliate->id }}" ></contribution-create>  --}}
<contribution-select :cnormal ="{{json_encode($contribucion_normal)}}" :cdisponibilidad="{{json_encode($contribucion_disponibilidad)}}" :retfunid="{{$ret_fun_id}}" :types="{{json_encode($contribution_types)}}"></contribution-select>
</div>
@endsection