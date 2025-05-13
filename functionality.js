// projects section

document
	.getElementsByClassName('projects-heading')[0]
	.addEventListener('click', () => {
		document
			.getElementsByClassName('projects-list')[0]
			.classList.toggle('hide');
	});

// project

for (
	let i = 0;
	i < document.getElementsByClassName('project-heading').length;
	i++
) {
	document
		.getElementsByClassName('project-heading')
	[i].addEventListener('click', () => {
		document
			.getElementsByClassName('project-paragraph')
		[i].classList.toggle('hide');
	});
}

// articles section

document
	.getElementsByClassName('articles-heading')[0]
	.addEventListener('click', () => {
		document
			.getElementsByClassName('articles-list')[0]
			.classList.toggle('hide');
	});

// article

for (
	let i = 0;
	i < document.getElementsByClassName('article-heading').length;
	i++
) {
	document
		.getElementsByClassName('article-heading')
	[i].addEventListener('click', () => {
		document
			.getElementsByClassName('article-paragraph')
		[i].classList.toggle('hide');
	});
}

// researches section

document
	.getElementsByClassName('researches-heading')[0]
	.addEventListener('click', () => {
		document
			.getElementsByClassName('researches-list')[0]
			.classList.toggle('hide');
	});

// research

for (
	let i = 0;
	i < document.getElementsByClassName('research-heading').length;
	i++
) {
	document
		.getElementsByClassName('research-heading')
	[i].addEventListener('click', () => {
		document
			.getElementsByClassName('research-paragraph')
		[i].classList.toggle('hide');
	});
}