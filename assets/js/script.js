'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// contact

var submit = document.getElementById('submit-btn');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Get the values of all form fields
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Get the corresponding error message elements
    var nameError = document.getElementById('name-error');
    var mailError = document.getElementById('mail-error');
    var phoneError = document.getElementById('phone-error');
    var subjectError = document.getElementById('subject-error');
    var messageError = document.getElementById('message-error');
    
    // Reset all previous error messages
    nameError.textContent = '';
    mailError.textContent = '';
    phoneError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    
    // Perform validation
    var isValid = true;
    
    if (!name) {
        nameError.textContent = 'Please fill in your name.';
        isValid = false;
    }
    
    if (!mail) {
        mailError.textContent = 'Please fill in your email address.';
        isValid = false;
    }
    
    if (!phone) {
        phoneError.textContent = 'Please fill in your phone number.';
        isValid = false;
    }
    
    if (!subject) {
        subjectError.textContent = 'Please fill in the subject.';
        isValid = false;
    }
    
    if (!message) {
        messageError.textContent = 'Please fill in your message.';
        isValid = false;
    }
    
    // If all fields are filled, submit the form
    if (isValid) {
        var body = 'name: ' + name + '<br/> phone: ' + phone + '<br/> email: ' + mail + '<br/> subject: ' + subject + '<br/> message: ' + message;

        Email.send({
            SecureToken: "e1136666-0b81-46ce-bc86-113eab8ea0e5",
            To: 'binitchoudhary1602@gmail.com',
            From: "binit@cashlelo.com",
            Subject: subject,
            Body: body
        }).then(function (message) {
            // Reset the form fields after a successful email send
            document.getElementById('name').value = '';
            document.getElementById('mail').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';

            // Display a SweetAlert2 pop-up with the success message
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your query has been sent to Cashlelo. Our team will contact you soon.',
            });
        });
    }
});


// pop-up script



 // Get all "Get Started" buttons
const getStartedBtns = document.querySelectorAll('.getStartedBtn');

// Get the popup element
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Add click event listeners to each "Get Started" button
getStartedBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetPopup = document.getElementById(btn.getAttribute('data-popup-target'));
    if (targetPopup) {
      targetPopup.style.display = 'flex';
    }
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});


//COUNETR

// Function to start the count-up animation
function startCounterAnimation() {
  const counts = document.querySelectorAll('.count');
  const speed = 97;

  counts.forEach((counter) => {
    const target = Number(counter.getAttribute('data-target'));
    let count = 0;
    const inc = target / speed;

    function update() {
      if (count < target) {
        counter.innerText = Math.ceil(count); // Use Math.ceil to make sure it reaches the target value
        count += inc;
        setTimeout(update, 15);
      } else {
        counter.innerText = target;
      }
    }

    update();
  });
}

// Add an event listener to start the animation when the counter section is in the viewport
const counterWrapper = document.querySelector('.counter-wrapper');
let animationStarted = false;

window.addEventListener('scroll', () => {
  if (isInViewport(counterWrapper) && !animationStarted) {
    startCounterAnimation();
    animationStarted = true;
  }
});

// Additionally, you can check if the counter section is already in the viewport when the page loads and start the animation if needed.
window.addEventListener('load', () => {
  if (isInViewport(counterWrapper) && !animationStarted) {
    startCounterAnimation();
    animationStarted = true;
  }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

