function conectarJson(){
    fetch("/db/data.json")
    .then(res =>  res.json())
    .then(jsondata =>  llenarlist(jsondata))
    
}


const baseDatos = []
itemHtml = ''
function llenarlist(items){
    itemtemp = new thing()
    itemtemp.name = items['Nombre']
    itemtemp.price = items['Price']
    itemtemp.image = items['Image']
    itemtemp.stock = items['Stock']
    itemHtml += crearDivItem(itemtemp)
    document.getElementById('items').innerHTML = itemHtml
    baseDatos.push(itemtemp)
    }

    function crearDivItem(obj){
        let itemHtml =`<div class="item">
        <label for="nombre" value="${obj.name}">${obj.name} $ ${obj.price} Stock: ${obj.stock}</label> <br>
        <input type="button" onclick="agregarCarro(id)" class="carro_button" value="Agregar al carro" id="${obj.name}">   
        </div>`
        //<img src="${obj.image}" alt="${obj.name}" class="item_img"><br>
        return itemHtml
    }
    
console.log(baseDatos)


function agregar(){
    baseDatos.push(itemtemp)
    console.log(baseDatos)
}
var baseDatos = []


