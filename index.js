document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------
    // 1. Smooth scrolling para links âncora
    // ------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                // Calcula a posição de destino subtraindo a altura do header fixo
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fecha o menu mobile se estiver aberto após o clique
                const nav = document.querySelector('nav ul');
                const menuToggle = document.querySelector('.menu-toggle');
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    if (menuToggle) menuToggle.classList.remove('active');
                }
            }
        });
    });

    // ------------------------------------
    // 2. Menu Mobile Toggle (Adicionado o elemento)
    // ------------------------------------
    const headerContainer = document.querySelector('.header-container');
    const nav = document.querySelector('nav ul');

    if (headerContainer && nav) {
        // Cria e insere o botão de toggle
        const menuToggle = document.createElement('div');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        headerContainer.appendChild(menuToggle);
        
        // Adiciona o evento de clique para alternar as classes
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // ------------------------------------
    // 3. Testimonial Slider
    // ------------------------------------
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;

    if (testimonialTrack && testimonialSlides.length > 0) {
        function showSlide(index) {
            testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
            
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            if (testimonialDots[index]) {
                 testimonialDots[index].classList.add('active');
            }
            
            currentSlide = index;
        }

        // Evento de clique para as bolinhas de navegação
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto slide dos depoimentos
        if (testimonialSlides.length > 1) { // Só faz o auto slide se houver mais de um
            setInterval(() => {
                currentSlide = (currentSlide + 1) % testimonialSlides.length;
                showSlide(currentSlide);
            }, 5000); // Troca a cada 5 segundos
        }
    }

    // ------------------------------------
    // 4. Form Validation (Exemplo simples, sem envio real)
    // ------------------------------------
    const form = document.getElementById('orcamentoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de validação e envio
            let isValid = true;
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const servico = document.getElementById('servico').value;

            // Validação básica (o 'required' do HTML já ajuda muito)
            if (nome === '' || email === '' || telefone === '' || servico === '') {
                isValid = false;
                alert('Por favor, preencha todos os campos obrigatórios.');
            }

            if (isValid) {
                // Aqui você integraria o código real de envio do formulário (Ex: fetch API, emailjs, etc.)
                console.log('Formulário enviado com sucesso (Simulação):', {
                    nome,
                    email,
                    telefone,
                    servico,
                    mensagem: document.getElementById('mensagem').value.trim()
                });
                
                alert('Sua solicitação de orçamento foi enviada com sucesso! Em breve entraremos em contato. 🎉');
                form.reset();
            }
        });
    }
});