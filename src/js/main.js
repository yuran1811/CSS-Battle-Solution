const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Main Handle
const contentData = {
	battle1: [
		{
			id: 2,
			name: 'Carrom',
			src: `Battle1/2_Carrom.html`,
			imgSrc: 'src/img/carrom.PNG',
		},
		{
			id: 3,
			name: 'Push Button',
			src: `Battle1/3_PushButton.html`,
			imgSrc: 'src/img/pushbtn.PNG',
		},
		{
			id: 4,
			name: 'Ups and Downs',
			src: `Battle1/4_UpsnDowns.html`,
			imgSrc: 'src/img/upanddown.PNG',
		},
		{
			id: 5,
			name: 'Acid Rain',
			src: `Battle1/5_AcidRain.html`,
			imgSrc: 'src/img/acidrain.PNG',
		},
		{
			id: 6,
			name: 'Missing Slice',
			src: `Battle1/6_MissingSlice.html`,
			imgSrc: 'src/img/missingslice.PNG',
		},
		{
			id: 7,
			name: 'Leafy Trail',
			src: `Battle1/7_LeafyTrail.html`,
			imgSrc: 'src/img/leafytrail.PNG',
		},
		{
			id: 8,
			name: 'Forking Crazy',
			src: `Battle1/8_ForkingCrazy.html`,
			imgSrc: 'src/img/forking.PNG',
		},
		{
			id: 9,
			name: 'Tesseract',
			src: `Battle1/9_Tesseract.html`,
			imgSrc: 'src/img/tesseract.PNG',
		},
	],
	battle2: [
		{
			id: 13,
			name: 'Totally Triangle',
			src: 'Battle2/13_TotallyTriangle.html',
			imgSrc: 'src/img/triangle.PNG',
		},
		{
			id: 14,
			name: 'Web Maker Logo',
			src: 'Battle2/14_WebMakerLogo.html',
			imgSrc: 'src/img/webmakerlogo.PNG',
		},
		{
			id: 15,
			name: 'Overlap',
			src: 'Battle2/15_Overlap.html',
			imgSrc: 'src/img/overlap.PNG',
		},
		{
			id: 16,
			name: 'Eye of the Tiger',
			src: 'Battle2/16_EyeOfTheTiger.html',
			imgSrc: 'src/img/eyeofthetiger.PNG',
		},
		{
			id: 17,
			name: 'Fidget Spinner',
			src: 'Battle2/17_FidgetSpinner.html',
			imgSrc: 'src/img/spinner.PNG',
		},
		{
			id: 18,
			name: 'Matrix',
			src: 'Battle2/18_Matrix.html',
			imgSrc: 'src/img/matrix.PNG',
		},
	],
	battle3: [
		{
			id: 19,
			name: 'Cube',
			src: 'Battle3/19_Cube.html',
			imgSrc: 'src/img/cube.PNG',
		},
		{
			id: 20,
			name: 'Ticket',
			src: 'Battle3/20_Ticket.html',
			imgSrc: 'src/img/ticket.PNG',
		},
	],
	battle4: [
		{
			id: 21,
			name: 'SitePointLogo',
			src: 'Battle4/21_SitePointLogo.html',
			imgSrc: 'src/img/sitepointlogo.PNG',
		},
		{
			id: 22,
			name: 'Cloud',
			src: 'Battle4/22_Cloud.html',
			imgSrc: 'src/img/cloud.PNG',
		},
		{
			id: 23,
			name: 'Boxception',
			src: 'Battle4/23_Boxception.html',
			imgSrc: 'src/img/box.PNG',
		},
		{
			id: 24,
			name: 'Switches',
			src: 'Battle4/24_Switches.html',
			imgSrc: 'src/img/switches.PNG',
		},
		{
			id: 25,
			name: 'Blossom',
			src: 'Battle4/25_Blossom.html',
			imgSrc: 'src/img/blossom.PNG',
		},
		{
			id: 26,
			name: 'Smiley',
			src: 'Battle4/26_Smiley.html',
			imgSrc: 'src/img/smile.PNG',
		},
		{
			id: 27,
			name: 'LockUp',
			src: 'Battle4/27_LockUp.html',
			imgSrc: 'src/img/lockup.PNG',
		},
		{
			id: 28,
			name: 'CupsAndBalls',
			src: 'Battle4/28_CupsAndBalls.html',
			imgSrc: 'src/img/cupandball.PNG',
		},
	],
	battle5: [
		{
			id: 29,
			name: 'Suffocate',
			src: 'Battle5/29_Suffocate.html',
			imgSrc: 'src/img/suffocate.PNG',
		},
		{
			id: 30,
			name: 'Horizon',
			src: 'Battle5/30_Horizon.html',
			imgSrc: 'src/img/horizon.PNG',
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
			imgSrc: 'src/img/reflection.PNG',
		},
	],
	battle17: [],
};
const contentDataLth = contentData.length;

