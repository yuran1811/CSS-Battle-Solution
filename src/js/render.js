const modalBoxCpn = `<div class="modal-box"></div>`;

const headerCpn = `
	<div class="header">
		<div class="left">
			<div class="menu-container">
				<div class="menu"></div>
			</div>
		</div>
		<div class="title">
			<a href="https://github.com/yuran1811/CSS-Battle-Solution" target="_blank" rel="noopener">
				CSS Battle Solutions
			</a>
		</div>
		<div class="right">
			<div class="home-page">
				<i class="fas fa-home"></i>
			</div>
		</div>
	</div>`;

const battles = [
	{
		id: 1,
		target: 12,
		name: 'Pilot Battle',
	},
	{
		id: 2,
		target: 6,
		name: 'Visibility',
	},
	{
		id: 3,
		target: 2,
		name: 'Cursor',
	},
	{
		id: 4,
		target: 8,
		name: 'Display',
	},
	{
		id: 5,
		target: 2,
		name: 'Inline',
	},
	{
		id: 6,
		target: 2,
		name: 'Conic',
	},
	{
		id: 7,
		target: 9,
		name: 'Backface',
	},
	{
		id: 8,
		target: 3,
		name: 'Transition',
	},
	{
		id: 9,
		target: 2,
		name: 'Margin',
	},
	{
		id: 10,
		target: 6,
		name: 'Block',
	},
	{
		id: 11,
		target: 8,
		name: 'Overflow',
	},
	{
		id: 12,
		target: 8,
		name: 'Blend',
	},
	{
		id: 13,
		target: 8,
		name: 'Clip',
	},
	{
		id: 14,
		target: 4,
		name: 'ZIndex',
	},
	{
		id: 15,
		target: 8,
		name: 'Filter',
	},
	{
		id: 16,
		target: 8,
		name: 'Aspect',
	},
	{
		id: 17,
		target: 4,
		name: 'Christmas',
	},
];

const navCpn = `
	<div class="main">
		<div class="nav-bar">
			<ul class="nav-bar__container">
			${battles
				.map(
					(item, index) =>
						`<li class="item item${index + 1}">
							<span> Battle ${index + 1} </span>
						</li>`
				)
				.join('')}
			</ul>
		</div>
		<div class="content"></div>
	</div>`;

const bodyContent = document.body.innerHTML;
document.body.innerHTML = `${modalBoxCpn} ${headerCpn} ${navCpn} ${document.body.innerHTML}`;
