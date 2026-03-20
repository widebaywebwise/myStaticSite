
// import { login, logout } from "./login";

// import { signUpUser } from "./userSettings";





/// 		Lucide Icons		///


import { createIcons, icons } from 'lucide';


document.addEventListener('DOMContentLoaded', () => {

	createIcons({ icons });
});





//--------------------------- Functionality -----------------------------//



///-------------------- User Login / logout / Signup --------------///

// const loginBtn = document.querySelector('.login__form');
// const logoutBtn = document.querySelector('.logout--btn');
// const signupForm = document.querySelector('.signup__form');

// const logoutAccountBtn = document.getElementById('my-account-logout');


// if (loginBtn) {

// 	loginBtn.addEventListener('submit', e => {

// 		e.preventDefault();

// 		const email = document.getElementById('login-email').value;
// 		const password = document.getElementById('login-password').value;

// 		login(email, password);
// 	})
// }


// if (logoutBtn) {

// 	logoutBtn.addEventListener('click', e => {

// 		e.preventDefault();

// 		logout();
// 	})
// }


// if (logoutAccountBtn) {

// 	logoutAccountBtn.addEventListener('click', e => {

// 		e.preventDefault();

// 		logout();
// 	})
// }


// if (signupForm) {

// 	signupForm.addEventListener('submit', e => {

// 		e.preventDefault();

// 		const data = {

// 			name: document.getElementById('signup-name').value,
// 			email: document.getElementById('signup-email').value,
// 			password: document.getElementById('signup-password').value,
// 			passwordConfirm: document.getElementById('signup-passwordConfirm').value,
// 			phone: document.getElementById('signup-phone').value
// 		}

// 		signUpUser(data);
// 	})
// }


//--------------------  hamburger  -------------------//

const hamburgerBtn = document.querySelector('.header__hamburger');
const navBox = document.querySelector('.header__nav--box');

if (hamburgerBtn && navBox) {
	hamburgerBtn.addEventListener('click', function () {
		navBox.classList.toggle('active');

		const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
		hamburgerBtn.setAttribute('aria-expanded', String(!isExpanded));
	});
}





//----------------- Card Services bubbling  ---------------//


const serviceGrid = document.querySelector('.servicePage--grid');

if (serviceGrid) {


	serviceGrid.addEventListener('click', function (e) {

		const closeBtn = e.target.closest('.servicePage-included-close');

		if (closeBtn) {

			const includedBox = closeBtn.closest('.servicePage-included--box');

			if (includedBox) {
				includedBox.classList.remove('box--active');
				includedBox.classList.add('box--inactive');
			}
			return;
		}

		const clickedBtn = e.target.closest('.servicePage-included-btn');

		if (!clickedBtn) return;

		const clickedCard = clickedBtn.closest('.servicePage--box');

		if (!clickedCard) return;

		const clickedIncludedBox = clickedCard.querySelector('.servicePage-included--box');

		if (!clickedIncludedBox) return;

		const isAlreadyOpen = clickedIncludedBox.classList.contains('box--active');

		const allIncludedBoxes = serviceGrid.querySelectorAll('.servicePage-included--box');

		allIncludedBoxes.forEach((box) => {

			box.classList.remove('box--active');
			box.classList.add('box--inactive');
		});

		if (!isAlreadyOpen) {

			clickedIncludedBox.classList.remove('box--inactive');
			clickedIncludedBox.classList.add('box--active');
		}
	});
}





//----------------- How it works bubbling  ---------------//



// const howItWorks = document.getElementById("how-it-works");


// if (howItWorks) {
// 	const panels = howItWorks.querySelectorAll(".process__step-text");
// 	const buttons = howItWorks.querySelectorAll(".process__step--btn");

// 	howItWorks.addEventListener("click", (e) => {
// 		const btn = e.target.closest(".process__step--btn");
// 		if (!btn) return;

// 		e.preventDefault();

// 		const step = btn.dataset.step;

// 		/// panels

// 		panels.forEach((panel) => {
// 			const isTarget = panel.classList.contains(`process-step--${step}`);
// 			panel.classList.toggle("content-active", isTarget);
// 			panel.classList.toggle("content-hidden", !isTarget);
// 		});

// 		/// buttons

// 		buttons.forEach((b) => {
// 			const isActive = b === btn;
// 			b.classList.toggle("btn-active", isActive);
// 			b.classList.toggle("btn-inactive", !isActive);
// 		});
// 	});
// }


