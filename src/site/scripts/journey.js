let section = document.querySelector('#interview');
let faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: .5,
    rootMargin: '-10%',
};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            if (entry.target.classList.contains('appear')) {
                entry.target.classList.remove('appear');
            }
            return;
        }
        else {
            entry.target.classList.add('appear');
        }
        //appearOnScroll.unobserve(entry.target);
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