const howtoData = [
	'',
	'',
	'Carrom Guide',
	'Push Button Guide',
	'Ups and Downs Guide',
	'Acid Rain Guide',
	'Missing Slice Guide',
	'Leafy Trail Guide',
	'Forking Crazy Guide',
	'Tesseract Guide',
	'',
	'',
	'',
	'Totally Triangle Guide',
	'Web Maker Logo Guide',
	'Overlap Guide',
	'Eye of the Tiger Guide',
	'Fidget Spinner Guide',
	'Matrix Guide',
	'Cube Guide',
	'Ticket Guide',
	'Site Point Logo Guide',
	'Cloud Guide',
	'Boxception Guide',
	'Switches Guide',
	'Blossom Guide',
	'Smiley Guide',
	'Lock Up Guide',
	'Cups and Balls Guide',
	'Suffocate Guide',
	'Horizon Guide',
	'31',
	'32',
	'33',
	'34',
	'35',
	'36',
	'37',
	'38',
	'39',
	'40',
	'41',
	'42',
	'43',
	'44',
	'45',
	'46',
	'47',
	'48',
	'49',
	'50',
	'51',
	'52',
	'53',
	'54',
	'55',
	'56',
	'57',
	'58',
	'59',
	'60',
	'61',
	'62',
	'63',
	'64',
	'65',
	'66',
	'67',
	'68',
	'69',
	'70',
	'71',
	'72',
	'73',
	'74',
	'75',
	'76',
	'77',
	'78',
	'79',
	'80',
	'81',
	'82',
	'83',
	'84',
	'85',
	'86',
	'87',
	'88',
	'89',
	'90',
	'91',
	'92',
	'93',
	'94',
	'95',
	'96',
	'97',
	'98',
	'99',
	'100',
];

const navBar = $('.nav-bar');
const content = $('.main .content');
const menuBtn = $('.menu-container');
const battleList = $$('.nav-bar .item');
const modalBox = $('.modal-box');

const renderHome = () => {
	content.innerHTML = `
		<div class="battle-info">
		${battles
			.map(
				(item, index) => `
				<div
					class="battle-info-item"
					data-aos="zoom-out"
					data-aos-duration="600"
				>
					<span class="name"> #${index + 1} - ${item.name}</span>
					<p class="desc">There are total ${item.target} targets</p>
				</div>`
			)
			.join('')}
		</div>`;
	$$('.battle-info-item').forEach(
		(item, index) =>
			(item.onclick = () => {
				content.innerHTML = listContentHTML[index];
			})
	);
};
const getContentHTML = () => {
	let contentArr = [];
	for (let battle in contentData) {
		const battleCardsHTML = contentData[battle].map(
			(item) => `
				<div class="card" data-aos="fade-up" data-id="${item.id}">
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

renderHome();

const listContentHTML = getContentHTML();

$('.home-page').onclick = renderHome;

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
		$$('.howto').forEach((item) => {
			item.onclick = (e) => {
				e.stopPropagation();
				modalBox.classList.add('active');
				modalBox.innerHTML =
					howtoData[e.target.closest('.card').dataset.id];
			};
		});
	};
});

menuBtn.onclick = (e) => {
	e.stopPropagation();
	menuBtn.classList.toggle('active');
	navBar.classList.toggle('active');
};

document.body.onclick = () => {
	modalBox.classList.remove('active');
	menuBtn.classList.remove('active');
	navBar.classList.remove('active');
};

modalBox.onclick = (e) => e.stopPropagation();
