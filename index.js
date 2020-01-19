const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 60) + 'px; left: ' + (e.pageX - 60) + 'px;');
});

document.addEventListener('click', (e) => {
    console.log(e.target);
    cursor.classList.add('click');

    setTimeout(() => {
        cursor.classList.remove('click');
    }, 500);
});