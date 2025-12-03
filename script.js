// ========================================
// AutoDock Vina Tutorial - Interactive Features
// ========================================

// Navigation scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active navigation highlighting
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -50% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Method tab switching functions
function switchMethod(event, methodId) {
    const container = event.target.closest('.tabs-container');
    const contents = container.querySelectorAll('.method-content');
    const buttons = container.querySelectorAll('.tab-btn');
    
    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(methodId).classList.add('active');
    event.target.classList.add('active');
}

function switchLigandMethod(event, methodId) {
    switchMethod(event, methodId);
}

// Make functions globally available
window.switchMethod = switchMethod;
window.switchLigandMethod = switchLigandMethod;

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (!href || href === '#') {
            return;
        }
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Copy code blocks on click
const codeBlocks = document.querySelectorAll('pre code');
codeBlocks.forEach(block => {
    const pre = block.parentElement;
    
    // Add copy button
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Kopyala';
    copyButton.className = 'copy-btn';
    copyButton.style.cssText = `
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 6px 14px;
        background: linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(20, 184, 166, 0.9));
        border: none;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        color: white;
        cursor: pointer;
        opacity: 0;
        transition: all 0.2s ease;
        font-family: inherit;
        box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
    `;
    
    pre.style.position = 'relative';
    pre.appendChild(copyButton);
    
    pre.addEventListener('mouseenter', () => {
        copyButton.style.opacity = '1';
    });
    
    pre.addEventListener('mouseleave', () => {
        copyButton.style.opacity = '0';
    });
    
    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(block.textContent);
            copyButton.textContent = '✓ Kopyalandı';
            copyButton.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(6, 182, 212, 0.9))';
            
            setTimeout(() => {
                copyButton.textContent = 'Kopyala';
                copyButton.style.background = 'linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(20, 184, 166, 0.9))';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            copyButton.textContent = '✗ Hata';
            setTimeout(() => {
                copyButton.textContent = 'Kopyala';
            }, 2000);
        }
    });
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    console.log('AutoDock Vina Tutorial loaded successfully');
    
    // Add fade-in animation to sections
    const observeOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observeOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeObserver.observe(section);
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.comparison-card, .tool-card, .install-option, .practice-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + Arrow keys for navigation
    if (e.altKey) {
        const currentSection = document.querySelector('.section.visible') || sections[0];
        const currentIndex = Array.from(sections).indexOf(currentSection);
        
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            e.preventDefault();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
            e.preventDefault();
        }
    }
    
    // Ctrl/Cmd + K for search (future feature)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Search functionality can be added here
        console.log('Search shortcut pressed');
    }
});

// Performance monitoring
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure') {
                console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
            }
        }
    });
    observer.observe({ entryTypes: ['measure'] });
}

// Scroll progress indicator (optional enhancement)
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // Create progress bar if it doesn't exist
    let progressBar = document.getElementById('scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #7c3aed, #14b8a6);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);
