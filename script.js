
// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Float Animation for stickers
gsap.to(".sticker", {
    y: -10,
    rotation: 5,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    stagger: 0.5
});

// Hero Animation
const tlHero = gsap.timeline({
    defaults: { ease: "elastic.out(1, 0.5)", duration: 1.5 }
});

tlHero.from(".hero-title", { scale: 0.8, opacity: 0, rotation: -5 })
    .from(".hero-subtitle", { y: 20, opacity: 0, ease: "back.out(1.7)" }, "-=1");

// Timeline Sections
const sections = document.querySelectorAll(".timeline-section");

sections.forEach((section, index) => {
    const q = gsap.utils.selector(section);

    // Animate Card Content (Text)
    gsap.from(q(".content"), {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        rotation: index % 2 === 0 ? -5 : 5, // Alternate slight tilts
        duration: 1.2,
        ease: "back.out(1.2)"
    });

    // Animate Image
    gsap.from(q(".image-wrapper"), {
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        scale: 0.8,
        opacity: 0,
        rotation: index % 2 === 0 ? 10 : -10,
        duration: 1.5,
        ease: "elastic.out(1, 0.7)",
        delay: 0.2
    });

    // Parallax effect on image inside wrapper
    gsap.to(q(".image-wrapper img"), {
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: 30,
        scale: 1.1,
        ease: "none"
    });
});
