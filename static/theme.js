let data = {
	"theme": "1",
	"block": "",
	"logo": "static/image/logo.png",
	"logoLeft": "static/image/left.png",
	"logoRight": "static/image/right.png",
	"logoHome": "static/image/home.png",
	"test": [
		{
			"title": "Новые клиенты<br> за сегодня",
			"img": "static/image/bg.jpg",
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, at!",
			"video": "static/video/",
			"buttonLeft": "",
			"buttonRight": "",
			"buttonReturn": ""
		},
		{
			"title": "Новые клиенты за сегодня",
			"img": "static/image/bg.jpg",
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, at!",
			"video": "static/video/",
			"buttonLeft": "",
			"buttonRight": "",
			"buttonReturn": ""
		},
		{
			"title": "Новые клиенты за сегодня",
			"img": "static/image/bg.jpg",
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, at!",
			"video": "static/video/",
			"buttonLeft": "",
			"buttonRight": "",
			"buttonReturn": ""
		},
		{
			"title": "Новые клиенты за сегодня",
			"img": "static/image/bg.jpg",
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, at!",
			"video": "static/video/",
			"buttonLeft": "",
			"buttonRight": "",
			"buttonReturn": ""
		},
		{
			"title": "Новые клиенты за сегодня",
			"img": "static/image/bg.jpg",
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, at!",
			"video": "static/video/",
			"buttonLeft": "",
			"buttonRight": "",
			"buttonReturn": ""
		}
	]
}

window.onload = function() {
	loadTheme();
}

function loadTheme() {
	if(data.theme == 1) {
        themeFirst(data);
    }else if(data.theme == 2) {
        themeSecond(data);
    }else if(data.theme == 3) {
        themeThird(data);
    }
}

function themeFirst(data) {
	let themeContent = document.getElementById('theme-content');

	let themeFirst = document.createElement('div');
	themeFirst.className= 'theme-first';

	let header = document.createElement('header');
	header.className = 'header';

	let div = document.createElement('div');
	div.className = 'head-left-item';
	let img = document.createElement('img');
	img.setAttribute('src', data.logo);
	img.setAttribute('alt', 'logo');

	let div2 = document.createElement('div');
	div2.innerHTML = `<h3>НҰР ОТАН</h3>
	<p>ПАРТИЯСЫ САЙЛАУАЛДЫ<br>БАҒДАРЛАМАСЫ</p>`;

	div.insertBefore(img, div.children[0]);
	div.insertBefore(div2, div.children[1]);	

	header.insertBefore(div, header.children[0]);
	let div3 = document.createElement('div');
	div3.className = 'head-right-item';
	let div4 = document.createElement('div');
	div4.className = 'arrows';

	div4.innerHTML = `<img src="`+data.logoLeft+`" alt="left-arrow">
	<img src="`+data.logoHome+`" alt="left-arrow">
	<img src="`+data.logoRight+`" alt="left-arrow">`;

	div3.insertBefore(div4, div3.children[0]);
	header.insertBefore(div3, header.children[1]);

	let div5 = document.createElement('div');
	div5.className = 'menu-buttons';
	div5.innerHTML = '<span id="home" class="active1">Главная</span><span id="info-btn">Информационный блок</span>';
	div3.insertBefore(div5, div3.children[1]);
	themeFirst.insertBefore(header, themeFirst.children[0]);

	let container = document.createElement('div');
	container.className = 'container';

	let wrapper = document.createElement('div');
	wrapper.className = 'wrapper';

	wrapper.insertBefore(container, wrapper.children[0]);
	themeFirst.insertBefore(wrapper, themeFirst.children[1]);


	
	let ul = document.createElement('ul'); 
	ul.setAttribute( "id", "start-block" );
	for(let i = 0;i < data.test.length; i++) {
		ul.innerHTML += "<li><img src=" + data.test[i].img + " alt='image'><div class='info'><h2>"+data.test[i].title+"</h2><p>"+data.test[i].text+"</p></div></li>" 
	}
	container.appendChild(ul);
	themeContent.appendChild(themeFirst);

}

