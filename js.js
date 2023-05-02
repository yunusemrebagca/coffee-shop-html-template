const header = document.querySelector("header");

window.addEventListener("scroll",function () {
    header.classList.toggle("sticky",window.scrollY > 0);
});


const sr = ScrollReveal ({
	distance: '200px',
	duration: 2500,
	delay: 0,
	reset: false
})

sr.reveal('.left-content , .img-delay',{delay:0, origin:'top'});
