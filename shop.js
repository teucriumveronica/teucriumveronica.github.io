async function getResponce() {
//    let responce = await fetch("shop.json")

//    let content = await responce.text()
    let responce = await fetch("shop.json");
    let content = await responce.json();
//    content = content.slice(0, 9)
    let key
//    for (key in content) {
//        console.log(content[key].id, content[key].title)
//        console.log(content[key])
//    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (let key in content) {
        // Создаем элемент li
        let li = document.createElement("li");
        li.style.width = "210px";
        li.className = "d-flex flex-column m-1 p-1 border bg-body";

        // Создаем элемент для отображения ID товара
        let idElement = document.createElement("span");
        idElement.textContent = "ID: " + content[key].id;
        li.appendChild(idElement);

        // Создаем элемент для отображения заголовка товара
        let titleElement = document.createElement("span");
        titleElement.textContent = "Title: " + content[key].title;
        li.appendChild(titleElement);

        // Создаем элемент для отображения описания товара
        let descriptionElement = document.createElement("span");
        descriptionElement.textContent = "Description: " + content[key].description;
        li.appendChild(descriptionElement);

        // Создаем элемент для отображения цены товара
        let priceElement = document.createElement("span");
        priceElement.textContent = "Price: $" + content[key].price.toFixed(2);
        li.appendChild(priceElement);

        // Создаем элемент для отображения изображения товара
        let imgElement = document.createElement("img");
        imgElement.src = content[key].img;
        imgElement.alt = content[key].title;
        imgElement.style.width = "100%";
        li.appendChild(imgElement);

        // Создаем элемент для отображения артикула товара
        let vendorCodeElement = document.createElement("span");
        vendorCodeElement.textContent = "Vendor Code: " + content[key].vendor_code;
        li.appendChild(vendorCodeElement);

        // Добавляем другие элементы и их стили, если необходимо

        // Добавляем li в родительский элемент
        node_for_insert.appendChild(li);
    }
}
getResponce()

