'use strict';

const uiTab = () => {
    $(".tab-list").each(function(index){
        const tabLi = $(this).find('li');
        const tabCont = $('.tab-content');
        tabLi.click(function(){
            tabLi.removeClass('on');
            $(this).addClass('on');
    
            const activeTab = $(this).find('a').attr('href');
            tabCont.eq(index).find('>div').hide();
            $(activeTab).fadeIn();

            return false;
        });
    });
    
};

export {uiTab};