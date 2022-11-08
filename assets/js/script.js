if(/Android/.test(navigator.appVersion)) {
	window.addEventListener("resize", function() {
		if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
			document.activeElement.scrollIntoView();
		}
	});
} 


var block = $('<div>').css({'height':'50px','width':'50px'}),
    indicator = $('<div>').css({'height':'200px'}),
    scrollbarWidth = 0;

$('body').append(block.append(indicator));
var w1 = $('div', block).innerWidth();    
block.css('overflow-y', 'scroll');
var w2 = $('div', block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);


var bodyScrollOptions = {
    reserveScrollBarGap: true
};

function openModal(hrefModal) {
    
    if ($(hrefModal).length > 0){
        $(hrefModal).fadeIn(300);
    
        bodyScrollLock.clearAllBodyScrollLocks();
        bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
    }
    
    $(hrefModal).find('.slick-slider').slick('setPosition');
	
}

function closeModals() {
	if (scrollbarWidth > 0) {
		$('.popup-block:not(:hidden)').fadeOut(200, function() {
            bodyScrollLock.clearAllBodyScrollLocks();
        });
	} else {
		$('.popup-block:not(:hidden)').fadeOut(200);
		
		bodyScrollLock.clearAllBodyScrollLocks();
	}
}


$(document.body).on('click','[data-toggle="modal"]',function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	openModal(hrefModal);
});

$(document.body).on('click','.popup-block__overlay',function(e) {
	var closeButton = $(this).children('[data-toggle="dismiss"]');
	
	if (e.target != this) {
		return false;
	} else {
		closeModals();
	}
});


$(document.body).on('click','[data-toggle="dismiss"]',function(e) {
	e.preventDefault();
	
	closeModals();
});




var pageHeaderMenubutton = document.querySelector('.page-header__menu-button')
var pageHeaderNav = document.querySelector('.page-header__nav')
var pageHeaderWrapper = document.querySelector('.page-header__wrapper')

pageHeaderMenubutton.addEventListener("click", function(evt){
    evt.preventDefault();
    pageHeaderNav.classList.toggle('page-header__nav--opened')
    pageHeaderWrapper.classList.toggle('page-header__wrapper--menu-opened')
    });


var pageHeaderSearchButton = document.querySelector(".page-header__search-button")
var popap = document.querySelector(".popap")

pageHeaderSearchButton.addEventListener("click", function(evt){
    evt.preventDefault();
    popap.classList.add('popup-block__open')
    });

var overly = document.querySelector(".popup-block__overlay")

overly.addEventListener("click", function(evt){
		evt.preventDefault();
		popap.classList.remove('popup-block__open')
		});

