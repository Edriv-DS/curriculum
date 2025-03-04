/*============================toggle icon navbar======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

/*============================scroll sections active link======================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		};
	});
	/*============================sticky navbar======================*/
	let header = document.querySelector('header');
	
	header.classList.toggle('sticky', window.scrollY > 100);
	
	/*============================remove toggle icon and navbar whe click navbar link (scroll)======================*/
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/*============================scroll reveal======================*/
ScrollReveal({
	//reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
	
});

ScrollReveal().reveal('.home-content, .heading, .skill-box',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .about-img, .contact-img, .skills-container',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .expe-content, .about-content h3, .contact-info',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content p',{ origin: 'right'});


/*============================scroll botton======================*/

document.getElementById("scrollTopBtn").addEventListener("click", function () {
    smoothScrollToTop(1000); // Duración en milisegundos (1s)
});

function smoothScrollToTop(duration) {
    let start = window.scrollY;
    let startTime = performance.now();

    function scrollStep(currentTime) {
        let elapsed = currentTime - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let easeInOut = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, start * (1 - easeInOut));

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

/*============================typed js======================*/
const typed = new Typed('.multiple-text',{
	strings: ['Ciencia de Datos', 'Machine Learning', 'Bases de Datos', 'Minería de Datos', 'Aprendizaje Supervisado'],
	typeSpeed: 45,
	backSpeed: 45,
	backDelay: 800,
	loop: true
});

/*================================block copy page========================*/
document.addEventListener('contextmenu', function (e){
	e.preventDefault();
});

/*================================== Envíar formulario ============================*/

document.getElementById("form").addEventListener("submit", function(event) {
	event.preventDefault(); // Evita que la página se recargue
	
	let formData = new FormData(this); // Captura los datos del formulario
	
	fetch("app.py", {  /*http://localhost:5000/guardar*/
		method: "POST",
		body: formData
    })
    .then(response => response.json())
    .then(data => {
		document.getElementById("respuesta").innerText = data.mensaje;
		document.getElementById("respuesta").style.color = "green";
		consolo("Datos enviados correctamente. Gracias por escribir.");
    })
    .catch(error => {
		document.getElementById("respuesta").innerText = "Error al enviar los datos";
        document.getElementById("respuesta").style.color = "red";
		console.error("Error:", error);
    });

    this.reset(); // Opcional: limpiar el formulario después del envío
});

/*============================= Ingresar correos válidos =====================================*/

 document.getElementById('emailForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            const errorMessage = document.getElementById('error-message');
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            
            if (!emailPattern.test(emailInput.value)) {
                errorMessage.textContent = "Por favor, ingrese un correo electrónico válido.";
            } else {
                errorMessage.textContent = "";
                alert("Correo válido: " + emailInput.value);
                emailInput.value = "";
            }
        });
