let urlParams = new URLSearchParams(window.location.search);
let district = urlParams.get('district');

console.log(district);

chageTitle = document.querySelector("#title");
chageTitle.innerHTML = `Sân Bóng khu vực ${district}`

let stadiumApi = '/json/db.json';

// Khởi động hàm

function start() {
    getStadium(renderStadium);
}

start();

function getStadium(callback) {
    fetch(stadiumApi).then(function(response) {
        return response.json();
    }).then(data => callback(data.stadium))
}

function renderStadium(stadiums) {
    let listCoursesBlock = document.querySelector("#listStadium");
    let html = stadiums.map(function(stadium) {
        if(stadium.local === `${district}`){
        return`
        <div class = "col-md-4">
        <div class="card mb-4 shadow-sm">
                <img class="detail-room" src="${stadium.img}">
                <div class="card-body">
                    <p class="card-text">
                       <p class="title">${stadium.name}</p>
                       <p class="detail">${stadium.local}</p>
                       <p class="price">${stadium.price}đ/trận &nbsp;&nbsp;<span class="first-price">200,000đ/trận</span></p>
                       <p class="address">Hai Bà Trưng - Hà Nội</p>
                    </p>
                    <a href="" class="text-decoration-none">Chi tiết>></a>
                </div>
        </div>
        </div>    
       ` 
    }
    return "";
    });
    listCoursesBlock.innerHTML = html.join("");
}

// function pickStadium(stadium) {
//     if(stadium.local == "Quận Đông Anh"){
//         renderStadium();
//     }
// }