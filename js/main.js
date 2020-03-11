// Tabs
window.addEventListener("load", function() {
	// store tabs variable
	var myTabs = document.querySelectorAll(".tabs__btn");
  function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("is-active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("is-active");
		tabClickEvent.preventDefault();
		
		var myContentPanes = document.querySelectorAll(".tabs__pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("is-active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		activePane.classList.add("is-active");
	}
	
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}
});


// Feedback slider
var slider = tns({
	container: '.feedbacks',
	items: 1,
	controls: false,
	navContainer: '.feedbacks-nav',
	slideBy: 'page',
	mouseDrag: true,
	autoplay: false,
	autoHeight: true,
  swipeAngle: false,
  speed: 400
});


// faq
var qBtn = document.querySelectorAll('.faq__item');
var qAnswer = document.querySelectorAll('.faq__answer');

qBtn.forEach(function(el) {
	el.addEventListener('click', function(e) {
		this.classList.toggle('is-active');
	});
})

// modal
function triggerModal(el) {
	var modal = document.getElementById('sendRequest');
	el.addEventListener('click', function(e){
		e.preventDefault();
		modal.classList.toggle('is-active');
	});
}