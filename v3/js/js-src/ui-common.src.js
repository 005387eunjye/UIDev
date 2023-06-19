'use strict';

import { navLoad, footerLoad, dealerSell01LnbLoad, allMenu } from "./component/_ui-layout";
import { uiModal } from "./component/_ui-modal";
import { uiScroll } from "./component/_ui-scroll";
import { uiTab } from "./component/_ui-tab";
import { uiTooltip } from "./component/_ui-tooltip";
import { uiCalendar } from "./component/_ui-calendar";
import { uiSelect } from "./component/_ui-select";
import { uiWing } from "./component/_ui-wing";

(function(window, document, $, undefined){

    // 퍼블 html에서만 실행할 것
    const onlyPubUI = () => {
        navLoad();
        footerLoad();
        uiCalendar();
        uiTab();
        uiTooltip();
        allMenu();
        if (document.querySelector('.lnb')) {
            dealerSell01LnbLoad();
        }

        if(!!document.querySelector('.wing-banner')){
            // [ejh] 윙배너 promise로 불러오는건 퍼블에서만, sticky기능은 개발에서도 실행되어야 할것같습니다!
            // 단, 관리자 텍스트 로드가 다 된 이후에 Sticy 함수 실행시켜달라고 전달해야할 것 같아요!
            uiWing();
        }
    }

    // 개발에서도 실행할 함수
    const distUI = () => {
        uiScroll(); // [ejh] 데이터 로드와 무관하게, 항상 고정 height값을 가지는 scroll 영역에는 개발에서도 실행시켜주세요!
        uiSelect();
        uiModal();
    }

    // dom ready
    document.addEventListener('DOMContentLoaded', () => {

        // 퍼블 html에서만 실행
        if (document.body.classList.contains('only-pub')) {
            onlyPubUI();
            
        }

        distUI();
    })
    
})(window, document, jQuery);