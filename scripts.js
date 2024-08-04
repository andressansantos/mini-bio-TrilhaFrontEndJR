document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.querySelector('.like-button');
    const likeCount = document.querySelector('.like-count');
    const ageIcon = document.getElementById('age-icon');
    const ageText = document.getElementById('age-text');

    likeButton.addEventListener('click', function() {
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = count + 1;
    });

    ageIcon.addEventListener('click', function() {
        if (ageText.style.display === 'none' || ageText.style.display === '') {
            ageText.style.display = 'inline';
        } else {
            ageText.style.display = 'none';
        }
    });
});
