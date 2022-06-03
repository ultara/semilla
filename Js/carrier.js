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

// Crear items del carrito

const contenedorProductos = document.getElementById('contenedor-productos')

const getData = data => { 
    const template = document.getElementById('template-producto').content
    const fragment = document.createDocumentFragment()
    data.forEach(producto => {
        template.querySelector('img').setAttribute('src', producto.image)
        template.querySelector('h5').textContent= producto.name
        template.querySelector('p span').textContent= producto.price
        template.querySelector('button').dataset.id = producto.id
        
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    }
    );
    contenedorProductos.appendChild(fragment)
}

//Crear boton comprar de cada item

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

const items = document.querySelector('#items')
const getCarrito = () => {

    items.innerHTML = ''

    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()
    Object.values(carrito).forEach(producto => {
        template.querySelector('th').textContent = producto.id
        template.querySelectorAll('td')[0].textContent = producto.name
        template.querySelectorAll('td')[1].textContent = producto.cantidad
        template.querySelector('span').textContent = producto.price * producto.cantidad

        // Botones
        template.querySelector('.btn-info').dataset.id = producto.id
        template.querySelector('.btn-danger').dataset.id = producto.id

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)

    getFooter()
    ButtonAccion()

}

const footer = document.querySelector('#footer-carrito')
const getFooter = () => {

    footer.innerHTML = ''

    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`

        return
    }

    const template = document.querySelector('#template-footer').content
    const fragment = document.createDocumentFragment()

    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, price}) => acc + cantidad * price, 0)
    
    template.querySelectorAll('td')[0].textContent = nCantidad
    template.querySelector('span').textContent = nPrecio

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const vaciarCarrito = document.querySelector('#vaciar-carrito')
    vaciarCarrito.addEventListener('click', ()=> {
        carrito = {}
        getCarrito()
    })

}

const ButtonAccion = () => {
    const plusButton = document.querySelectorAll('#items .btn-info')
    const deleteButton = document.querySelectorAll('#items .btn-danger')

    plusButton.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = carrito[btn.dataset.id]
            producto.cantidad ++
            carrito[btn.dataset.id] = {...producto}
            getCarrito()
        })
    })
    deleteButton.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = carrito[btn.dataset.id]
            producto.cantidad --
            if(producto.cantidad === 0){
                delete carrito[btn.dataset.id]
            }else{
                carrito[btn.dataset.id] = {...producto}
            }
            getCarrito()
        })
    })
}