const images = [
    'backgrounds/Rallypoint_Delta.jpg',
    'backgrounds/Siphoned_Forest.webp',
    'backgrounds/Sundered_Grove.jpg',
    'backgrounds/Treeborn_Colony.jpg'
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `
    url('${randomImage}') no-repeat center center fixed
  `;
document.body.style.backgroundSize = 'cover';