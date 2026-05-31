// ==================== Theme Toggle ====================
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

const applyTheme = (theme) => {
    const activeTheme = theme === 'light' ? 'light' : 'dark';
    const isDark = activeTheme === 'dark';
    document.documentElement.dataset.theme = activeTheme;
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeToggle.setAttribute('aria-pressed', String(isDark));
};

applyTheme(localStorage.getItem('theme') || 'dark');

themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
});

// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Animate hamburger
    hamburger.style.transform = navMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.style.transform = 'rotate(0)';
    });
});

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Navbar Background on Scroll ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, tool items, cert cards, and work cards
document.querySelectorAll('.service-card, .tool-item, .cert-card, .work-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== Form Validation (if needed) ====================
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// ==================== Copy to Clipboard ====================
document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', function() {
        const text = this.getAttribute('data-copy');
        navigator.clipboard.writeText(text).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });
});

// ==================== Media Viewer ====================
const mediaViewer = document.querySelector('#mediaViewer');
const mediaViewerImage = mediaViewer.querySelector('.media-viewer__image');
const mediaViewerClose = mediaViewer.querySelector('.media-viewer__close');

const closeMediaViewer = () => {
    mediaViewer.classList.remove('active');
    mediaViewer.setAttribute('aria-hidden', 'true');
    mediaViewerImage.removeAttribute('src');
    mediaViewerImage.alt = '';
    document.body.classList.remove('viewer-open');
};

document.querySelectorAll('[data-viewer-src]').forEach(button => {
    button.addEventListener('click', () => {
        mediaViewerImage.src = button.dataset.viewerSrc;
        mediaViewerImage.alt = button.dataset.viewerAlt || '';
        mediaViewer.classList.add('active');
        mediaViewer.setAttribute('aria-hidden', 'false');
        document.body.classList.add('viewer-open');
        mediaViewerClose.focus();
    });
});

mediaViewerClose.addEventListener('click', closeMediaViewer);

mediaViewer.addEventListener('click', event => {
    if (event.target === mediaViewer) {
        closeMediaViewer();
    }
});

// ==================== Tool Suite Modal ====================
const suiteData = {
    microsoft: {
        logo: 'assets/microsoft-365.svg',
        label: 'Microsoft 365 tools',
        tools: [
            { label: 'Word', icon: 'assets/ms-word.svg' },
            { label: 'Excel', icon: 'assets/ms-excel.svg' },
            { label: 'PowerPoint', icon: 'assets/ms-powerpoint.svg' },
            { label: 'Teams', icon: 'assets/ms-teams.svg' },
            { label: 'Outlook', icon: 'assets/ms-outlook.svg' },
            { label: 'OneDrive', icon: 'assets/ms-onedrive.svg' }
        ]
    },
    google: {
        logo: 'assets/google-workspace.svg',
        label: 'Google Workspace tools',
        tools: [
            { label: 'Gmail', icon: 'assets/google-gmail.svg' },
            { label: 'Calendar', icon: 'assets/google-calendar.svg' },
            { label: 'Drive', icon: 'assets/google-drive.svg' },
            { label: 'Docs', icon: 'assets/google-docs.svg' },
            { label: 'Sheets', icon: 'assets/google-sheets.svg' },
            { label: 'Meet', icon: 'assets/google-meet.svg' }
        ]
    }
};

const suiteModal = document.querySelector('#suiteModal');
const suiteModalPanel = suiteModal.querySelector('.suite-modal__panel');
const suiteModalLogo = suiteModal.querySelector('.suite-modal__logo');
const suiteModalTools = suiteModal.querySelector('.suite-modal__tools');
const suiteModalClose = suiteModal.querySelector('.suite-modal__close');

const closeSuiteModal = () => {
    suiteModal.classList.remove('active');
    suiteModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('viewer-open');
};

document.querySelectorAll('[data-suite]').forEach(button => {
    button.addEventListener('click', () => {
        const suite = suiteData[button.dataset.suite];
        if (!suite) return;

        suiteModalLogo.src = suite.logo;
        suiteModalLogo.alt = suite.label;
        suiteModalPanel.setAttribute('aria-label', suite.label);
        suiteModalTools.replaceChildren(...suite.tools.map(tool => {
            const item = document.createElement('span');
            item.className = 'suite-modal__tool';
            item.setAttribute('aria-label', tool.label);

            const icon = document.createElement('img');
            icon.src = tool.icon;
            icon.alt = '';

            item.append(icon);
            return item;
        }));

        suiteModal.classList.add('active');
        suiteModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('viewer-open');
        suiteModalClose.focus();
    });
});

suiteModalClose.addEventListener('click', closeSuiteModal);

suiteModal.addEventListener('click', event => {
    if (event.target === suiteModal) {
        closeSuiteModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mediaViewer.classList.contains('active')) {
        closeMediaViewer();
    }

    if (event.key === 'Escape' && suiteModal.classList.contains('active')) {
        closeSuiteModal();
    }
});

// ==================== Active Section Highlight ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-primary)';
        }
    });
});

// ==================== Lazy Load Images ====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== Initialize ====================
console.log('Portfolio JavaScript loaded successfully');
