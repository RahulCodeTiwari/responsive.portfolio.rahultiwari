/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

	// Menu Show
if(navToggle){
		navToggle.addEventListener('click', () =>{
			navMenu.classList.add('show-menu')
	})
}
	// Menu hidden
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}
 /*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
	const header = document.getElementById('header')
	this.scrollY >= 50 ? header.classList.add('blur-header')
						: header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
	contactMessage = document.getElementById('contact-message')

const sendEmail  = (e) =>{
	e.preventDefault()

	// serviceID - templateID - #form - publicKey
	email.js.sendForm('service_uu9w7vs','template_azbz0f2','#contact-form','kERVI8EparhKDGlA8')
		.then(() =>{
			// Show sent message
			contactMessage.textContent = 'Message sent successfully '
			// Remove message after five seconds
			setTimeout(() => {
				contactMessage.textContent = ''
			}, 5000)

			//clear input fields
			contactForm.reset()
		 }, () => {
		//Show  error message
	 	contactMessage.textContent = 'Message not sent (service error)'
	})
}

contactForm.addEventListener('Submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId  = current.getAttribute('id'),
			sectionsClass = document.querySelector('nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
		
	})
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
})

sr.reveal('.home__data, .skills, .contact__container')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.home__scroll', {delay: 800})
sr.reveal('.work__card, .service__card', {interval: 100})
sr.reveal('.about__content', {origin: 'right'})
sr.reveal('.about__img', {origin: 'left'})


console.log("hello");



