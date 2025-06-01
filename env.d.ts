declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    NODE_ENV: string;
    BACKEND_API_URL: string;
    BACKEND_WS_URL: string;
    HOSTNAME: string;
  }
}
