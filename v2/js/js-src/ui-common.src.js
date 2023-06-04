'use strict';

import { navLoad, footerLoad, dealerSell01LnbLoad } from "./component/_ui-layout";
import { uiModal } from "./component/_ui-modal";
import { uiScroll } from "./component/_ui-scroll";
import { uiTab } from "./component/_ui-tab";
import { uiTooltip } from "./component/_ui-tooltip";
import { uiCalendar } from "./component/_ui-calendar";
import { uiSelect } from "./component/_ui-select";

(function(window, document, $, undefined){

    // 퍼블 html에서만 실행할 것
    const onlyPubUI = () => {
        navLoad();
        footerLoad();
        uiCalendar();
        uiTab();
        uiTooltip();
        uiSelect();
        uiModal();
        uiScroll();

        if (document.querySelector('.lnb')) {
            dealerSell01LnbLoad();
        }
    }

    // dom ready
    document.addEventListener('DOMContentLoaded', () => {

        // 퍼블 html에서만 실행
        if (document.body.classList.contains('only-pub')) {
            onlyPubUI();
        }

        console.log('이건 pc');

        console.log(`${uiModal}\n${uiScroll}\n${uiTab}\n${uiTooltip}\n${uiCalendar}`)
    })
    
})(window, document, jQuery);