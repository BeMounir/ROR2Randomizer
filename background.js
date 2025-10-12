const images = [
    'images/backgrounds/Rallypoint_Delta.jpg',
    'images/backgrounds/Siphoned_Forest.webp',
    'images/backgrounds/Sundered_Grove.jpg',
    'images/backgrounds/Treeborn_Colony.jpg'
];

const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `
    url('${randomImage}') no-repeat center center fixed
  `;
document.body.style.backgroundSize = 'cover';