const images = [
    'backgrounds/Rallypoint Delta.jpg',
    'backgrounds/Siphoned Forest.webp',
    'backgrounds/Sundered Grove.jpg',
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `
    url('${randomImage}') no-repeat center center fixed
  `;
document.body.style.backgroundSize = 'cover';