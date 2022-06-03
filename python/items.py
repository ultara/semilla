from logger_base import log

class item:
    def __init__(self,name_i,price_i, image_i, id_i):
        self.name = name_i
        self.price = price_i
        self.image = image_i
        self.id = id_i
    
    def dic_item(self):
        my_dict = {'nombre': self.name, 'price':self.price, 'image':self.image, 'id': self.id}
        return my_dict
    
    def __str__(self):
        return f'ID: {self.id} Name: {self.name}, Price: {self.price}, Image: {self.image}'
    
if __name__ == '__main__':
    nombre = input('Nombre: ')
    precio = input('Precio: ')
    imagen = 'None'
    item1  = item(nombre,precio,imagen)
    log.debug(item1)