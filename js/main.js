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

    setInterval(function() {
        ++i;
        if (i < 10) {
            $first.attr('src', source[i]);
            $second.attr('src', source[i]);
        }
    }, 1500);
});