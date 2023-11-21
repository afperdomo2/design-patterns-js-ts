export class Product {
  constructor(
    private _id: number,
    private _name: string,
    private _cost: number
  ) {}

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }
}

export class ShoppingCar {
  private static instances: { [client: string]: ShoppingCar } = {};
  private products: Product[];

  private constructor() {
    this.products = [];
  }

  static getIntance(client: string): ShoppingCar {
    if (!ShoppingCar.instances[client]) {
      ShoppingCar.instances[client] = new ShoppingCar();
    }
    return ShoppingCar.instances[client];
  }

  add(product: Product) {
    this.products.push(product);
  }

  deleteById() {}

  getProducts() {
    return this.products;
  }
}

const ClientApp = () => {
  console.info('🚀ClientApp:\n');

  /**
   * A pesar de que se intentan crear 4 carror, el sistema solo permite
   * crear un carro por cliente, lo que quiere decir que los 2 carros de
   * Pedro, son el mismo
   */
  const pedroCar = ShoppingCar.getIntance('Pedro');

  const mariaCar = ShoppingCar.getIntance('Maria');

  const pedroCar2 = ShoppingCar.getIntance('Pedro');

  const mariaCar2 = ShoppingCar.getIntance('Maria');

  // Se comparan los carros para validar que solo hay 2
  console.info('pedroCar === pedroCar2:', pedroCar === pedroCar2);
  console.info('mariaCar === mariaCar2:', mariaCar === mariaCar2);

  console.info('pedroCar === mariaCar:', pedroCar === mariaCar);

  // Se crean los productos a agregar
  const camisa = new Product(1, 'Camisa', 1500);
  const pantalon = new Product(2, 'Pantalon', 2000);
  const medias = new Product(3, 'Medias', 300);

  // Agrega productos al carro de Pedro
  pedroCar.add(camisa);
  pedroCar.add(pantalon);
  pedroCar.add(medias);

  // Agrega productos al carro de María
  mariaCar.add(medias);

  // Ambos carros son el mismo
  console.info('pedroCar:', pedroCar.getProducts());
  console.info('pedroCar2:', pedroCar2.getProducts());

  // Ambos carros son el mismo
  console.info('mariaCar:', mariaCar.getProducts());
  console.info('mariaCar2:', mariaCar2.getProducts());
};

ClientApp();
