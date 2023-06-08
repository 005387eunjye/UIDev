var common = {
	init : function(){
		this.clickOn();
		this.fmCrdSet();
		this.crCkd();
		this.sel01();
		this.datepicker();
		this.tabmenu();
		this.dsScroll();
		this.popScroll();
		this.winScroll();
		this.delarTipPop();
		this.shudFn();
		this.tooltip();
		this.scrollTop();
		this.locDropdown();
		this.switchRange();
		this.stepFixed();
	},
	clickOn : function(wrapCs, itemCs, onCs, comment){
		var csArr = ["ck-wrap", "ck-item", "ck-on", "선택됨", "ck-tp02"];// 기본 변수 값
		
		for(var n=arguments.length, i=0; i<n; i++){// 변경된 변수 값 반영
			if(wrapCs !== undefined){
				csArr[i] = arguments[i];
			}
		}
		
		var wrap = "."+csArr[0];
		var item = "."+csArr[1];
		var onCs = csArr[2];
		var on = "."+onCs;
		var txt = "<span class='blind'>"+csArr[3]+"</span>";
		var type = "."+csArr[4];
		
		$(wrap+" "+item+on).append(txt);
		
		$(document).on("click", wrap+" "+item, function(){
			var tpCh = $(this).closest(wrap).is(type);
			
			if(tpCh){
				if($(this).is(on)){
					$(this).removeClass(onCs).find(".blind").remove();
				}else{
					$(this).addClass(onCs).append(txt);
				}
			}else{
				if(!($(this).is(on))){
					$(this).closest(wrap).find(on).removeClass(onCs).find(".blind").remove();
					$(this).addClass(onCs).append(txt);
				}
			}
		});
	},
	fmCrdSet : function(){// setting (checked, disabled, readonly)
		var fmCs = ["inp-ch", "inp-ch-r", "inp-ch02", "inp-rd", "inp-t", "inp-f", "btn-l", "btn-m", "btn-s"];
		var drCs = ["checked", "readonly", "disabled"];// checked, disabled, readonly
		
		for(var n=fmCs.length, i=0; i<n; i++){
			for(var m=$("."+fmCs[i]).length, l=0; l<m; l++){
				if($("."+fmCs[i]).eq(l).is("[class*='btn-']")){
					if($("."+fmCs[i]).eq(l).is("button")){
					   $("."+fmCs[i]).eq(l).removeClass("disabled");
					}
				}else{
					$("."+fmCs[i]).eq(l).removeClass("checked readonly disabled");
				}
			}
		}
		
		for(var n=fmCs.length, i=0; i<n; i++){
			for(var m=$("."+fmCs[i]).length, l=0; l<m; l++){
				if($("."+fmCs[i]).is("[class*='btn-']")){
					var fmTs = $("."+fmCs[i]).eq(l);
					
					if(fmTs.is(":disabled")){
						fmTs.addClass(drCs[2]);
					}
				}else{
					var fmTs = $("."+fmCs[i]).eq(l).find("input");
				
					if(fmTs.is(":disabled")){
						fmTs.closest("."+fmCs[i]).addClass(drCs[2]);
					}else if(fmTs.is("[readonly]")){
						fmTs.closest("."+fmCs[i]).addClass(drCs[1]);
					}else if(fmTs.is(":checked")){
						fmTs.closest("."+fmCs[i]).addClass(drCs[0]);
					}
				}
			}
		}
	},
	fmRdSet : function(){// radio setting ie8 대응 (checked, disabled, readonly)
		var fmCs = ["inp-rd"];
		var drCs = ["checked", "readonly", "disabled"];// checked, disabled, readonly
		
		for(var n=fmCs.length, i=0; i<n; i++){
			for(var m=$("."+fmCs[i]).length, l=0; l<m; l++){
				$("."+fmCs[i]).eq(l).removeClass("checked readonly disabled");
			}
		}
		
		for(var n=fmCs.length, i=0; i<n; i++){
			for(var m=$("."+fmCs[i]).length, l=0; l<m; l++){
				var fmTs = $("."+fmCs[i]).eq(l).find("input");

				if(fmTs.is(":disabled")){
					fmTs.closest("."+fmCs[i]).addClass(drCs[2]);
				}else if(fmTs.is("[readonly]")){
					fmTs.closest("."+fmCs[i]).addClass(drCs[1]);
				}else if(fmTs.is(":checked")){
					fmTs.closest("."+fmCs[i]).addClass(drCs[0]);
				}
			}
		}
	},
	fmCrdChg : function(tsEm){// change (checked, disabled, readonly)
		var drCs = ["checked", "readonly", "disabled"];// checked, disabled, readonly
		
		if(tsEm.is("[class*='btn-']")){
			if(tsEm.is(":"+drCs[2])){
				tsEm.addClass(drCs[2]);
			}else{
				tsEm.removeClass(drCs[2]);
			}
		}else{
			var wrapEm = tsEm.closest("[class*='inp-']");
			
			if(tsEm.is(":"+drCs[0]) || tsEm.is("["+drCs[1]+"]") || tsEm.is(":"+drCs[2])){
				if(tsEm.is(":"+drCs[0])){
					wrapEm.addClass(drCs[0]);
				}
				if(tsEm.is("["+drCs[1]+"]")){
					wrapEm.addClass(drCs[1]);
				}
				if(tsEm.is(":"+drCs[2])){
					wrapEm.addClass(drCs[2]);
				}
			}else{
				if(wrapEm.is("."+drCs[0])){
					wrapEm.removeClass(drCs[0]);
				}
				if(wrapEm.is("."+drCs[1])){
					wrapEm.removeClass(drCs[1]);
				}
				if(wrapEm.is("."+drCs[2])){
					wrapEm.removeClass(drCs[2]);
				}
			}
		}
	},
	aniBg : function(tsEm){// change animation
		if(tsEm.closest("[class*='inp-']").is(".inp-ch02")){
			if(tsEm.is(":checked")){
				tsEm.closest("[class*='inp-']").find(".ic-bg").children("span").animate({
					left: 34
				}, 100, function(){
					tsEm.closest("[class*='inp-']").find(".ic-bg").css("background-color", "#364f7f");
				});
			}else{
				tsEm.closest("[class*='inp-']").find(".ic-bg").children("span").animate({
					left: 6
				}, 100, function(){
					tsEm.closest("[class*='inp-']").find(".ic-bg").css("background-color", "#999");
				});
			}
		}
	},
	crCkd : function(){// change set (checked, disabled, readonly)
		var chgArr = ".inp-ch input, .inp-ch-r input, .inp-rd input, .inp-t input, .inp-f input, button.btn-l, button.btn-m, button.btn-s";
		var chgAniArr = ".inp-ch02 input";
		
		// ie8 대응
		$(document).on("click", chgArr, function(){
			$(this).blur();
			$(this).focus();
		});
		
		$(document).on("change", chgArr, function(){
			var tsEm = $(this);
			common.fmCrdChg(tsEm);
			common.fmRdSet()// ie8 대응
		});
		
		$(document).on("change", chgAniArr, function(){
			var tsEm = $(this);
			common.aniBg(tsEm);
		});
	},
	sel01 : function(){
		$(".sel-tp01").select2({
			minimumResultsForSearch: Infinity,
			dropdownCssClass:"tp01"
		});
		$(".sel-tp02").select2({
			minimumResultsForSearch: Infinity,
			dropdownCssClass:"tp02"
		});
		$(".search-tp01").select2({
			minimumResultsForSearch: Infinity,
			dropdownCssClass:"search01"
		});
	},
	datepicker : function(){
		$.datepicker.setDefaults({
			dateFormat: 'yy.mm.dd',
			buttonImageOnly: true,
			prevText: '이전 달',
			nextText: '다음 달',
			monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
			dayNames: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			showMonthAfterYear: true,
			yearSuffix: '',
			changeYear: true,
			changeMonth: true,
			pos: [100, 100]
		});
		$(".inp-date>input").datepicker();
		$(".inp-date2>input").datepicker({
			changeYear: false,
			changeMonth: false
		});
	},
	tabmenu : function(e,num){
		var num = num || 0;
		var menu = $(e).children();
		var con = $(e + '-con').children();
		var select = $(menu).eq(num);
		var i = num;

		con.hide();
		select.addClass('on').append("<span class='blind'>현재선택</span>");
		con.eq(num).show();

		menu.click(function(){
			if(select !==null) {
				$(".blind").remove();
				select.removeClass('on');
				con.eq(i).hide();
			}
			select = $(this);
			i = $(this).index();

			select.addClass('on').append("<span class='blind'>현재선택</span>");
			con.eq(i).show();
			return false;
		});
	},
	dsScroll : function () {
		$(".ds-scroll,.select-scroll").mCustomScrollbar({
			theme: "dark",
			scrollInertia: 150
		});
	},
	popScroll : function () {
		$(".pop-scroll,.left-scroll").mCustomScrollbar({
			theme: "dark",
			scrollbarPosition: "outside",
			scrollInertia: 150
		});
	},
	popSh : function (popId) {
		var mask = "<div class='pop-mask'></div>";
		var tsPop = $("#"+popId);
		var popCon = tsPop.find(".pop-whBox");

		if(tsPop.is(".pop-on")){// popup hide
			popHide(tsPop, popCon);
		}else{// popup show
			$('html, body').css({'overflow': 'hidden', 'height': '100%'});
			$("body").append(mask);
			tsPop.addClass("pop-on");
			
			var pWid = popCon.outerWidth();
			var pHei = popCon.outerHeight();
			
			if(pWid !== 400){
				popCon.css({"margin-left": -pWid/2});
			}
			
			popCon.css({"margin-top": -(pHei/2), "top":"50%"});
		}
		
		$(document).on("click", ".pop-mask", function(){
			if(!($(this).parents("body").find(".popup-wrap").is(".mask-none-close"))){
				popHide(tsPop, popCon);
			}
		});
		
		function popHide(tsPop, popCon){
			tsPop.removeClass("pop-on");
			popCon.removeAttr("style");
			$(".pop-mask").remove();
			$('html, body').removeAttr("style");
		}
	},
	popSh02 : function (popId) {
		var tsPop = $("#"+popId);
		var popCon = tsPop.find(".pop-whBox");
		var btmGap = 30;
		var aniTime = 400;

		if(tsPop.is(":visible")){// popup hide
			var winHei = $(window).outerHeight();
			
			popCon.animate({
				bottom : -winHei
			}, aniTime, function(){
				tsPop.hide();
				popCon.removeAttr("style");
			});
		}else{// popup show
			tsPop.show();
			var pHei = popCon.outerHeight();
			
			popCon.animate({
				bottom : btmGap
			}, aniTime);
		}
	},
	popSh03 : function (popId) {
		var tsPop = $("#"+popId);
		var popCon = tsPop.find(".pop-whBox");
		var btmGap = 30;
		var aniTime = 400;
		var wtTime = 2000;

		if(!(tsPop.is(":visible"))){// popup show
		   	tsPop.show();
			var pWid = popCon.outerWidth();
			var pHei = popCon.outerHeight();
			var winHei = $(window).outerHeight();
			
			if(pWid !== 400){
				popCon.css({"margin-left": -pWid/2});
			}
			
			popCon.animate({
				bottom : btmGap
			}, aniTime);
		
			setTimeout(function() {// popup hide
				popCon.animate({
					bottom : -winHei
				}, aniTime, function(){
					tsPop.hide();
					popCon.removeAttr("style");
				});
			}, wtTime);
		}
	},
	popSh04 : function(){
		var btmGap = 60;
		var aniTime = 300;
		
		for(var n=arguments.length, i=0; i<n; i++){
			var tsPop = $("#"+arguments[i]);
			var popCon = tsPop.find(".pop-whBox");
			
			if(i == n-1){
				setTimeout(function() {
					popAni(tsPop, popCon, btmGap, aniTime);
				}, aniTime/2);
			}else{
				popAni(tsPop, popCon, btmGap, aniTime);
			}
		}
		
		function popAni(tsPop, popCon, btmGap, aniTime){
			if(tsPop.is(":visible")){// popup hide
				var winHei = $(window).outerHeight();

				popCon.animate({
					bottom : -winHei
				}, aniTime, function(){
					tsPop.hide();
					popCon.removeAttr("style");
				});
			}else{// popup show
				tsPop.show();
				var pWid = popCon.outerWidth();
				var pHei = popCon.outerHeight();

				popCon.css({"margin-left": -pWid/2});
				popCon.animate({
					bottom : btmGap
				}, aniTime);
			}
		}
	},
	winScroll : function(){		
		var tabTop;
		if ($('.tabs-area').is('.fix-tab')){
			tabTop = $('.fix-tab').offset().top - 145;	
		}

		$(window).scroll(function(){
			$('.fix-content').css({
				transition : "none"
			});
			if($(this).scrollTop() >= tabTop ) {
				$('.fix-content').addClass('fix');
				$('.fix-content__block').addClass('common-container');

			} else {
				$('.fix-content').removeClass('fix');
				$('.fix-content__block').addClass('common-container');
			}
			setTimeout(function(){
				$('.fix-content').css({
					transition : ".5s ease"
				});
			},300);
		});

		/** dealer - 2depth 스크롤 상단 고정 **/
		if($('.dealer-tab-box').length && !$('.dealer-tab-box').hasClass('js-no-fix')) {
			var dealerWrap = $('.dealer-wrap');
			var dealerTab = $('.dealer-tab-box', dealerWrap);
			var fixLineT = dealerTab.offset().top - 124;
            
			
			$(window).scroll(function(){
				var winST = $(window).scrollTop();
				if(winST >= fixLineT) {
					dealerWrap.addClass('dealer-2depth-fixed');
				} else {
					dealerWrap.removeClass('dealer-2depth-fixed');
				}
			});
		}

		/** 멤버십 - 2depth 스크롤 상단 고정 **/
		if($('.dealer-tab-box').length && !$('.dealer-tab-box').hasClass('js-no-fix')) {
			var dealerWrap = $('.dealer-wrap');
			var dealerTab = $('.dealer-tab-box', dealerWrap);
			var fixLineT = dealerTab.offset().top - 124;


			$(window).scroll(function(){
				var winST = $(window).scrollTop();
				if(winST >= fixLineT) {
					dealerWrap.addClass('dealer-2depth-fixed');
				} else {
					dealerWrap.removeClass('dealer-2depth-fixed');
				}
			});
		}
	},

	graphAni : function(csName){
		var thEm = $("."+csName);
		
		for(var n=thEm.length, i=0; i<n; i++){
			var stEm = thEm.eq(i);
			var bStt = stEm.data("start");
			var bWid = stEm.data("width");
			var bPit = stEm.data("point");
			var gpSpeed = 600;

			stEm.find(".g-bar").animate({
				left: bStt,
				width: bWid
			}, gpSpeed);

			stEm.find(".g-point").animate({
				left: bPit
			}, gpSpeed);
		}
	},
	swipeDel : function(){
		$(document).on("click", ".sp-del", function(){
			var spWrap = $(this).closest(".owl-carousel");
			var spLeg = spWrap.find(".owl-item.active").index();
			
			spWrap.trigger('remove.owl.carousel', spLeg).trigger('refresh.owl.carousel');
		});
	},
	delarTipPop : function() {//딜러 툴팁 팝업
		if(!$('.dealer-tooltip-box').length) return;

		var tipWrap = $('.dealer-tooltip-box');
		var tipBox = $('.tip-wrap', tipWrap);
		tipWrap.click(function(e) {e.preventDefault();e.stopPropagation()
			var _this = $(this);
			var _tipBox = $('.tip-wrap', _this);
			if(_tipBox.is(':hidden')) {
				_this.css({'z-index' : 5});
				tipBox.hide();
				_tipBox.show();
			}else{
				tipBox.hide();
				_this.css({'z-index' : 'initial'});
			}
		});
		$(document).bind('click', function() {
			tipWrap.css({'z-index' : 'initial'});
			tipBox.hide();
		});
	},
	stepFixed: function(){
		
		var lastScrollLeft = 0;
		var cmmTopHeight = $('.cmm-top-area').outerHeight();

		$(window).resize(function(){
			$('.fix-content').css({
				transition : ".5s ease"
			});
			if($(window).width() > 1400) {
				$('.left-aside').css({
					left: 'auto'
				});
			}
		});
		$(window).scroll(function(num){
			//var sider = $('.step-list-area').outerHeight() - $('.left-aside').outerHeight() + $('.step-list-area').offset().top - $('.cmm-top-area').outerHeight();
			var sider = $('.step-list-area').outerHeight() - $('.left-aside').outerHeight() + $('.step-list-area').offset().top;

			var scroll = $(this).scrollTop();
			var height = $('.left-aside').outerHeight();
			var scrollLeft = $(document).scrollLeft();
			var _hNum = 110;
			if(!$('.common-sub-content').hasClass('fix-content')) {
				if(scroll < $('.step-list-area').offset().top - cmmTopHeight) {
					$('.left-aside').css({
						position: 'absolute',
						top : 0,
						left: 'auto'
					});
				} else if(scroll > sider){
					$('.left-aside').css({
						position: 'absolute',
						bottom: 0,
						top : 'auto',
						left: 'auto'
					});

				} else if(scroll < 200){

					return false;

				} else {
					if($('.left-aside').hasClass('left-car-photo')) {
						$('.left-aside').css({
							position: 'fixed',
							top : 40,
							height: $(window).height() - 40*2

						});
					} else {
						$('.left-aside').css({
							position: 'fixed',
							top : cmmTopHeight,
							height: height
						});
					}

					// console.log(offset().left);
					//
					// if($(window).width() > 1400) {
					// 	$('.left-aside').css({
					// 		// left : -scrollLeft + 220
					// 		left: offset().left
					// 	})
					// } else {
					// 	$('.left-aside').css({
					// 		left: offset().left
					// 	})
					// }
					//
					// if (lastScrollLeft != scrollLeft) {
					// 	if($(window).width() > 1400) {
					// 		$('.left-aside').css({
					// 			left: offset().left
					// 		})
					// 	} else {
					// 		$('.left-aside').css({
					// 			left: offset().left
					// 		})
					// 	}
					// 	lastScrollLeft = scrollLeft;
					// }
				}
			} else {
				if(scroll < $('.step-list-area').offset().top - (cmmTopHeight+_hNum) ) {
					$('.left-aside').css({
						position: 'absolute',
						top : 0,
						left: 'auto'
					});
				} else if(scroll > sider - _hNum ){
					$('.left-aside').css({
						position: 'absolute',
						bottom: 0,
						top : 'auto',
						left: 'auto'
					});

				} else {
					$('.left-aside').css({
						position: 'fixed',
						top : cmmTopHeight + _hNum,
						height: height,
						left : -scrollLeft + 180
					});
					if (lastScrollLeft != scrollLeft) {
						$('.left-aside').css({
							left : -scrollLeft + 180
						});

						lastScrollLeft = scrollLeft;
					}
				}
			}

		});
	},
    winWidSet : function(userWid, unNum) {
        var winWid = $(window).width();
		var lnbWid = $(".cmm-left-area").outerWidth();
		var conPdl = Number($(".cmm-sub-content").css("padding-left").replace(/[^0-9]/g, ""));
		var conPdr = Number($(".cmm-sub-content").css("padding-right").replace(/[^0-9]/g, ""));
		var ctmWid = userWid+lnbWid+conPdl+conPdr;
		
        if(winWid <= ctmWid) {
            $(".container").addClass("wid-under").removeClass("wid-over");
			if(unNum !== "unNum"){
				$(".container").attr("style", "width: "+ctmWid+"px !important");
			}
        } else {
            $(".container").addClass("wid-over").removeClass("wid-under").removeAttr("style");
        }
    },
    winSize : function(userWid, unNum){
        common.winWidSet(userWid, unNum);
        
        $(window).resize(function(){
            common.winWidSet(userWid, unNum);
        });
    },
	shudFn : function() {
		$(document).on("click", ".su-btn", function(){
			// 기본 class : .su-wp, .su-btn, .su-box
			// on class : .su-on
			// type class : .sh-tp, .ud-tp
			var wrap = $(this).closest(".su-wp");
			var idx = wrap.find(".su-btn").index($(this));
			
			if(wrap.is(".sh-tp")){// show & hide type
				if($(this).is(".su-on")){
					$(this).removeClass("su-on");
					wrap.find(".su-box").eq(idx).hide();
				}else{
					wrap.find(".su-btn").removeClass("su-on");
					wrap.find(".su-box").hide();
					$(this).addClass("su-on");
					wrap.find(".su-box").eq(idx).show();
				}
			}else if(wrap.is(".ud-tp")){// slideUp & slideDown type
				if($(this).is(".su-on")){
					$(this).removeClass("su-on");
					wrap.find(".su-box").eq(idx).slideUp();
				}else{
					wrap.find(".su-btn").removeClass("su-on");
					wrap.find(".su-box").slideUp();
					$(this).addClass("su-on");
					wrap.find(".su-box").eq(idx).slideDown();
				}
			}
		});
	},
	pmSlideUp : function(fnCs) {
		var wpEm = $("."+fnCs);
		var wpHei = wpEm.outerHeight();
		var bxMag = 20;
		var upTime = 500;
		var wtTime = upTime + 3000;
		
		wpEm.find(".item").css("margin-bottom", bxMag);
		
		setInterval(function(wpEm, wpHei, bxMag, upTime) {
 			sdUp();
		}, wtTime);
		
		function sdUp(){
			var bxEm = wpEm.find(".item");
			
			bxEm.eq(0).animate({
				marginTop: -(wpHei+bxMag)
			}, upTime, function() {
				wpEm.append(bxEm.eq(0));
				bxEm.eq(0).removeAttr("style").css("margin-bottom", bxMag);
			});
		}
	},
	tooltip : function() {
		$(document).on("click", ".tip-wrap .tip-open, .tip-wrap .tip-close", function(){
			var tipTs = $(this);
			
			if(tipTs.closest(".tip-wrap").find(".tip-box").is(":visible")){
				tClose();
			}else{
				tOpen(tipTs);
			}
			
			$(document).on("click", "html", function(e){
				if(!($(e.target).closest(".tip-wrap").is(".tip-wrap"))){
					tClose();
					$(document).off("click", "html");
				}
			});
		});
		/*2021.01.06 추가*/
		$(document).on("mouseenter", ".benefit-info .tip-open", function(){
			var tipTs = $(this);

			if(tipTs.closest(".tip-wrap").find(".tip-box").is(":visible")){
				tClose();
			}else{
				tOpen(tipTs);
			}
		});
		$(document).on("mouseleave", ".benefit-info .tip-open", function(){
			tClose();
		});

		function tOpen(tipTs){
			var tipWp = tipTs.closest(".tip-wrap");
			var tibBx = tipWp.find(".tip-box");
			var openPos = tipWp.width()+12;
			
			tClose();
			tibBx.show();
			
			if(tipWp.is(".tip-l")){
				tibBx.css({"right":openPos});
			}else if(tipWp.is(".tip-c")) { /*2020. 12.18 추가*/
				tibBx.css({"left":0});
			}else{
				tibBx.css({"left":openPos});
			}
		}
		
		function tClose(){
			$(".tip-wrap .tip-box").removeAttr("style");
		}
		
		
	},
	scrollTop : function() {
		$(window).scroll(function(){
			if($(this).scrollTop() == 0) {
				$(".scroll-top").removeAttr("style");
			}else{
				if(!($(".scroll-top").is(":visible"))){
					$(".scroll-top").show();
				}
			}
		});
		
		$(document).on("click", ".scroll-top", function(){
			var scrSpd = 300;
			
			$("html, body").animate({
				scrollTop: "0"
			}, scrSpd);
		});
	},
	locDropdown : function() {
		$(document).on("click", ".top-location .now, .top-location .loc-list ul li > *", function(){
			var ldWp = $(this).closest(".top-location");
			var ldBtn = ldWp.find(".now");
			
			if(!(ldBtn.is(".disable"))){
				var ldList = ldWp.find(".loc-list");
				
				if(ldBtn.is(".on")){
					ldBtn.removeClass("on");
					ldList.hide();
				}else{
					ldBtn.addClass("on");
					ldList.show();
					
					$(document).on("click", "html", function(e){
						if(!($(e.target).closest(".top-location").is(".top-location"))){
							ldBtn.removeClass("on");
							ldList.hide();
							$(document).off("click", "html");
						}
					});
				}
			}
		});
	},
	switchRange : function() {
		$(document).on("click", ".setting .switch-checkbox", function(){
			var srWp = $(this).closest(".setting");
			
			if($(this).is(":checked")){
				srWp.addClass("check-on");
			}else{
				srWp.removeClass("check-on");
			}
		});
	}
}

