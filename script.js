/* ==========================================================================
   HAUT LES MAINS - MODERNIZED INTERACTION SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 3. SCROLL REVEAL WITH INTERSECTION OBSERVER
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    // Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px' // Offset slightly to trigger earlier
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for older browsers
        revealElements.forEach(element => {
            element.classList.add('reveal-visible');
        });
    }

    // 4. TABBED CONTENT FOR NEWS & ARCHIVES
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Toggle active buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Toggle active contents
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // 5. TOAST NOTIFICATION PROMO
    const toast = document.getElementById('toast');
    if (toast) {
        // Show after 3.5 seconds
        setTimeout(() => {
            toast.classList.add('show');
            
            // Auto-hide after 8 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 8000);
        }, 3500);
    }

    // 6. SMOOTH ANCHOR NAVIGATION WITH STICKY HEADER OFFSET
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const topBarHeight = document.querySelector('.top-bar').offsetHeight;
                const totalOffset = headerHeight + topBarHeight;
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - totalOffset + 10;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 7. ACCOMMODATION GALLERY CAROUSEL
    const galleries = document.querySelectorAll('.accommodation-gallery');
    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        const dots = gallery.querySelectorAll('.gallery-dot');
        const prevBtn = gallery.querySelector('.gallery-btn.prev');
        const nextBtn = gallery.querySelector('.gallery-btn.next');
        let currentIndex = 0;

        function showSlide(index) {
            if (index < 0) {
                currentIndex = images.length - 1;
            } else if (index >= images.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            images.forEach((img, i) => {
                if (i === currentIndex) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });

            dots.forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showSlide(currentIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showSlide(currentIndex + 1);
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showSlide(i);
            });
        });
    });
});
