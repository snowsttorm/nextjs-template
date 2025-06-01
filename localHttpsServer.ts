import { createServer, Server } from 'node:https';
import { parse } from 'node:url';
import next from 'next';
import { readFileSync } from 'node:fs';
import chalk from 'chalk';

import type { UrlWithParsedQuery } from 'node:url';

import nextConfig from './next.config.ts';

const port: number = 443;
const hostname: string = 'template.local';
const dev: boolean = Boolean(process.env.NODE_ENV !== 'production');

const app = next({
  dev,
  hostname,
  port,
  ...nextConfig,
});
const handle = app.getRequestHandler();

const httpsOptions = {
  key: readFileSync('./.cert/localhost-key.pem'),
  cert: readFileSync('./.cert/localhost.pem'),
};

(async () => {
  try {
    await app.prepare();

    const server: Server = createServer(httpsOptions, (req, res) => {
      const parsedUrl: UrlWithParsedQuery = parse(req.url ?? '', true);
      handle(req, res, parsedUrl);
    });

    server.listen(port, (err?: Error) => {
      if (err) throw err;
      console.log(
        '\n' +
          chalk.green.bold('>') +
          `  ready on https://${hostname}:${port}` +
          '\n'
      );
    });
  } catch (error) {
    console.error('\n' + chalk.red('error starting server:'), error + '\n');
    process.exit(1);
  }
})();

process.on('SIGTERM', (): void => {
  console.log('\n' + chalk.yellow.bold('⚠') + '  shutting down...' + '\n');
  process.exit(0);
});

process.on('SIGINT', (): void => {
  console.log('\n' + chalk.yellow.bold('⚠') + '  shutting down...' + '\n');
  process.exit(0);
});
