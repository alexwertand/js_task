$(document).ready(function (){
    var source = [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
    ];
    var $first = $('.first img');
    var $second = $('.second img');
    var i = -1;
    var min = 0;
    var max = source.length - 1; 

    setInterval(function() {
        var variable_num_first = Math.floor(Math.random() * (max - min + 1) + min);
        var variable_num_second = Math.floor(Math.random() * (max - min + 1) + min);
        $first.attr('src', source[variable_num_first]);
        $second.attr('src', source[variable_num_second]);
    }, 1500);
});