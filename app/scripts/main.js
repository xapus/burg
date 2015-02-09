var globalCurrent;

$(document).ready(function() {
    $('#bg').fadeIn(2000, function() {
        $('#bg').css('transform', 'scale(2.50)');
        $('#logo_wrap').fadeIn(3000, function() {
            $('#hex1').animate({
                    opacity: 1
                },
                1000,
                function() {
                    $('#hex2').animate({
                            opacity: 1
                        },
                        1000,
                        function() {
                            $('#hex3').animate({
                                    opacity: 1
                                },
                                1000);
                        });
                });
        });
    }); //bg fade


    $('.hexagono').on('click', function() {
        $('.hexagono').fadeOut();
        $('#logo_wrap').fadeOut(500, function() {
            $('#bg').css('transform', 'scale(1)');
            $('#bg').css('background-position', '-35px 243px').css('transform', 'scale(2.5)');
            $('#productos').fadeIn(3000, function() {
                $('#content_productos').fadeIn(400);
            });
        });
    }); //hexagono click


    $('.producto').on('click', function() {
        setCurrent($(this).attr('id'));
        if ($(this).attr('id') == '1') {

            $('#2').fadeOut(1000);
            $('#3').fadeOut(1000, function() {
                $('#1').find('.prod_right').css('display', 'inline-block').animate({
                    opacity: 1
                });
            });

        } else if ($(this).attr('id') == '2') {

            $('#1').fadeOut(1000);
            $('#3').fadeOut(1000, function() {
                $('#2').find('.prod_right').css('display', 'inline-block').animate({
                    opacity: 1
                });
            });

        } else if ($(this).attr('id') == '3') {

            $('#1').fadeOut(1000);
            $('#2').fadeOut(1000, function() {
                $('#3').find('.prod_right').css('display', 'inline-block').animate({
                    opacity: 1
                });
            });

        }
    }); //producto click

    $('.a_left').on('click', function() {
        showPagePrev(globalCurrent);
    });

    $('.a_right').on('click', function() {
        showPageNext(globalCurrent);
    });


    function setCurrent(current) {
        globalCurrent = current;
    }

    function showPageNext(current) {
        showThisPage(current + 1);
    }

    function showPagePrev(current) {
        showThisPage(current - 1);
    }

    function showThisPage(current) {
      setCurrent(current);
        if (current == '0') {

            $('.producto').find('.prod_right').animate({
                opacity: 0
            }, function() {
                $('.producto').find('.prod_right').css('display', 'none');
                $('.producto').fadeIn(1000);
            });

        } else if (current == '1') {

            $('.producto').find('.prod_right').animate({
                opacity: 0
            }, function() {
                $('.producto').find('.prod_right').fadeOut(1000, function() {
                    $('#2').fadeOut(1000, function() {
                        $('#3').fadeOut(1000, function() {
                            $('#1').fadeIn(1000, function() {
                                $('#1').find('.prod_right').css('display', 'inline-block').animate({
                                    opacity: 1
                                });
                            });
                        });
                    });
                });
            });
        } else if (current == '2') {

            $('.producto').find('.prod_right').animate({
                opacity: 0
            }, function() {
                $('.producto').find('.prod_right').fadeOut(1000, function() {
                    $('#1').fadeOut(1000, function() {
                        $('#3').fadeOut(1000, function() {
                            $('#2').fadeIn(1000, function() {
                                $('#2').find('.prod_right').css('display', 'inline-block').animate({
                                    opacity: 1
                                });
                            });
                        });
                    });
                });
            });
        } else if (current == '3') {

            $('.producto').find('.prod_right').animate({
                opacity: 0
            }, function() {
                $('.producto').find('.prod_right').fadeOut(1000, function() {
                    $('#1').fadeOut(1000, function() {
                        $('#2').fadeOut(1000, function() {
                            $('#3').fadeIn(1000, function() {
                                $('#3').find('.prod_right').css('display', 'inline-block').animate({
                                    opacity: 1
                                });
                            });
                        });
                    });
                });
            });
        }
    } //showthis



}); //document
