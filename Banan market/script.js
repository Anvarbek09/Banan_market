let c1 = document.querySelector('.container1')
let bd = document.querySelector('body')
let qora = document.querySelector('.black')
let oq = document.querySelector('.light')
let mavalar = document.querySelector('.products')
let rang = document.querySelector('.orange')
let sariq = document.querySelector('.yellow')
let products = document.querySelector(".qator")
let searchinput = document.querySelector('.search')

const translations = {
    uz: {
        home: "Bosh sahifa",
        rang: "Olovrang",
        sariq: "Sariq",
        search: "Qidiruv",
        black: "To'q ko'k",
        light: "Och ko'k",  
        button: "Mahsulotga"
    },
    ru: {
        home: "Главная страница",
        rang: "Оранжевый",
        sariq: "Желтый",
        search: "Искать",
        black: "Темно синий",
        light: "Светло синий",
        button:"В продукт"

    },
    eng: {
        home: "Main page",
        rang: "Orange",
        sariq: "Yellow",
        search: "Search",
        black: "Dark blue",
        light: "Light blue",
        button:"Into product"
    },
}

function getTranslation(key, lang) {
    return translations[lang][key];
}

function changeLanguage(lang) {
    const selectedLanguage = document.getElementById('language-select').value;
    document.documentElement.lang = selectedLanguage;
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = getTranslation(key, selectedLanguage);

    });
    localStorage.setItem('selectedLanguage', selectedLanguage)
}
const storedLanguage = localStorage.getItem("selectedLanguage");


if (storedLanguage) {
    document.getElementById('language-select').value = storedLanguage;
    changeLanguage();
}
document.getElementById('language-select').addEventListener('change', changeLanguage)














qora.addEventListener('click', () => {
    mavalar.style.backgroundColor = 'darkblue'
    bd.style.backgroundColor = 'darkblue'
})
oq.addEventListener('click', () => {
    mavalar.style.backgroundColor = 'rgb(70, 218, 244)'
    bd.style.backgroundColor = 'rgb(70, 218, 244)'

})
sariq.addEventListener('click', () => {
    c1.style.backgroundColor = 'yellow'
})
rang.addEventListener('click', () => {
    c1.style.backgroundColor = 'orange'

})


let urlapi = 'https://6291f0db9d159855f082bcfb.mockapi.io/student'

function getData() {
    fetch(urlapi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach((item) => {
                let cardBlock = document.createElement("div")
                cardBlock.className = 'card'
                cardBlock.innerHTML = `
                <div class="card-img">
                   <img src="${item.img}" alt="...">          
                </div>
                <div >
                <p>${item.title}</p>
                <p>${item.description}</p>
                </div>
                <div>
                <button class="card-button" data-translate="button">Info product</button>
                </div>
                `
                products.appendChild(cardBlock)

            })

        })
}
getData()







function searchData() {
    products.innerHTML = ''
    let searchData = searchinput.value.toLowerCase()
    fetch(urlapi)
        .then((respont) => {
            return respont.json()
        })
        .then((data) => {
            let filterData = data.filter((item) => {
                return item.title.toLowerCase().includes(searchData)
            })
            filterData.forEach((item) => {
                let cardBlock = document.createElement("div")
                cardBlock.className = 'card'
                cardBlock.innerHTML = `
                <div class="card-img">
                   <img src="${item.img}" alt="...">          
                </div>
                <div >
                <p>${item.title}</p>
                <p>${item.description}</p>
                </div>
                <div>
                <button class="card-button">Info product</button>
                </div>
                `
                products.appendChild(cardBlock)

            })

        })
}