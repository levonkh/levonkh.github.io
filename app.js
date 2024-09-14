document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.getElementById('gallery');
    const imageCount = 3;  // Number of bear images

    function getRandomSize() {
        // Random width between 400 and 800, with 4:3 aspect ratio
        const width = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
        const height = Math.floor(width * 3 / 4);
        return { width, height };
    }

    // Create bear images dynamically
    for (let i = 0; i < imageCount; i++) {
        const { width, height } = getRandomSize();
        const imageUrl = `https://placebear.com/${width}/${height}?${i}`;
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `<img src="${imageUrl}" alt="Bear ${i + 1}">`;
        gallery.appendChild(galleryItem);
    }

    // Add JavaScript for refresh button
    document.getElementById('refresh-button').addEventListener('click', function () {
        window.location.reload();
    });
})


