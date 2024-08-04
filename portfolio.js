function scrollToSection() {
    const target = document.querySelector('.about');
    target.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.#about');
    scrollButton.onclick = scrollToSection;
});

function scrollToSection() {
    const target = document.querySelector('.projects');
    target.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.#projects');
    scrollButton.onclick = scrollToSection;
});

function scrollToSection() {
    const target = document.querySelector('.contact');
    target.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.#contact');
    scrollButton.onclick = scrollToSection;
});
