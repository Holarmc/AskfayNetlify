export {};
declare global {
  interface ProcessEnv {
    APP_API_BASE_URL: string;
    APP_API_TOKEN: string;
    NODE_ENV: "development" | "production" | "test";
  }
  interface Process {
    env: ProcessEnv;
  }
  let process: Process;
}
