const http = require('http');
const app = require('./app');
const logger = require('./modules/logger/logger.module');

// Initialize required variables
const { NODE_ENV = 'development', PORT = 8080 } = process.env;
const hostname = 'localhost';

// Create server using express app
const server = http.createServer(app);

// Start server on process.env.PORT or 8080
server.listen(PORT, hostname, () => {
  const message = `${NODE_ENV[0].toUpperCase() + NODE_ENV.slice(1)} server is running at http://${hostname}:${PORT}`;
  logger.info(message);
  logger.debug(`${message} with PID ${process.pid} started`);
});