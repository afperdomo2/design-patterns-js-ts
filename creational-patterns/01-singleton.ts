export class Singleton {
  private static instance: Singleton;

  private constructor(private version: string) {}

  static getInstance(version: string): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }
    return Singleton.instance;
  }
}

function appSingleton() {
  const singleton1 = Singleton.getInstance('version-1');
  const singleton2 = Singleton.getInstance('version-2');

  console.info(singleton1 === singleton2);
}

appSingleton();
