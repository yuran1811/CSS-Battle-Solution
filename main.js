const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Main Handle
const contentData = {
	battle1: [
		{
			id: 2,
			name: 'Carrom',
			src: `Battle1/2_Carrom.html`,
			imgSrc: 'src/carrom.PNG',
		},
		{
			id: 3,
			name: 'Push Button',
			src: `Battle1/3_PushButton.html`,
			imgSrc: 'src/pushbtn.PNG',
		},
		{
			id: 4,
			name: 'Ups and Downs',
			src: `Battle1/4_UpsnDowns.html`,
			imgSrc: 'src/upanddown.PNG',
		},
		{
			id: 5,
			name: 'Acid Rain',
			src: `Battle1/5_AcidRain.html`,
			imgSrc: 'src/acidrain.PNG',
		},
		{
			id: 6,
			name: 'Missing Slice',
			src: `Battle1/6_MissingSlice.html`,
			imgSrc: 'src/missingslice.PNG',
		},
		{
			id: 7,
			name: 'Leafy Trail',
			src: `Battle1/7_LeafyTrail.html`,
			imgSrc: 'src/leafytrail.PNG',
		},
		{
			id: 8,
			name: 'Forking Crazy',
			src: `Battle1/8_ForkingCrazy.html`,
			imgSrc: 'src/forking.PNG',
		},
		{
			id: 9,
			name: 'Tesseract',
			src: `Battle1/9_Tesseract.html`,
			imgSrc: 'src/tesseract.PNG',
		},
	],
	battle2: [
		{
			id: 13,
			name: 'Totally Triangle',
			src: 'Battle2/13_TotallyTriangle.html',
			imgSrc: 'src/triangle.PNG',
		},
		{
			id: 14,
			name: 'Web Maker Logo',
			src: 'Battle2/14_WebMakerLogo.html',
			imgSrc: 'src/webmakerlogo.PNG',
		},
		{
			id: 15,
			name: 'Overlap',
			src: 'Battle2/15_Overlap.html',
			imgSrc: 'src/overlap.PNG',
		},
		{
			id: 16,
			name: 'Eye of the Tiger',
			src: 'Battle2/16_EyeOfTheTiger.html',
			imgSrc: 'src/eyeofthetiger.PNG',
		},
		{
			id: 17,
			name: 'Fidget Spinner',
			src: 'Battle2/17_FidgetSpinner.html',
			imgSrc: 'src/spinner.PNG',
		},
		{
			id: 18,
			name: 'Matrix',
			src: 'Battle2/18_Matrix.html',
			imgSrc: 'src/matrix.PNG',
		},
	],
	battle3: [
		{
			id: 19,
			name: 'Cube',
			src: 'Battle3/19_Cube.html',
			imgSrc: 'src/cube.PNG',
		},
		{
			id: 20,
			name: 'Ticket',
			src: 'Battle3/20_Ticket.html',
			imgSrc: 'src/ticket.PNG',
		},
	],
	battle4: [
		{
			id: 21,
			name: 'SitePointLogo',
			src: 'Battle4/21_SitePointLogo.html',
			imgSrc: 'src/sitepointlogo.PNG',
		},
		{
			id: 22,
			name: 'Cloud',
			src: 'Battle4/22_Cloud.html',
			imgSrc: 'src/cloud.PNG',
		},
		{
			id: 23,
			name: 'Boxception',
			src: 'Battle4/23_Boxception.html',
			imgSrc: 'src/box.PNG',
		},
		{
			id: 24,
			name: 'Switches',
			src: 'Battle4/24_Switches.html',
			imgSrc: 'src/switches.PNG',
		},
		{
			id: 25,
			name: 'Blossom',
			src: 'Battle4/25_Blossom.html',
			imgSrc: 'src/blossom.PNG',
		},
		{
			id: 26,
			name: 'Smiley',
			src: 'Battle4/26_Smiley.html',
			imgSrc: 'src/smile.PNG',
		},
		{
			id: 27,
			name: 'LockUp',
			src: 'Battle4/27_LockUp.html',
			imgSrc: 'src/lockup.PNG',
		},
		{
			id: 28,
			name: 'CupsAndBalls',
			src: 'Battle4/28_CupsAndBalls.html',
			imgSrc: 'src/cupandball.PNG',
		},
	],
	battle5: [
		{
			id: 29,
			name: 'Suffocate',
			src: 'Battle5/29_Suffocate.html',
			imgSrc: 'src/suffocate.PNG',
		},
		{
			id: 30,
			name: 'Horizon',
			src: 'Battle5/30_Horizon.html',
			imgSrc: 'src/horizon.PNG',
		},
	],
	battle6: [],
	battle7: [],
	battle8: [],
	battle9: [],
	battle10: [],
	battle11: [],
	battle12: [],
	battle13: [],
	battle14: [],
	battle15: [],
	battle16: [
		{
			id: 91,
			name: 'Reflection',
			src: 'Battle16/91_Reflection.html',
			imgSrc: 'src/reflection.PNG',
		},
	],
	battle17: [],
};
const contentDataLth = contentData.length;

const navBar = $('.nav-bar');
const content = $('.main .content');
const menuBtn = $('.menu-container');
const battleList = $$('.nav-bar .item');

const getContentHTML = () => {
	let contentArr = [];
	for (let battle in contentData) {
		const battleCardsHTML = contentData[battle].map(
			(item) => `
				<div class="card" data-aos="fade-up">
					<div class="card__image">
						<div class="container">
							<div class="front">
								<img src="${item.imgSrc}" alt="card image">
							</div>
							<div class="back">
								<div class="info">
									<div>#${item.id} - ${item.name}</div>
									<div class="preview">
										<a href="${item.src}" target="_blank" rel="noopener">Preview</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="howto">
						<span>How To</span>
					</div>

					<div class="card__modal">
						<div class="modal__title">
							<span></span>
						</div>						
						<div class="modal__content">
							<p></p>
						</div>
					</div>
					<div class="card__overlay">
					</div>
				</div>`
		);
		const index = +battle.replace('battle', '') - 1;
		const battleSectionHTML = `
			<section class="${battle}">
				<h2 class="title">#${index + 1} - ${battles[index].name}</h2>
				<div class="container">
					${battleCardsHTML.join('')}
				</div>
			</section>`;
		contentArr.push(battleSectionHTML);
	}
	return contentArr;
};
const listContentHTML = getContentHTML();

battleList.forEach((item, index) => {
	item.onclick = (e) => {
		e.stopPropagation();
		const lastActive = $('.nav-bar .active');
		if (lastActive)
			lastActive.className = lastActive.className.replace(' active', '');
		e.currentTarget.classList.add('active');

		const lastShow = $('.nav-bar .onShow');
		if (lastShow) {
			lastShow.classList.remove('onShow');
			lastShow.classList.add('onHide');
		}

		content.innerHTML = listContentHTML[index];
	};
});

menuBtn.onclick = (e) => {
	e.stopPropagation();
	menuBtn.classList.toggle('active');
	navBar.classList.toggle('active');
};

document.body.onclick = () => {
	menuBtn.classList.remove('active');
	navBar.classList.remove('active');
};
