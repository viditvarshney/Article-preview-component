
const shareButton = document.querySelector('.share-button');
const right = document.querySelector('.right');
const shareHover = document.querySelector('.share-hover')
shareButton.addEventListener('mouseover', function() {
    right.classList.add('show-share');
}) 
shareHover.addEventListener('mouseleave', function() {
    right.classList.remove('show-share');
})

