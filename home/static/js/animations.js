(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        return;
    }

    const revealTargets = document.querySelectorAll(
        '#sobre .section-heading, #sobre .about-content, .projects-heading, .project-card'
    );
    if (!revealTargets.length) {
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -35px 0px'
    });

    revealTargets.forEach((target) => {
        target.classList.add('reveal');
        observer.observe(target);
    });
    document.documentElement.classList.add('has-motion');
})();
