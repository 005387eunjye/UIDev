'use strict';

const uiSelect = () => {
    // const customSelectOptionBox = $('.custom-select-option-box');
    // const dropDownOptionBox = $('.drop-down-box-option');

    // $('body').click(function(e){
    //     if($(e.target).closest('.drop-down-box').length === 0){
    //         dropDownOptionBox.hide();
    //     };
    // });

    // $('.drop-down-box-tit a').click(function(){
    //     //select
    //     if($(this).next('.custom-select-option-box').css('display') == "block"){
    //         $(this).next('.custom-select-option-box').hide();
    //     }else{
    //         customSelectOptionBox.hide();
    //         $(this).next('.custom-select-option-box').show(); 
    //     }

        //dropdown
        // if($(this).parents('.drop-down-box-tit').next('.drop-down-box-option').css('display') == "block"){
        //     $(this).parents('.drop-down-box-tit').next('.drop-down-box-option').hide();
        // }else{
        //     dropDownOptionBox.hide();
        //     $(this).parents('.drop-down-box-tit').next('.drop-down-box-option').show(); 
        // }
     //});

    
    // //select    
    // customSelectOptionBox.find('li').click(function(){
    //     const selectText = $(this).text();

    //     $(this).parents('.custom-select-box').find('.custom-select-selection').text(selectText);
    //     customSelectOptionBox.find('li').removeClass('active');
    //     $(this).addClass('active');
    //     $(this).parents('.custom-select-option-box').hide();
    // });


    // //dropdown
    // dropDownOptionBox.find('li').click(function(){
    //     const dropDownText = $(this).text();

    //     $(this).parents('.drop-down-box').find('.drop-down-box-tit a').text(dropDownText);
    //     dropDownOptionBox.find('li').removeClass('active');
    //     $(this).parents('.drop-down-box-option').hide();
    // });


    if ($('select').length > 0) {
        $('select').select2({
            minimumResultsForSearch: Infinity,
            dropdownAutoWidth : false,
            placeholder: "선택하세요.",
            language: "ko",
            dropdownCssClass:'custom-select-box'
        });
        
    }
    if ($('select.drop-down-box').length > 0) {
        $('select.drop-down-box').select2({
            minimumResultsForSearch: Infinity,
            dropdownAutoWidth : false,
            language: "ko",
            dropdownCssClass:'drop-down-box-option'
        });
        $('.drop-down-box').each(function(){
            $(this).data('select2').$container.addClass('drop-down-box');
        });
    }
    if($('.inline-ty1').length > 0){
        $('.inline-ty1').data('select2').$container.addClass('inline-ty1');
    }

    
    
} ;
export {uiSelect};