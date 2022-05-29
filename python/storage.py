import json
from items import item

class storage:
    def __init__(self):
        self.list = list()
        self.menu()

    def menu(self):
        while True:
            menu = input('''1) Crear item
2) Mostrar lista item
4) Salir
''')
            if menu == '1':
                self.createItem()
            elif menu == '2':
                with open('./db/data.json', 'r') as db:
                    try:
                        data = json.load(db)
                        self.list = []
                        for i in data:
                            self.list.append(i)
                        for i in self.list:
                            print(f'{i["Nombre"]}  $ {i["Price"]} Stock: {i["Stock"]}')
                    except json.JSONDecodeError:
                        print('No hay elementos cargados')
            elif menu == '3':
                break
    
    def readList(self):
        with open('./db/data.json', 'r') as db:
            try:
                data = json.load(db)
                self.list = []
                for i in data:
                    self.list.append(i)
            except :
                pass
    
    
    def createItem(self):
        self.name = input('Nombre: ')
        self.price = input('Precio: ')
        self.image = input('Ruta de image: ')
        self.stock = input('Cantidad: ')
        it = item(self.name,self.price,self.image, self.stock)
        if len(self.list) == 0:
            self.readList()
        self.list.append(it.dic_item())
        with open('./db/data.json', 'w') as db:
            json.dump(self.list,db)
        print('{self.name} Creacdo exitosamente')

if __name__ == '__main__':
    storage1 = storage()