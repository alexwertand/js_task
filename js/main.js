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
    var num = 0;

    var num_first, num_second;

    function getRandomValue() {
        num_first = Math.floor(Math.random() * 5);
        num_second = Math.floor(Math.random() * 5 + 5);
        return num_first, num_second;
    }

    function toggler() {
        num++;
        return num;
    }
    
    function setAttr() {
        getRandomValue();
        toggler();

        if (num % 2 != 0) {
            $first.attr('src', source[num_first]);
            $second.attr('src', source[num_second]);
        } else {
            $first.attr('src', source[num_second]);
            $second.attr('src', source[num_first]);
        }
    }

    setInterval(function() { 
        setAttr();
    }, 1500);

});