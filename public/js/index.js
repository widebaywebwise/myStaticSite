


/// 		Lucide Icons		///


import { createIcons, icons } from 'lucide';


document.addEventListener('DOMContentLoaded', () => {

	createIcons({ icons });
});





//--------------------------- Functionality -----------------------------//




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



