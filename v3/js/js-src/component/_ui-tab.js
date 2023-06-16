'use strict';

const uiTab = () => {
    $(".tab-list ul li").click(function(){
        $(".tab-list ul li").removeClass('on');
        $(this).addClass('on');

        let activeTab = $(this).find('a').attr('href');
        $('.tab-content > div').hide();
        $(activeTab).fadeIn();
    });
    
    $(".tab-item li a").click(function(){
        $(".tab-item li a").removeClass('active');
        $(this).addClass('active');

        let activeTab = $(this).attr('href');
        $('.tab-content-item > div').hide();
        $(activeTab).fadeIn();
    });
};

export {uiTab};