document.addEventListener('DOMContentLoaded', function() {
    let userName = document.cookie.split(';').find(c => c.trim().startsWith('userName='));
    let name = '';
    
    while (!name) {
        if (!userName) {
            name = prompt('Masukkan nama Anda:');
            if (!name || name.trim() === '') {
                alert('Nama harus diisi. Silakan masukkan nama Anda.');
                name = '';
            } else {
                name = name.trim();
                document.cookie = 'userName=' + name + ';path=/';
            }
        } else {
            name = userName.split('=')[1];
        }
    }
    
    document.getElementById('userName').textContent = name;

    // Update current time
    function updateTime() {
        document.getElementById('currentTime').textContent = new Date().toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Handle form submission
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nama = document.getElementById('nama').value;
            const tanggal = document.getElementById('tanggal').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
            const pesan = document.getElementById('pesan').value;
            
            // Format the date nicely
            const formattedDate = tanggal ? new Date(tanggal).toLocaleDateString('id-ID') : '';
            
            // Update preview
            document.getElementById('previewNama').textContent = nama;
            document.getElementById('previewTanggal').textContent = formattedDate;
            document.getElementById('previewGender').textContent = gender;
            document.getElementById('previewPesan').textContent = pesan;

            // Optional: Scroll preview into view
            document.getElementById('messagePreview').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Image Slider
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const dots = document.querySelectorAll('.dot');
    let autoSlide;

    function showSlide(index) {
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;
        
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    // Next/Previous controls
    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(autoSlide);
        showSlide(currentSlide + 1);
        startAutoSlide();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(autoSlide);
        showSlide(currentSlide - 1);
        startAutoSlide();
    });

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlide);
            showSlide(parseInt(dot.getAttribute('data-slide')));
            startAutoSlide();
        });
    });

    // Auto slide
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 4000); // 4 seconds
    }

    // Start slider
    showSlide(0);
    startAutoSlide();

    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
});
