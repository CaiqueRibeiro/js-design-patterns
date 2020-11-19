// Factory Method:
//    fornece uma interface para criação de objetos na superclasse,
//    mas permite que as subclasses alterem o tipo de objeto a ser criado

// Serve para que a aplicação não fique presa à classes concretas,
// Assim, ao precisar alterar ou adicionar uma nova classe, é preciso mudar
// somente na class Factory ou criar uma nova Factory, e não em todo o código

// Abstração da classe criadora
abstract class Criador {

  // método factory. Deve ser implementado para que o método principal (algumaOperacao)
  // funcione. Cada subclasse irá implementá-lo de forma diferente
  public abstract factoryMethod(): Produto;

  // A operação principal. Nela, qual o tipo de Produto será criado é transparente
  public algumaOperacao(): string {
    const produto = this.factoryMethod();
    return produto.operation();
  }
}

class CriadorConcreto1 extends Criador {
  // sobrescrevendo o método abstrato (obrigatório)
  public factoryMethod() {
    return new ProdutoConcreto1();
  }
}

class CriadorConcreto2 extends Criador {
  public factoryMethod() {
      // sobrescrevendo o método abstrato (obrigatório)

    return new ProdutoConcreto1();
  }  
}

interface Produto {
  operation(): string;
}

class ProdutoConcreto1 {
  public operation(): string {
    return 'Resultado do ProdutoConcreto1';
  }
}

class ProdutoConcreto2 {
  public operation(): string {
    return 'Resultado do ProdutoConcreto2';
  }
}

function clienteDaFactory(criador: Criador) {
  console.log(criador.algumaOperacao());
}

console.log('Inicializando com o CriadorConcreto1.');
clienteDaFactory(new CriadorConcreto1());

console.log('Inicializando com o CriadorConcreto2.');
clienteDaFactory(new CriadorConcreto2());
