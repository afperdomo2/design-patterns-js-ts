export class Singleton {
  private static intance: Singleton;

  private constructor(private version: string) {}

  static getInstance(version: string): Singleton {
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
