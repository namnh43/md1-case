function setContent(page){
    // alert(page)
    window.sessionStorage.setItem('page', page);
    window.location.href = '../../index.html'
}
function setContentNews(arr) {
    window.sessionStorage.setItem('news', JSON.stringify(arr));
    window.location.href = '../../index.html';
}