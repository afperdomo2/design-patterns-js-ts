export interface IHttpAdapter {
  get(): void;
  post(): void;
  put(): void;
  delete(): void;
}

export class ExpressHttpAdapter implements IHttpAdapter {
  get(): void {
    console.info('Express -> get()');
  }
  post(): void {
    console.info('Express -> post()');
  }
  put(): void {
    console.info('Express -> put()');
  }
  delete(): void {
    console.info('Express -> delete()');
  }
}

export class FastityHttpAdapter implements IHttpAdapter {
  get(): void {
    console.info('Fastify -> get()');
  }
  post(): void {
    console.info('Fastify -> post()');
  }
  put(): void {
    console.info('Fastify -> put()');
  }
  delete(): void {
    console.info('Fastify -> delete()');
  }
}

export interface IHttpAdapterFactory {
  makeAdapter(): IHttpAdapter;
}

export class ExpressHttpAdapterFactory implements IHttpAdapterFactory {
  makeAdapter(): IHttpAdapter {
    return new ExpressHttpAdapter();
  }
}

export class FastifyHttpAdapterFactory implements IHttpAdapterFactory {
  makeAdapter(): IHttpAdapter {
    return new FastityHttpAdapter();
  }
}

function appHttpAdapter(factory: IHttpAdapterFactory): void {
  if (!factory) {
    console.info('--- No factory provided ---');
    return;
  }
  const httpAdapter = factory.makeAdapter();
  httpAdapter.get();
  httpAdapter.post();
  httpAdapter.put();
  httpAdapter.delete();
}

type HttpAdapterType = 'express' | 'fastify';
/**
 * Función para crear todas las factories
 * @param {HttpAdapterType} type
 * @returns
 */
function createFactory(type: HttpAdapterType) {
  const factories = {
    express: ExpressHttpAdapterFactory,
    fastify: FastifyHttpAdapterFactory,
  };
  const FactoryClass = factories[type];
  return new FactoryClass();
}

appHttpAdapter(createFactory('express'));
appHttpAdapter(createFactory('fastify'));
