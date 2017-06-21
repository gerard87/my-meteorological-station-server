$(function () {
    var socket = io();
    socket.on('temperature', function (msg) {
        $('#temperature').text(msg);
    });
    socket.on('humidity', function (msg) {
        $('#humidity').text(msg);
    });
    socket.on('temperature2', function (msg) {
        $('#temperature2').text(msg);
    });
    socket.on('pressure', function (msg) {
        $('#pressure').text(msg);
    });
    socket.on('sealevel_pressure', function (msg) {
        $('#sealevel_pressure').text(msg);
    });
    socket.on('altitude', function (msg) {
        $('#altitude').text(msg);
    });


    socket.on('city', function (msg) {
        $('#city').text(msg);
    });
    socket.on('weather', function (msg) {
        $('#weather').text(msg);
    });
    socket.on('wind_dir', function (msg) {
        $('#wind_dir').text(msg);
    });
    socket.on('wind_kph', function (msg) {
        $('#wind_kph').text(msg);
    });
    socket.on('dewpoint_c', function (msg) {
        $('#dewpoint_c').text(msg);
    });
    socket.on('heat_index_c', function (msg) {
        $('#heat_index_c').text(msg);
    });
    socket.on('windchill_c', function (msg) {
        $('#windchill_c').text(msg);
    });
    socket.on('feelslike_c', function (msg) {
        $('#feelslike_c').text(msg);
    });
    socket.on('visibility_km', function (msg) {
        $('#visibility_km').text(msg);
    });
    socket.on('precip_today_metric', function (msg) {
        $('#precip_today_metric').text(msg);
    });
    socket.on('icon', function (msg) {
        $('#icon').text(msg);
    });
    socket.on('icon_url', function (msg) {
        $('#icon_url').attr('src', msg);
    });

});