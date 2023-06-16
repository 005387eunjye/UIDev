'use strict';

const navLoad = () => {
    (() => {
        return new Promise(function (resolve, reject) {
            $.get('/UIDev/v3/views/_include/_header.html', function (response) {
                if (response) {
                    resolve(response);
                }
                reject(new Error('Request is failed'));
            });
        });
    })()
    .then(function (data) {
        const elHeader = document.querySelector('.header-area');
        elHeader.innerHTML = data;
        modalAction.clickMenu();
        navAction.hoverMenu(); // hover evt on nav

    })
}
const footerLoad = () => {
    (() => {
        return new Promise(function (resolve, reject) {
            $.get('/UIDev/v3/views/_include/_footer.html', function (response) {
                if (response) {
                    resolve(response);
                }
                reject(new Error('Request is failed'));
            });
        });
    })().then(function (data) {
        const elFooter = document.querySelector('.footer-area');
        elFooter.innerHTML = data;
    })
}

const dealerSell01LnbLoad = () => {
    (() => {
        return new Promise(function (resolve, reject) {
            $.get('/UIDev/v3/views/_include/_dealer-sell01-lnb.html', function (response) {
                if (response) {
                    resolve(response);
                }
                reject(new Error('Request is failed'));
            });
        });
    })().then(function (data) {
        const elDealerSell01LnbLoad = document.querySelector('.dealer-sell01-lnb');
        elDealerSell01LnbLoad.innerHTML = data;
    })
}

const allMenu = () => {
    (() => {
        return new Promise(function (resolve, reject) {
            $.get('/UIDev/v3/views/_include/_all-menu.html', function (response) {
                if (response) {
                    resolve(response);
                }
                reject(new Error('Request is failed'));
            });
        });
    })().then(function (data) {
        const elAllMenu = document.querySelector('.main-all-menu-area');
        const elAllMenu2 = document.querySelector('.all-menu-pop-body');
        elAllMenu.innerHTML = data;
        elAllMenu2.innerHTML = data;
    })
}

const navAction = {
    hoverMenu: function () {
        

    }
}

const modalAction = {
    clickMenu: function () {
        $('.pop-btn-js').click(function(){
            let popupLayer = $(this).attr('data-target');
            openPop(popupLayer);
        });
        function openPop(openPopLayer){
            $(openPopLayer).show();
            $('.popup-bg').show();
        }

    }
}

export {navLoad, footerLoad, dealerSell01LnbLoad, allMenu};