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
    var min = 0;
    var max = source.length; 

    setInterval(function() {
        var num_first = Math.floor(Math.random() * (max - min + 1) + min);
        var num_second = Math.floor(Math.random() * (max - min + 1) + min);

        if (num_first >= 5) {
            num_second = Math.floor(Math.random() * 5);
        }

        if (num_first <= 4) {
            num_second = Math.floor(Math.random() * 6 + 5);
        }

        $first.attr('src', source[num_first]);
        $second.attr('src', source[num_second]);
    }, 1500);
});