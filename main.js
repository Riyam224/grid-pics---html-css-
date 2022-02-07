const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;
// et firs mg opacity 
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // reset opcity to all the images 
    imgs.forEach(img => (img.style.opacity = 1));
    // change curentimages to src mg 
    current.src = e.target.src;
    // change opacity: 

    // add fadein class
    current.classList.add('fade-in');
    // remove fade in class 
    setTimeout(() => current.classList.remove('fade-in'), 500);
    e.target.style.opacity = opacity;

}