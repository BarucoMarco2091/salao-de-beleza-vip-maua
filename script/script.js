const galleryData = [
    {
        'image': '../assets/beauty.png',
    },
    {
        'image': '../assets/beauty.png',
    },
    {
        'image': '../assets/beauty.png',
    },
    {
        'image': '../assets/beauty.png',
    },
];

const galleryDiv = document.querySelector('.gallery');
galleryData.forEach((item) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-image'
    cardDiv.innerHTML = 
    `
        <img src="${item.image}" alt="image">
    `

    galleryDiv.appendChild(cardDiv);
});

AOS.init();

$(document).ready(function () {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-x');
    });
});