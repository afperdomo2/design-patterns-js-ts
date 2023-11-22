/**
 * Paso 1:
 *
 * Declare la clase/interfaz del producto base, esto será
 * devuelto por clase de fábrica y sus subclases.
 */
class BaseCar {
  showCost() {
    throw new Error('Method not implemented!');
  }
}

/**
 * Paso 2:
 *
 * Implementar subclases de productos concretos que
 * heredan/implementan la clase/interfaz del producto base.
 */
class MastodonCar extends BaseCar {
  showCost() {
    console.info('MastodonCar cost: 30000 USD');
  }
}

class RhinoCar extends BaseCar {
  showCost() {
    console.info('RhinoCar cost: 100000 USD');
  }
}

/**
 * Paso 3:
 *
 * Declarar clase/interfaz de fábrica que devuelve objetos que
 * coinciden el producto base, no los productos concretos.
 */
class CarFactory {
  makeCar() {
    throw new Error('Method not implemented!');
  }
}

/**
 * Paso 4:
 *
 * Implementar subclases de fábricas concretas que
 * heredan/implementan la clase/interfaz base de fábrica. Estas
 * clases volverán concretas. productos en su método de fábrica.
 */
class MastodonCarFactory extends CarFactory {
  makeCar() {
    return new MastodonCar();
  }
}

class RhinoCarFactory extends CarFactory {
  makeCar() {
    return new RhinoCar();
  }
}

/**
 * Ejecuta una factory
 */
function appFactory(factory) {
  const car = factory.makeCar();
  car.showCost();
}

/**
 * Factory para crear factories
 * @param {string} type
 * @returns
 */
function createFactory(type) {
  const factories = {
    mastodon: MastodonCarFactory,
    rhino: RhinoCarFactory,
  };
  const Factory = factories[type];
  return new Factory();
}

appFactory(createFactory('mastodon'));
appFactory(createFactory('rhino'));
