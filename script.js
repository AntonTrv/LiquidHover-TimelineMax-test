new hoverEffect({
    parent: document.querySelector('.right'),
    intensity: 0.2,
    image1: 'img/bw2.jpeg',
    image2: 'img/bw.jpeg',
    angle: Math.PI / 8,
    speedIn: 2,
    speedOut: 5,
    displacementImage: './img/heightMap.png'
});

const nav = document.querySelector('nav'),
    heading = document.querySelector('h1'),
    paragragh = document.querySelector('p');

const tl = new TimelineMax();

tl.fromTo(nav, 1, { opacity: '0' }, { opacity: '1', ease: Power2.easeInOut })
    .fromTo(heading, 1, { x: '30', opacity: '0' }, { x: '0', opacity: '1', ease: Power2.easeInOut })
    .fromTo(paragragh, 0.5, { y: '30', opacity: '0' }, { y: '0', opacity: '1' }) s