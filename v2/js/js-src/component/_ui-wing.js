'use strict';

const uiWing = () => {
    //wing banner
    if($('.wing-banner').length > 0){
        $('.section-area-cont').addClass('hasWing');
    }
    let wingLeft = '';

    function wingScrollLeft(){
        const winWid = $(window).scrollLeft();
        if($(window).width() >= 1600){
            wingLeft = $('body').width() / 2 + 620;
        }else if($(window).width() < 1600 && $(window).width() >= 1300){
            wingLeft = $(window).width() / 2 + 620 - winWid;  
        }else if($(window).width() < 1300){
            wingLeft = $('.section-area').width() / 2 + 640 - winWid; 
        }
    }

    $(window).scroll(function(){
        const winScroll = $(window).scrollTop();
        const contH = $('.section-area-cont').height();
        const wing = $('.wing-banner');
        const wingTop = $('.section-area-grid').offset().top;
        console.log($(window).width());
        wingScrollLeft();

        if(winScroll >= 0 && winScroll < wingTop){
            wing.removeClass('scroll-on');
            wing.removeClass('scroll-end');
            wing.css('left', 'auto' );
        }else if(winScroll >= wingTop && winScroll <= wingTop + contH - (wing.height() + 90)){
            wing.addClass('scroll-on');
            wing.css('left', wingLeft);
        }else if(winScroll > wingTop + contH - (wing.height() + 90)){
            wing.removeClass('scroll-on');
            wing.addClass('scroll-end');
            wing.css('left', 'auto');
        }
    });

    (() => {
        return new Promise(function (resolve, reject) {
            $.get('/UIDev/v2/views/_include/_wing-banner.html', function (response) {
                if (response) {
                    resolve(response);
                }
                reject(new Error('Request is failed'));
            });
        });
    })()
    .then(function (data) {
        const elWing = document.querySelector('.wing-banner');
        elWing.innerHTML = data;


    })
} ;
export {uiWing};