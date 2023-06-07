var url = "https://api.openweathermap.org/data/2.5";
var url2 = "weather?q=London&units=metric&appid=689354842d50d005cc13a72c2f0dfdd9";
var key = "689354842d50d005cc13a72c2f0dfdd9";

const searchInput = document.querySelector(".box__search");
searchInput.addEventListener('keyup', setQuery)

function setQuery(e) {
    if (e.keyCode == 13) {
        getResult(searchInput.value);
    }
}

function getResult(query) {
    axios.get(`${url}/weather?q=${query}&units=metric&appid=${key}`)
        .then(function(reponse) {
            return reponse.data;
        })
        .then(displayResult)
        .catch(function(err) {})
}

function displayResult(data) {
    // City
    let city = document.querySelector(".location .city");
    city.innerText = `${data.name} , ${data.sys.country}`;
    // date 
    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = editDate(now);
    // temp
    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(data.main.temp)}<span>ºC</span>`;
    var app = document.querySelector(".app");
    if (`${Math.round(data.main.temp)}` < 20) {
        app.classList.add("bg")
    } else {
        app.classList.remove("bg")
    }

    let weather = document.querySelector(".current .weather");
    weather.innerText = `${data.weather[0].main}`

    let low_hight = document.querySelector(".current .low-high");
    low_hight.innerText = `${Math.round(data.main.temp_min)}ºC - ${Math.round(data.main.temp_max)}ºC`;
}



// edit date
function editDate(d) {
    // get the day of week
    var day = d.getDay();
    var day_name = "";
    switch (day) {
        case 0:
            day_name = "Chủ Nhật"
            break;
        case 1:
            day_name = "Thứ Hai"
            break;
        case 2:
            day_name = "Thứ Ba"
            break;
        case 3:
            day_name = "Thứ Tư"
            break;
        case 4:
            day_name = "Thứ Năm"
            break;
        case 5:
            day_name = "Thứ Sáu"
            break;
        case 6:
            day_name = "Thứ Bảy"
    }
    // get the day of month
    var date = d.getDate();
    if (date < 10) {
        date = '0' + date;
    }

    // get Months
    var months = new Array();
    months[0] = "Tháng Giêng";
    months[1] = "Tháng Hai";
    months[2] = "Tháng Ba";
    months[3] = "Tháng Bốn";
    months[4] = "Tháng Năm";
    months[5] = "Tháng Sáu";
    months[6] = "Tháng Bảy";
    months[7] = "Tháng Tám";
    months[8] = "Tháng Chín";
    months[9] = "Tháng Mười";
    months[10] = "Tháng Mười Một";
    months[11] = "Tháng Mười Hai";

    var month = months[d.getMonth()];
    // get Year
    var year = d.getFullYear();

    return `${day_name} , ${date}   ${month}   ${year}`;
}




















// axios.get(url).then(function(res) {
//     console.log(res.data.wind.speed)
// })