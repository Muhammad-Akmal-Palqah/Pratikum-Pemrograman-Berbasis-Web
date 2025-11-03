document.addEventListener('DOMContentLoaded', function(){
    const tombol = document.getElementById('tombol-gerak');
    const kotak = document.getElementById('kotak-animasi');

    tombol.addEventListener('click',function(){
        kotak.classList.toggle('bergerak')
    });
});