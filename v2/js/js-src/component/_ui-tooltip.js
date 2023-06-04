'use strict';

const uiTooltip = () => {
    $('.tooltip-btn').click(function(){
        $(this).find('.tooltip').toggleClass('active');
    })
} ;
export {uiTooltip};