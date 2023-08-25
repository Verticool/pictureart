const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg(block) {
        const img = block.querySelector('img');
        img.classList.add('animated');
        img.src = img.src.slice(0, -4) + '-1.png';
        blocks.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        blocks.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            const img = block.querySelector('img');
            img.classList.add('flipInX');
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            const img = block.querySelector('img');
            img.classList.remove('flipInX');
            hideImg(block);
        });
    });
};

export default pictureSize;