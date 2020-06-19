// Обратная связь 

var feedbackPopup = document.querySelector(".modal-feedback");
var nameFeedback = document.getElementById("order-name");
var emailFeedback = document.getElementById(".order-email");

if (feedbackPopup) {
    var feedbackLink = document.querySelector(".feedback-link");
    var feedbackClose = feedbackPopup.querySelector(".modal-close");
    var feedbackForm = feedbackPopup.querySelector(".feedback-form");
    var isStorageSupport = true;
    var storage = "";

    try {
    storage = localStorage.getItem("name");
    } catch (err) {
    isStorageSupport = false;
    }

    feedbackLink.addEventListener("click", function (event) {
        event.preventDefault();  
        feedbackPopup.classList.add("modal-show");

        if (storage) {
            nameFeedback.value = storage;
            emailFeedback.focus();
        } else {
            nameFeedback.focus();
        }
    });

    feedbackClose.addEventListener("click", function (event) {
        event.preventDefault();
        feedbackPopup.classList.remove("modal-show");
    });

    feedbackForm.addEventListener("submit", function (evt) {
        if (!nameFeedback || !emailFeedback) {
            evt.preventDefault();
        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", nameFeedback.value);
            }
        }
    });
}

// Карта

var mapPopup = document.querySelector(".modal-map");
var mapLink = document.querySelector(".map-link");

if (mapPopup && mapLink) {
    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function (event) {
        event.preventDefault();  
        mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-show");
    });
}


// Корзина

var cartLink = document.querySelectorAll(".button-buy");
var cartPopup = document.querySelector(".modal-cart");

if (cartPopup && cartLink) {
    var cartClose = cartPopup.querySelector(".modal-close");

    for (var i = 0; i < cartLink.length; i++) {
        cartLink[i].addEventListener("click", function (event) {
            event.preventDefault();  
            cartPopup.classList.add("modal-show");
        });
    };

    cartClose.addEventListener("click", function (event) {
        event.preventDefault();
        cartPopup.classList.remove("modal-show");
    });
}


// Сервисы

var buttonsArray = document.querySelectorAll(".service-toggle button");
var slidesArray = document.querySelectorAll(".service-description .slide-description");

if (buttonsArray.length > 0 && buttonsArray.length === slidesArray.length) {
    var clearCurrent = function() {
        document.querySelector(".service-toggle .current").classList.remove("current");
        document.querySelector(".service-description .slide-current").classList.remove("slide-current");
    };

    for (var i = 0; i < buttonsArray.length; i++) {
        buttonsArray[i].addEventListener(
            "click", 
            function (event) { 
                if (event.target.classList.contains('current') === false) {
                    clearCurrent();
                    buttonsArray[i].classList.add("current"); 
                    slidesArray[i].classList.add("slide-current");
                }
            }
        ); 
    };
}

// Галерея

var galleryArray = document.querySelectorAll(".slider .slide");
var slideStateArray = document.querySelectorAll(".slider-state .slide-state");
var backwardButton = document.querySelector(".slider .control-backward");
var forwardButton = document.querySelector(".slider .control-forward");

if (galleryArray.length > 0 && galleryArray.length === slideStateArray.length) {

    // для двух слайдов

    var toggleSlide = function() {
        for (i = 0; i < galleryArray.length; i++) {
            galleryArray[i].classList.toggle("slide-current");
            slideStateArray[i].classList.toggle("current");
        }
    };

    forwardButton.addEventListener("click", toggleSlide);
    backwardButton.addEventListener("click", toggleSlide);
}

// Закрытие по escape

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        var shownModal = document.querySelector(".modal-show");
        if (shownModal) {
            event.preventDefault();
            shownModal.classList.remove("modal-show");
        }
    }
});
