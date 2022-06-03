from distutils.log import error
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
3) Modificar item
4) Salir
''')
            if menu == '1':
                self.createItem()
            elif menu == '2':
                self.readList('print')
            elif menu == '3':
                self.modItem()
            elif menu == '4':
                break
            
    def createItem(self):
        self.name = input('Nombre: ')
        self.price = input('Precio: ')
        self.image = input('Ruta de image: ')
        self.id = 0
        it = item(self.name,self.price,self.image,self.id)
        if len(self.list) == 0:
            self.readList()
        self.id = len(self.list+1)
        self.list.append(it.dic_item())
        with open('./db/data.json', 'w') as db:
            json.dump(self.list,db)
        print('{it.name} Creado exitosamente')
    
    def readList(self,status='read'):
        self.list = []
        with open('./db/data.json', 'r', encoding='utf-8') as db:
            try:
                data = json.load(db)
                self.list = []
                for i in data:
                    self.list.append(i)
                if status == 'print':
                    for i in self.list:
                        print(f'Id:{i["id"]} {i["name"]}  $ {i["price"]}')
            except json.JSONDecodeError:
                if status == 'print':
                    print('No hay item cargados')
    
    def modItem(self):
        self.readList('print')
        selector = int(input('indiquie id a modificar: '))
        for producto in self.list:
            if selector == producto["id"]:
                print(f'''1-Nombre: {producto["name"]}
2-Precio: {producto["price"]}''')
                option= input('Indique el numero a modificar: ')
                if option == '1':
                    producto['name'] = input('Nuevo nombre: ')
                    with open('./db/data.json', 'w') as db:
                        json.dump(self.list,db)
                    print(producto)
                if option == '2':
                    producto['price'] = input('Nuevo precio: ')
                    with open('./db/data.json', 'w') as db:
                        json.dump(self.list,db)
                    print(producto)
    
if __name__ == '__main__':
    storage1 = storage()