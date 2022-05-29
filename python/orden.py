import json


class OrdenCompra: 
    def __init__(self):
        self.storage = []
        self.purcharge = []
        self.readData()

        
    def readData(self):
        with open('./db/data.json', 'r') as db:
            datalist = json.load(db)
        for i in datalist:
            self.storage.append(i)
        if len(self.storage) == 0:
            print('No hay datos cargados')
        else:
            self.menu()
    def menu(self):
        while True:
            chariot = input('Desea crear una orden de compra?(Y/N)')
            if chariot == 'Y':
                char = True
                while char == True:
                    n = 0
                    item = 0
                    for i in self.storage:
                        if int(i['Stock']) >= 1:
                            n +=1
                            print(f'{n}) {i["Nombre"]} {i["Price"]}')
                        else:
                            pass
                    while item == 0: 
                        try:
                            item = int(input('Agregar al carro(numero): '))
                            if item > n:
                                print('Valor no valido')
                                item = 0
                            else:
                                print('Item agregado')
                                   
                        except ValueError:
                            print('Valor no valido')
                            item = 0
                    another = input('Desea agregar algo mas(Y/N)')
                    if another == 'N':
                        char == False
                    
            elif chariot == 'N':
                break
            else:
                print('Opcion no valida')
                

if __name__ == '__main__':
    orden1 = OrdenCompra()