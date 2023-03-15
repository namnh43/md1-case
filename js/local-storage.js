function setContent(page){
    // alert(page)
    window.sessionStorage.setItem('page', page);
    window.location.href = '../index.html'
}