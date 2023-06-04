'use strict';

const uiTab = () => {
    $(".tab-list ul li").click(function(){
        $(".tab-list ul li").removeClass('on');
        $(this).addClass('on');

        let activeTab = $(this).find('a').attr('href');
        $('.tab-content > div').hide();
        $(activeTab).fadeIn();
    });
};

export {uiTab};