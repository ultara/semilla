class thing{
    constructor(name_i, price_i, image_i, stock_i){
        this._name = name_i
        this._price = price_i
        this._image = image_i
        this._stock = stock_i
    }
    get name(){
        return this._name
    }
    get price(){
        return this._price
    }
    get image(){
        return this._image
    }
    
    get stock(){
        return this._stock
    }

    set name(name){
        this._name = name
    }

    set price(price){
        this._price = price
    }

    set image(image){
        this._image = image
    }

    set stock(stock){
        this._stock = stock
    }




}