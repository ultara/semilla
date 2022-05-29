from logger_base import log

class item:
    def __init__(self,name_i,price_i, image_i, stock_i= 0):
        self.name = name_i
        self.price = price_i
        self.stock = stock_i
        self.image = image_i
    
    def dic_item(self):
        my_dict = {'nombre': self.name, 'price':self.price, 'image':self.image, 'stock':self.stock}
        return my_dict
    
    def __str__(self):
        return f'Name: {self.name}, Price: {self.price}, Image: {self.image}, Stock: {self.stock}'
    
if __name__ == '__main__':
    nombre = input('Nombre: ')
    precio = input('Precio: ')
    imagen = 'None'
    item1  = item(nombre,precio,imagen)
    log.debug(item1)