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
		<div class="right"></div>
	</div>`;

const battles = [
	{
		id: 1,
		name: 'Pilot Battle',
	},
	{
		id: 2,
		name: 'Visibility',
	},
	{
		id: 3,
		name: 'Cursor',
	},
	{
		id: 4,
		name: 'Display',
	},
	{
		id: 5,
		name: 'Inline',
	},
	{
		id: 6,
		name: 'Conic',
	},
	{
		id: 7,
		name: 'Backface',
	},
	{
		id: 8,
		name: 'Transition',
	},
	{
		id: 9,
		name: 'Margin',
	},
	{
		id: 10,
		name: 'Block',
	},
	{
		id: 11,
		name: 'Overflow',
	},
	{
		id: 12,
		name: 'Blend',
	},
	{
		id: 13,
		name: 'Clip',
	},
	{
		id: 14,
		name: 'ZIndex',
	},
	{
		id: 15,
		name: 'Filter',
	},
	{
		id: 16,
		name: 'Aspect',
	},
	{
		id: 17,
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
