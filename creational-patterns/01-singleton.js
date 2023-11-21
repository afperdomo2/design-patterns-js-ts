class Singleton {
  static intance = undefined;

  constructor(version) {
    this.version = version;
  }

  static getInstance(version) {
    if (!Singleton.intance) {
      Singleton.intance = new Singleton(version);
    }
    return Singleton.intance;
  }
}

function appSingleton() {
  const singleton1 = Singleton.getInstance('version-1');
  const singleton2 = Singleton.getInstance('version-2');

  console.info(singleton1 === singleton2);
}

appSingleton();