function count(csNm) {
	var cutEm = "<span class='ani'>+1</span>";
	
	$("."+csNm).find(".count").append(cutEm);
	$("."+csNm).find(".ani").animate({
		top: -24,
		color: "#2666c6"
	}, 400, function(){
		$("."+csNm).find(".ani").remove();
	});
}

function widowSize() {
	var windowWidth = $(window).width();
	if(windowWidth < 1240) {
		$('.container').addClass('w1260').removeClass('w1920');
	} else {
		$('.container').addClass('w1920').removeClass('w1260');
	}
	
	if(windowWidth < 1400) {
		$('.container').addClass('cw1400');
	} else {
		$('.container').removeClass('cw1400');
	}
}

$(function(){
	common.init();
	
	// widowSize();
	// $(window).resize(function(){
	// 	widowSize();
	// })
});

function countdown(elementId, seconds){
	var element, endTime, hours, mins, msLeft, time;
	var eleGradient = $('.auction-time');

	if($('.dealer-wrap').length) eleGradient = 	$('.grd-box');

	function updateTimer(){
		msLeft = endTime - (+new Date);
		if ( msLeft < 0 ) {
			eleGradient.css({
				'background': '#fc665d'
			});
		} else {
			time = new Date( msLeft );
			hours = time.getUTCHours();
			mins = time.getUTCMinutes();
			element.innerHTML = (hours ? hours + '시간 ' + ('0' + mins).slice(-2) : mins) + '분 ' + ('0' + time.getUTCSeconds()).slice(-2)+'초';
			setTimeout( updateTimer, time.getUTCMilliseconds());
			eleGradient.css({
				'animation' : 'bg-timer ' + (hours*600 + mins*60 + time.getUTCSeconds()) + 's ease 1'
			});
		}
	}
	element = document.getElementById( elementId );
	endTime = (+new Date) + 1000 * seconds;
	updateTimer();
}

// 딜러화면 가격 그래프 함수
var dealerSafetyAniFn = function(target, speed) {
	var wrap = $(target);
	var graph = $(".graph-box", wrap);
	var bStt = wrap.data("start");
	var bWid = wrap.data("width");
	var bPit = wrap.data("point");
	var gpSpeed = speed || 800;

	graph.find(".g-bar, .g-point").removeAttr("style");
	graph.find(".g-bar").animate({
		left: bStt,
		width: bWid
	}, gpSpeed);

	if(graph.find(".g-point").length) {
		graph.find(".g-point").animate({
			left: bPit
		}, gpSpeed);
	}
}
