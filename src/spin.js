(() => {
	const $ = document.querySelector.bind(document);

	let timeRotate = 7000; 
	let currentRotate = 0;
	let isRotating = false;
	const wheel = $('.wheel');
	const btnWheel = $('.btn--wheel');
	const showMsg = $('.msg');

	
	const listGift = [
		{
			text: 'Free shiping',
			percent: 5 / 100,
		},
		{
			text: 'No luck',
			percent: 10 / 100,
		},
		{
			text: 'Next time',
			percent: 15 / 100,
		},
		{
			text: '10% off',
			percent: 70 / 100,
		},
		{
			text: '50% off',
			percent: 100/ 100,
		},
		{
			text: '5% off',
			percent: 80 / 100,
		},
		{
			text: 'Spin again',
			percent: 60 / 100,
		},
		{
			text: 'So close',
			percent: 20 /100,
		},
	];

	const size = listGift.length;

	const rotate = 360 / size;

	const skewY = 90 - rotate;

	listGift.map((item, index) => {
		const elm = document.createElement('li');

		elm.style.transform = `rotate(${
			rotate * index
		}deg) skewY(-${skewY}deg)`;

		if (index % 2 == 0) {
			elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
				rotate / 2
			}deg);" class="text text-1">
			<b>${item.text}</b>
		</p>`;
		} else {
			elm.innerHTML = `<p style="transform: skewY(${skewY}deg) rotate(${
				rotate / 2
			}deg);" class="text text-2">
		<b>${item.text}</b>
		</p>`;
		}

		wheel.appendChild(elm);
	});

	const start = () => {
		showMsg.innerHTML = '';
		isRotating = true;
		const random = Math.random();

		const gift = getGift(random);

		currentRotate += 360 * 10;

		rotateWheel(currentRotate, gift.index);

		showGift(gift);
	};

	/********** Hàm quay vòng quay **********/
	const rotateWheel = (currentRotate, index) => {
		$('.wheel').style.transform = `rotate(${
			currentRotate - index * rotate - rotate / 2
		}deg)`;
	};

	const getGift = randomNumber => {
		let currentPercent = 0;
		let list = [];

		listGift.forEach((item, index) => {
			currentPercent += item.percent;

			if (randomNumber <= currentPercent) {
				list.push({ ...item, index });
			}
		});

		return list[0];
	};

	


	const showGift = gift => {
		let timer = setTimeout(() => {
			isRotating = false;
			
			if (gift.text === "No luck") {
				showMsg.innerHTML = '"better luck next time"'
			}
			else if(gift.text === "Next time"){
				showMsg.innerHTML = '"better luck next time"'
			}		
			else if(gift.text === "Free shiping"){
				showMsg.innerHTML = '"Spin again"'
			}
			else if(gift.text === "So close"){
				showMsg.innerHTML = "'better luck next time'"
			}
			else if(gift.text === "Spin again"){
				showMsg.innerHTML = '"Spin again"'
			}
			else {
				showMsg.innerHTML = `"Save up to "${gift.text}" on your next purchase"`;
			}
	
			showMsg.style.color = "wheat";
			showMsg.style.padding = "5rem";
			showMsg.style.fontSize = "1.5rem"
			// showMsg.style.backgroundColor = "blue";
	
			clearTimeout(timer);
		}, timeRotate);
	};
	
	btnWheel.addEventListener('click', () => {
		!isRotating && start("spin");
	});
	
})();