document.addEventListener('DOMContentLoaded',()=>{
    fetchData()
})

const fetchData = async () => {
    try{
        const res = await fetch('/db/data.json');
        const data = await res.json();
        controlData(data)
    } catch(error){
        console.log(error);
    }
}
let carrito = {}

const controlData = (data) => {
    data.forEach(producto => {
        carrito[producto.id] = {...producto}
    });
    
}
const test = []
const verdad = (item)=>{
    Object.values(carrito).forEach(producto => {
        if(item['name'].toLowerCase() === producto['name'].toLowerCase()){
            test.push(item['name'])
            
        }
        
    });
    if(item['name'] in test){
        console.log('Ya existe')
    }
   
}


const formData = () => {
    form = document.forms['form']
    produc = new thing
    produc.name = form[0].value
    produc.price = form[1].value
    produc.image = form[2].value
    
}
const button = document.querySelector('#sendData')
button.addEventListener('click',()=>{
    formData()
    resp = verdad(produc)
    
})



//const dataLong = Object.values(data).length