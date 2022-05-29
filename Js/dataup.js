document.addEventListener('DOMContentLoaded',()=>{
    fetchData()
})

const fetchData = async () => {
    try{
        const res = await fetch('/db/data.json');
        const data = await res.json();
        getData(data)
        detectarBotones(data)
    } catch(error){
        console.log(error);
    }
}

const contenedorProductos = document.getElementById('contenedor-productos')

const getData = data => { 
    const template = document.getElementById('template-producto').content
    const fragment = document.createDocumentFragment()
    data.forEach(producto => {
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        template.querySelector('h5').textContent= producto.title
        template.querySelector('p span').textContent= producto.precio
        template.querySelector('button').dataset.id = producto.id
        
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    }
    );
    contenedorProductos.appendChild(fragment)
}

let carrito = {}

const detectarBotones = (data) => {
    const botones = document.querySelectorAll('.card button')

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            producto.cantidad = 1
            if (carrito.hasOwnProperty(producto.id)){
                producto.cantidad = carrito[producto.id].cantidad + 1
            }

            carrito[producto.id] = {...producto}
            getCarrito()
        })
    })
}