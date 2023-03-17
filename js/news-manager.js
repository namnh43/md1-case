let newsList = [];
function init(){
    let news1 = new News("kinh doanh", "Mở trại chỉ nuôi loài độc lạ ít biết, ông chủ thu lãi tiền tỷ");
    news1.avatar="../img/carousel1.jpg"
    news1.status=true;
    news1.author="namnguyen";
    news1.content="Bỏ nghề xây dựng, anh Nguyễn Văn Chúc (50 tuổi, quê Nam Định) lập trại nuôi con vật độc lạ như dúi, don, chồn ở TP. Cần Thơ, Đồng Nai,... thu lãi bạc tỷ mỗi năm."
    let news2 = new News("sức khỏe","Người nuôi chó cần làm gì để phòng nguy cơ lây nhiễm sán?");
    news2.avatar = "../img/carousel2.jpg";
    news2.status = true;
    news2.author = "namnguyen";
    news2.content = "Theo các chuyên gia, người nuôi chó có nguy cơ mắc bệnh sán dây chó cao hơn  nhiều  lần so với bình thường.";
    newsList.push(news2);
    newsList.push(news2);
    newsList.push(news2);
    newsList.push(news1);
    newsList.push(news1);
}

function loadContent(){
    let json = window.localStorage.getItem('news');
    if(json) {
        newsList = JSON.parse(json);
    } else {
        init();
    }
    return newsList;
}