async function getResponce() {
//    let response = await fetch("shop.json")

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
    for (key in content) {
    let li = document.createElement("li");
    li.style.width = "210px";
    li.className = "d-flex flex-column m-1 p-1 border bg-body";

    // Другие элементы и их стили

    node_for_insert.appendChild(li);
}

}
getResponce()

