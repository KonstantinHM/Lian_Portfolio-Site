// site-menu search-field slide-left function

function openSearchField() {
	var field = document.getElementById('searchField')

	if (field.style.right == '-540px') {
		field.style.right = '-1140px';
	} else {
		field.style.right = '-540px';
	}
};

// main-slider function

jQuery(document).ready(function($) {
	$('.owl-carousel').owlCarousel({
		loop:true,
		items:1,
		dots:true,
		nav: false,
		mouseDrag:false,
		touchDrag:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplaySpeed:1000
	});
});

// main-slider arrow-buttons function

jQuery(document).ready(function($) {
	var owl = $('.owl-carousel');
	owl.owlCarousel();

	$('.customNextBtn').click(function() {
		owl.trigger('next.owl.carousel', [600]);
	})
	$('.customPrevBtn').click(function() {
		owl.trigger('prev.owl.carousel', [600]);
	});
});


// portfolio category function

$('.tab-nav li').click(function(){
	var get_id = this.id;
	var get_current = $('.image-column .' + get_id);

	$('.tab-nav ul .activeTab').removeClass('activeTab');
	$(this).addClass('activeTab');
	$('.portfolio_image-item').not(get_current).slideUp(500);
	get_current.slideDown(500);
});

$('#all').click(function () {
	$('.portfolio_image-item').slideDown(500);
});

// portfolio "Show more" - button function

function showMoreBtn() {
	var portfolio = document.getElementsByClassName('portfolio-image_wrapper');
	var btnText = document.getElementsByClassName('portfolio_load-more_btn');

	if (portfolio[0].style.height == 'auto') {
		portfolio[0].style.height = '1350.63px';
		btnText[0].innerHTML = 'Load more';
	} else {
		portfolio[0].style.height = 'auto';
		btnText[0].innerHTML = 'Hide';
	}
};


// "about" page skill-bar function

$(".skill-percent").viewportChecker({
	callbackFunction:function(){
		$('.skill-bar').each(function(){
			$(this).find('.skill-line').animate({
				width:$(this).attr('data-percent')
			}, 2000);
		});
	}
});


// portfolio details page - share post button function 

function openShareList() {
	var shareList = document.getElementById('share-post_socials-list');
	var activeBtn = document.getElementsByClassName('share-btn');
	if (shareList.style.display == 'block') {
		shareList.style.display = 'none';
		activeBtn[0].classList.remove('share-btn_active');
	} else {
		shareList.style.display = 'block';
		activeBtn[0].classList.add('share-btn_active');
	}
};


// blog page - open/close recent-post widget function

function openRecentPostWidget() {
	var	content = document.getElementById('recent-posts_content');

	if (content.style.display == 'none') {
		content.style.display = 'block';
	} else {
		content.style.display = 'none';
	}
};

// blog page - open/close popular-tags widget function

function openTagsWidget() {
	var	content = document.getElementById('popular-tags_content');

	if (content.style.display == 'none') {
		content.style.display = 'block';
	} else {
		content.style.display = 'none';
	}
};

// blog page - open/close popular-tags widget function

function openInstagramWidget() {
	var	content = document.getElementById('instagram-thumb-post_content');

	if (content.style.display == 'none') {
		content.style.display = 'block';
	} else {
		content.style.display = 'none';
	}
};
