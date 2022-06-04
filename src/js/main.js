const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(async () => {
	let howtoData;
	try {
		const resp = await fetch('howToData.json');
		howtoData = await resp.json();
		howtoData.sort((a, b) => a.id - b.id);
	} catch (e) {
		console.log(e);
		howtoData = [
			{
				id: 0,
				name: '',
				data: ``,
			},
			{
				id: 1,
				name: '',
				data: ``,
			},
			{
				id: 2,
				name: 'Carrom Guide',
				data: ``,
			},
			{
				id: 3,
				name: 'Push Button Guide',
				data: ``,
			},
			{
				id: 4,
				name: 'Ups and Downs Guide',
				data: ``,
			},
			{
				id: 5,
				name: 'Acid Rain Guide',
				data: ``,
			},
			{
				id: 6,
				name: 'Missing Slice Guide',
				data: ``,
			},
			{
				id: 7,
				name: 'Leafy Trail Guide',
				data: ``,
			},
			{
				id: 8,
				name: 'Forking Crazy Guide',
				data: ``,
			},
			{
				id: 9,
				name: 'Tesseract Guide',
				data: ``,
			},
			{
				id: 10,
				name: '',
				data: ``,
			},
			{
				id: 11,
				name: '',
				data: ``,
			},
			{
				id: 12,
				name: '',
				data: ``,
			},
			{
				id: 13,
				name: 'Totally Triangle Guide',
				data: ``,
			},
			{
				id: 14,
				name: 'Web Maker Logo Guide',
				data: ``,
			},
			{
				id: 15,
				name: 'Overlap Guide',
				data: ``,
			},
			{
				id: 16,
				name: 'Eye of the Tiger Guide',
				data: ``,
			},
			{
				id: 17,
				name: 'Fidget Spinner Guide',
				data: ``,
			},
			{
				id: 18,
				name: 'Matrix Guide',
				data: ``,
			},
			{
				id: 19,
				name: 'Cube Guide',
				data: ``,
			},
			{
				id: 20,
				name: 'Ticket Guide',
				data: ``,
			},
			{
				id: 21,
				name: 'Site Point Logo Guide',
				data: ``,
			},
			{
				id: 22,
				name: 'Cloud Guide',
				data: ``,
			},
			{
				id: 23,
				name: 'Boxception Guide',
				data: ``,
			},
			{
				id: 24,
				name: 'Switches Guide',
				data: ``,
			},
			{
				id: 25,
				name: 'Blossom Guide',
				data: ``,
			},
			{
				id: 26,
				name: 'Smiley Guide',
				data: ``,
			},
			{
				id: 27,
				name: 'Lock Up Guide',
				data: ``,
			},
			{
				id: 28,
				name: 'Cups and Balls Guide',
				data: ``,
			},
			{
				id: 29,
				name: 'Suffocate Guide',
				data: ``,
			},
			{
				id: 30,
				name: 'Horizon Guide',
				data: ``,
			},
			{
				id: 31,
				name: '31',
				data: ``,
			},
			{
				id: 32,
				name: '32',
				data: ``,
			},
			{
				id: 33,
				name: '33',
				data: ``,
			},
			{
				id: 34,
				name: '34',
				data: ``,
			},
			{
				id: 35,
				name: '35',
				data: ``,
			},
			{
				id: 36,
				name: '36',
				data: ``,
			},
			{
				id: 37,
				name: '37',
				data: ``,
			},
			{
				id: 38,
				name: '38',
				data: ``,
			},
			{
				id: 39,
				name: '39',
				data: ``,
			},
			{
				id: 40,
				name: '40',
				data: ``,
			},
			{
				id: 41,
				name: '41',
				data: ``,
			},
			{
				id: 42,
				name: '42',
				data: ``,
			},
			{
				id: 43,
				name: '43',
				data: ``,
			},
			{
				id: 44,
				name: '44',
				data: ``,
			},
			{
				id: 45,
				name: '45',
				data: ``,
			},
			{
				id: 46,
				name: '46',
				data: ``,
			},
			{
				id: 47,
				name: '47',
				data: ``,
			},
			{
				id: 48,
				name: '48',
				data: ``,
			},
			{
				id: 49,
				name: '49',
				data: ``,
			},
			{
				id: 50,
				name: '50',
				data: ``,
			},
			{
				id: 51,
				name: '51',
				data: ``,
			},
			{
				id: 52,
				name: '52',
				data: ``,
			},
			{
				id: 53,
				name: '53',
				data: ``,
			},
			{
				id: 54,
				name: '54',
				data: ``,
			},
			{
				id: 55,
				name: '55',
				data: ``,
			},
			{
				id: 56,
				name: '56',
				data: ``,
			},
			{
				id: 57,
				name: '57',
				data: ``,
			},
			{
				id: 58,
				name: '58',
				data: ``,
			},
			{
				id: 59,
				name: '59',
				data: ``,
			},
			{
				id: 60,
				name: '60',
				data: ``,
			},
			{
				id: 61,
				name: '61',
				data: ``,
			},
			{
				id: 62,
				name: '62',
				data: ``,
			},
			{
				id: 63,
				name: '63',
				data: ``,
			},
			{
				id: 64,
				name: '64',
				data: ``,
			},
			{
				id: 65,
				name: '65',
				data: ``,
			},
			{
				id: 66,
				name: '66',
				data: ``,
			},
			{
				id: 67,
				name: '67',
				data: ``,
			},
			{
				id: 68,
				name: '68',
				data: ``,
			},
			{
				id: 69,
				name: '69',
				data: ``,
			},
			{
				id: 70,
				name: '70',
				data: ``,
			},
			{
				id: 71,
				name: '71',
				data: ``,
			},
			{
				id: 72,
				name: '72',
				data: ``,
			},
			{
				id: 73,
				name: '73',
				data: ``,
			},
			{
				id: 74,
				name: '74',
				data: ``,
			},
			{
				id: 75,
				name: '75',
				data: ``,
			},
			{
				id: 76,
				name: '76',
				data: ``,
			},
			{
				id: 77,
				name: '77',
				data: ``,
			},
			{
				id: 78,
				name: '78',
				data: ``,
			},
			{
				id: 79,
				name: '79',
				data: ``,
			},
			{
				id: 80,
				name: '80',
				data: ``,
			},
			{
				id: 81,
				name: '81',
				data: ``,
			},
			{
				id: 82,
				name: '82',
				data: ``,
			},
			{
				id: 83,
				name: '83',
				data: ``,
			},
			{
				id: 84,
				name: '84',
				data: ``,
			},
			{
				id: 85,
				name: '85',
				data: ``,
			},
			{
				id: 86,
				name: '86',
				data: ``,
			},
			{
				id: 87,
				name: '87',
				data: ``,
			},
			{
				id: 88,
				name: '88',
				data: ``,
			},
			{
				id: 89,
				name: '89',
				data: ``,
			},
			{
				id: 90,
				name: '90',
				data: ``,
			},
			{
				id: 91,
				name: 'Reflection',
				data: ``,
			},
			{
				id: 92,
				name: '92',
				data: ``,
			},
			{
				id: 93,
				name: '93',
				data: ``,
			},
			{
				id: 94,
				name: '94',
				data: ``,
			},
			{
				id: 95,
				name: '95',
				data: ``,
			},
			{
				id: 96,
				name: '96',
				data: ``,
			},
			{
				id: 97,
				name: '97',
				data: ``,
			},
			{
				id: 98,
				name: '98',
				data: ``,
			},
			{
				id: 99,
				name: '99',
				data: ``,
			},
			{
				id: 100,
				name: '100',
				data: ``,
			},
		];
	}

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

	const header = $('.header');
	const navBar = $('.nav-bar');
	const content = $('.main .content');
	const menuBtn = $('.menu-container');
	const battleList = $$('.nav-bar .item');
	const modalBox = $('.modal-box');
	const modalBoxTitle = $('.modal-box div.title');
	const modalBoxContent = $('.modal-box div.content');

	const howtoBtnHandle = () => {
		$$('.howto').forEach((item) => {
			item.onclick = (e) => {
				e.stopPropagation();

				const getCode = (data) =>
					`<pre class="language-html"><code class="language-html">${data}</code></pre>`;
				const id = e.target.closest('.card').dataset.id;

				modalBox.classList.add('active');
				modalBoxTitle.innerText = howtoData[id].name;
				modalBoxContent.innerHTML = getCode(howtoData[id].data);

				Prism.highlightAll();
			};
		});
	};
	const renderHome = () => {
		content.innerHTML = `
		<div class="battle-info">
		${battles
			.map(
				(_, idx) => `
			<div class="battle-info-item" data-aos="zoom-out" data-aos-duration="600" >
				<span class="name"> #${idx + 1} - ${_.name}</span>
				<p class="desc">There are total ${_.target} targets</p>
			</div>`
			)
			.join('')}
		</div>`;

		$$('.battle-info-item').forEach((_, idx) => {
			_.onclick = () => {
				content.innerHTML = listContentHTML[idx];
				scrollTo(0, 0);
				howtoBtnHandle();
			};
		});

		scrollTo(0, 0);
	};
	const getContentHTML = () => {
		const contentArr = [];
		for (let battle in contentData) {
			const battleCardsHTML = !contentData[battle].length
				? ['Nothing']
				: contentData[battle].map(
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

					<div class="howto"> <span>How To</span> </div>

					<div class="card__modal">
						<div class="modal__title"> <span></span> </div>						
						<div class="modal__content"> <p></p> </div>
					</div>
					<div class="card__overlay"></div>
				</div>`
				  );
			const index = +battle.replace('battle', '') - 1;
			const battleSectionHTML = `
			<section class="${battle}">
				<h2 class="title">#${index + 1} - ${battles[index].name}</h2>
				<div class="container">${battleCardsHTML.join('')}</div>
			</section>`;
			contentArr.push(battleSectionHTML);
		}
		return contentArr;
	};

	renderHome();

	const listContentHTML = getContentHTML();

	$('.home-page').onclick = renderHome;
	modalBox.onclick = (e) => e.stopPropagation();
	battleList.forEach((_, index) => {
		_.onclick = (e) => {
			e.stopPropagation();
			modalBox.classList.remove('active');

			const lastActive = $('.nav-bar .active');
			lastActive && lastActive.classList.remove('active');
			e.currentTarget.classList.add('active');

			const lastShow = $('.nav-bar .onShow');
			if (lastShow) {
				lastShow.classList.remove('onShow');
				lastShow.classList.add('onHide');
			}

			content.innerHTML = listContentHTML[index];
			scrollTo(0, 0);
			howtoBtnHandle();
		};
	});
	menuBtn.onclick = (e) => {
		e.stopPropagation();
		modalBox.classList.remove('active');
		menuBtn.classList.toggle('active');
		navBar.classList.toggle('active');
	};
	document.body.onclick = () => {
		modalBox.classList.remove('active');
		menuBtn.classList.remove('active');
		navBar.classList.remove('active');
	};
	document.body.onscroll = () =>
		header.classList.toggle('mini', scrollY >= 80);
})();
