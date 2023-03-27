var feedbackLink = document.querySelector(".contacts-info__button");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = document.querySelector(".feedback__close-button");
var feedbackForm = feedbackPopup.querySelector(".feedback__form");
var feedbackName = feedbackPopup.querySelector(".feedback__name");
var feedbackEmail = feedbackPopup.querySelector(".feedback__email");
var overlay = document.querySelector(".overlay");


feedbackLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("feedback--animation-show");
	overlay.classList.add("overlay--show");
	feedbackName.focus();
});

feedbackForm.addEventListener("submit", function (evt) {
	if (!feedbackEmail.value || !feedbackName.value) {
		evt.preventDefault();
		feedbackPopup.classList.add("feedback--error");

		setTimeout(function () {
			feedbackPopup.classList.remove("feedback--error");
			feedbackPopup.classList.remove("feedback--animation-show");
			feedbackPopup.classList.add("feedback--static-show");
		}, 600);

	} else {
		evt.preventDefault();
		feedbackPopup.classList.remove("feedback--animation-show");
		feedbackPopup.classList.remove("feedback--static-show");
		overlay.classList.remove("overlay--show");
	}
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("feedback--animation-show");
	feedbackPopup.classList.remove("feedback--static-show");
	overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (feedbackPopup.classList.contains("feedback--animation-show")) {
			feedbackPopup.classList.remove("feedback--animation-show");
			overlay.classList.remove("overlay--show");
		}

		if (feedbackPopup.classList.contains("feedback--static-show")) {
			feedbackPopup.classList.remove("feedback--static-show");
			overlay.classList.remove("overlay--show");
		}
	}
})
