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

    var num_first, num_second;

    function evaluating (min = 0, max = source.length) {
        num_first = Math.floor(Math.random() * (max - min + 1) + min);
        num_second = Math.floor(Math.random() * (max - min + 1) + min);

        return num_first, num_second;
    }

    setInterval(function() {
        evaluating();

        if (num_first >= 5) {
            num_second = Math.floor(Math.random() * 5);
        }

        if (num_first <= 4) {
            num_second = Math.floor(Math.random() * 6 + 5);
        }

        var currentPosFirst = parseInt($first.attr('src', source[num_first]).attr('src').replace(/[^\d.]/g, ''));
        var currentPosSecond = parseInt($second.attr('src', source[num_second]).attr('src').replace(/[^\d.]/g, ''));

        console.log(currentPosSecond);
    }, 1500);
});