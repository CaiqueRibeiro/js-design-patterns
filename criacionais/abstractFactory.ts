// Abstract Factory:
//  Usado quando o programa precisa trabalhar com diferentes famílias de objetos,
//  porém não pretende acoplar o código cliente às variações concretas
//  Assim, são criadas Fábricas que retornam objetos (interfaces)
//  Ela fornece uma interface para criação de famílias de objetos. Desde que seu
//  código crie objetos a partir desta interface, você não precisará se preocupar
// em criar uma variante errada do produto que não coincida com a família usada

// Interfaces dos produtos que serão retornadas pela Factory
interface Chair {};
interface CoffeeTable {};
interface Sofa {};


// Classe concreta que representa a família de mobílias clássicas
class ClassicChair implements Chair {
  // ... métodos e atributos
}
class ClassicCoffeeTable implements CoffeeTable {
  // ... métodos e atributos
}
class ClassicSofa implements Sofa {
  // ... métodos e atributos
}

// Classe concreta que representa a família de mobílias modernas
class ModernChair implements Chair {
  // ... métodos e atributos
}
class ModernCoffeeTable implements CoffeeTable {
  // ... métodos e atributos
}
class ModernSofa implements Sofa {
  // ... métodos e atributos
}

// --------- Factories --------- //

// Interface da Factory. É com ela que o código cliente irá lidar
interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
  createSofa(): Sofa;
}

// Primeira Factory concreta que cria uma variação de Móbilia Clássica
class ClassicFurnitureFactory implements FurnitureFactory { 
  public createChair(): Chair {
    return new ClassicChair;
  }

  public createCoffeeTable(): CoffeeTable {
    return new ClassicCoffeeTable;
  }

  public createSofa(): Sofa {
    return new ClassicSofa;
  }
}

// Segunda Factory concreta que uma a variação de Mobília Moderna
class ModernFurnitureFactory implements FurnitureFactory {
  
  public createChair(): Chair {
    return new ModernChair;
  }

  public createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable;
  }

  public createSofa(): Sofa {
    return new ModernSofa;
  }
}

// Código cliente
class Client {

  private furnitureFactory: FurnitureFactory;

  constructor(furnitureFactory: FurnitureFactory) {
    this.furnitureFactory = furnitureFactory;
  }

  public createFurniture(): void {
    const chair = this.furnitureFactory.createChair();
    const coffeeTable = this.furnitureFactory.createCoffeeTable();
    const sofa = this.furnitureFactory.createSofa();  
  }
}

// Código que verifica a situação e instancia a factory certa
const config = readConfig();

let furnitureFactory = null;

if(config.TYPE === 'classic') {
  furnitureFactory = ClassicFurnitureFactory;
} else {
  furnitureFactory = ModernFurnitureFactory;
}

const client = new Client(furnitureFactory)

