console.log('main.js');

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