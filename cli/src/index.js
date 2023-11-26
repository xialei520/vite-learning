import { createServer, build } from "vite";

export class Cli {
  static async run() {
    let viteConfig = {
        
    }
    const server = await createServer(viteConfig);
    server.listen();
  }
}
