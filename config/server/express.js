import morgan from 'morgan';

export default function expressConfig(app) {
  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With, Content-type, Authorization, Cache-control, Pragma'
    );
    // Pass to next layer of middleware
    next();
  });
  app.use(morgan('combined'));
}
