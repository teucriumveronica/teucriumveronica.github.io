function createNavigationMenu() {
    const menuItems = [
        { title: "Главная", url: "index.html", id:"homeLink"},
        { title: "Информация", url: "info.html", id:"infoLink"},
//        { title: "Виды и подвиды", url: "info.html#species", id:"speciesLink"},
        { title: "Фотографии", url: "photos.html", id:"photosLink"},
        { title: "Питание", url: "food.html", id:"foodLink"},
        { title: "Обитание", url: "life.html", id:"lifeLink"},
        { title: "Опасности", url: "fear.html", id:"fearLink"},
        { title: "Магазин", url: "shop.html", id:"shopLink"},
        { title: "Оставить отзыв", url: "form.html", id:"formLink"},
//        { title: "Решение алгоритмической задачи", url: "algo.html", id:"algoLink"},
//        { title: "DOM_JS. Считываем информацию из DOM", url: "pasp.html", id:"paspLink"},
//        { title: "Изменяем кириллицу на латиницу по клику", url: "pasp2.html", id:"paspLink"}
    ];

    const navElement = document.querySelector("#dynamicNav ul");
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.title;
        a.id = item.id;
        a.classList.add("nav-link");
        li.appendChild(a);
        navElement.appendChild(li);
    });

    
// добавляем Вики
    const wikipediaLink = document.createElement("li");
    const link = document.createElement("a");
    link.href = "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%80%D0%B8%D0%BA%D0%B0%D1%82";
    link.target = "_blank";
    link.id="wikiLink";
    link.textContent = "Википедия";
    wikipediaLink.appendChild(link);
    navElement.appendChild(wikipediaLink);
    highlightCurrentLink();
}


// Функция для выделения текущей ссылки
function highlightCurrentLink() {

    // Определяем текущую страницу (по URL)
    const currentPage = window.location.href;

    const homeLink = document.getElementById("homeLink");
    const photosLink = document.getElementById("photosLink");
    const infoLink = document.getElementById("infoLink");
    const shopLink = document.getElementById("shopLink");
    const foodLink = document.getElementById("foodLink");
    const lifeLink = document.getElementById("lifeLink");
    const fearLink = document.getElementById("fearLink");
    const formLink = document.getElementById("formLink");
    const algoLink = document.getElementById("algoLink")
    // Убираем стиль у всех ссылок
    homeLink.classList.remove("current");
    photosLink.classList.remove("current");
    shopLink.classList.remove("current");
    infoLink.classList.remove("current");
    foodLink.classList.remove("current");
    lifeLink.classList.remove("current");
    fearLink.classList.remove("current");
    formLink.classList.remove("current");
    algoLink.classList.remove("current")
    // Применяем стиль к текущей ссылке
    if (currentPage.includes("index.html")) {
        homeLink.classList.add("nav-item active");
    } else if (currentPage.includes("photos.html")) {
        photosLink.classList.add("nav-item active");
    } else if (currentPage.includes("shop.html")) {
        shopLink.classList.add("nav-item active");
    } else if (currentPage.includes("info.html")) {
        infoLink.classList.add("current");
    } else if (currentPage.includes("food.html")) {
        foodLink.classList.add("current");
    } else if (currentPage.includes("life.html")) {
        lifeLink.classList.add("current");
    } else if (currentPage.includes("fear.html")) {
        fearLink.classList.add("current");
    } else if (currentPage.includes("form.html")) {
        formLink.classList.add("current");
    } else if (currentPage.includes("algo.html")) {
        algoLink.classList.add("current");
    }
}

// Создание иконки для перехода на главную страницу
const homeIconLink = document.createElement("a");
homeIconLink.href = "index.html"; // Замените "index.html" на URL вашей главной страницы
homeIconLink.id = "homeIconLink"; // Добавляем ID для стилизации, если необходимо

// Создание элемента с изображением иконки
const homeIcon = document.createElement("img");
homeIcon.src = "sur.png"; // Укажите путь к вашей иконке
homeIcon.width = 50
homeIcon.alt = "Главная"; // Альтернативный текст для иконки (для доступности)
homeIconLink.appendChild(homeIcon);

// Добавление иконки в начало меню
const menu = document.getElementById("dynamicNav"); // Замените "menu" на ID вашего меню
menu.insertBefore(homeIconLink, menu.firstChild);


window.onload = createNavigationMenu;
