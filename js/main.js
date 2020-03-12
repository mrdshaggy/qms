function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	evt.preventDefault();
  tabcontent = document.getElementsByClassName("tabs__pane");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tabs__btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}


if (window.innerWidth < 991) {
	function openTabGroup(evt, tabGroup) {
		var i, tabcontent, tablinks, dataID;
		evt.preventDefault();
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" is-active", "");
		}
	
		dataID = document.querySelectorAll("[data-id='"+tabGroup+"']");
		for (i = 0; i < dataID.length; i++) {
			dataID[i].style.display = "block";
		}
		
		evt.currentTarget.className += " is-active";
	}
}




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