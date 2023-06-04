'use strict';

const navLoad = () => {
    (() => {
        return new Promise(function (resolve, reject) {
            $.get('/UIDev/v2/views/_include/_header.html', function (response) {
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

        navAction.hoverMenu(); // hover evt on nav

    })
}
const footerLoad = () => {
    (() => {
        return new Promise(function (resolve, reject) {
            $.get('/UIDev/v2/views/_include/_footer.html', function (response) {
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
            $.get('/UIDev/v2/views/_include/_dealer-sell01-lnb.html', function (response) {
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


const navAction = {
    hoverMenu: function () {
        

    }
}

export {navLoad, footerLoad, navAction, dealerSell01LnbLoad};