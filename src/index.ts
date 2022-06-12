import startServer from './server';

const server = startServer();

const start = async () =>  {
  try {
    await server.listen( { port: process.env.PORT ?? 8080, host: '0.0.0.0' } );
    console.log(`Server started at http://localhost:8080`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

start();