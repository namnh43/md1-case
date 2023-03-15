function setContent(page){
    // alert(page)
    window.localStorage.setItem('page', page);
    window.location.href = '../index.html'
}