function themeSecond(data) {
	let themeContent = document.getElementById('theme-content');


	let themeSecond = document.createElement('div');
	themeSecond.className = 'theme-second';

	let overlay = document.createElement('div');
	overlay.className = 'theme-overlay';
	themeSecond.insertBefore(overlay, themeSecond.children[0]);

	let leftSidebar = document.createElement('div');
	leftSidebar.className = 'left-sidebar';

	leftSidebar.innerHTML = `<img src="img/logo.png" alt="logo">
	<h2>Академия политического менеджмента</h2>`;

	themeSecond.insertBefore(leftSidebar, themeSecond.children[1]);

	let header = document.createElement('div');
	header.className = 'header2';
	
	let headLeft = document.createElement('div');
	headLeft.className = 'head-left-item';
	headLeft.innerHTML = `<div class="menu-buttons">
	<span class="active">Главная</span>
	<span>Информационный блок</span></div>`;
	header.insertBefore(headLeft, header.children[0]);

	let headRight = document.createElement('div');
	headRight.className = 'head-right-item';
	headRight.innerHTML = '<img src="'+data.logoLeft+'" alt="left-arrow"><img src="'+data.logoHome+'" alt="left-arrow"><img src="'+data.logoRight+'" alt="right-arrow">';
	header.insertBefore(headRight, header.children[1]);
	
	themeSecond.insertBefore(header, themeSecond.children[2]);

	let wrap = document.createElement('div');
	wrap.className = 'wrapper2';
	themeSecond.insertBefore(wrap, themeSecond.children[3]);

	let ul = document.createElement('ul'); 
	ul.setAttribute( "id", "start-block" );
	for(let i = 0;i < data.test.length; i++) {
			ul.innerHTML += "<li><h2>" + data.test[i].title +"</h2><img src='" + data.test[i].img + "' alt=''></li>"; 
	}
	wrap.appendChild(ul);

	themeContent.appendChild(themeSecond);
	themeContent.appendChild(themeContent);
}

function themeThird(data) {
	let themeContent = document.getElementById('theme-content');

	let themeThird = document.createElement('div');
	themeThird.className = 'theme-third';

	let header = document.createElement('header');
	header.className = 'header3';

	let leftItem = document.createElement('div');
	leftItem.className = 'left-item';
	leftItem.innerHTML = `<img src="static/image/logo.png" alt="logo">
    <h2 class="logo-text"><span>Институт</span> стратегических<br> инициатив</h2>`;

    header.insertBefore(leftItem, header.children[0]);

    let rightItem = document.createElement('div');
    rightItem.className = 'right-item';
    rightItem.innerHTML = `<img id="btn-left" src="`+data.logoLeft+`" alt="">
   	<img src="`+data.logoHome+`" alt="">
    <img id="btn-right" src="`+data.logoRight+`" alt="">`;

    header.insertBefore(rightItem, header.children[1]);
    themeThird.insertBefore(header, themeThird.children[0]);

    let wrap = document.createElement('div');
    wrap.className = 'wrapper3';

    let table = document.createElement('div');
    table.className = 'table';
    table.innerHTML = `<div class='big-block'>
                    <h3 class='text'>Lorem ipsum dolor.</h3>
                    <span>next...</span>
                </div>
                <div class='column-block'>
                    <div class='small-top-block'>
                        <h3 class='text'>Lorem ipsum.</h3>
                        <span>next...</span>
                    </div>
                    <div class='small-bottom-block'>
                        <h3 class='text'>Lorem ipsum dolor.</h3>
                        <span>next...</span>
                    </div>
                </div> `;
    wrap.insertBefore(table, wrap.children[0]);

    let table2 = document.createElement('div');
    table2.className = 'table';
    table2.innerHTML = `<div class='big-block'>
    	<h3 class='text'>Lorem ipsum dolor.</h3>
    	<span>next...</span>
    </div>`
    wrap.insertBefore(table2, wrap.children[1]);

    let table3 = document.createElement('div');
    table3.className = 'table';
    table3.innerHTML = `<div class='big-block'>
    	<h3 class='text'>Lorem ipsum dolor.</h3>
    	<span>next...</span>
    </div>`;
    wrap.insertBefore(table3, wrap.children[2]);

    let ul = document.createElement('ul');
    ul.innerHTML = `<li class="bg"></li>
    <li></li>
    <li></li>`;
    wrap.insertBefore(ul, wrap.children[2]);

    themeThird.insertBefore(wrap, themeThird.children[1]);
	

	themeContent.appendChild(themeThird);
}