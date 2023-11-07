document.getElementById('toggleButton').addEventListener('click', function () {
    var mininav = document.getElementById('mininav');
    if (mininav.style.display === 'none' || mininav.style.display === '') {
        mininav.style.display = 'block';
    } else {
        mininav.style.display = 'none';
    }
});