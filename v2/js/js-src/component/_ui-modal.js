'use strict';

const uiModal = () => {
    $('.pop-btn-js').click(function(){
        let popupLayer = $(this).attr('data-target');
        openPop(popupLayer);
    });

    $('.popup-bg').click(function(){
        $('.popup').hide();
        closePop();
    });

    $('.popup-close-btn').click(function(){
        let popupLayer  = $(this).parents('.popup').attr('id');
        closePop(popupLayer);
    });
    function closePop(closePopLayer){
        $(`#${closePopLayer}`).hide();
        $('html').css({'overflow': 'scroll'});
        $('.popup-bg').hide();
    }
    function openPop(openPopLayer){
        $(openPopLayer).show();
        $('.popup-bg').show();
        $('html').css({'overflow': 'hidden'});
    }
} ;
export {uiModal};