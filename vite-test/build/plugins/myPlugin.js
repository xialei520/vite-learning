let reqHost = "";
export default function myPlugin() {
    return {
        name: "my-plugin",

        configureServer(server) {
            // console.log("server", server);
            // return () => {
            server.middlewares.use((req, res, next) => {
                if (reqHost === "") {
                    reqHost = req.rawHeaders[1];
                    console.log("reqHost", reqHost, res.rewrite);
                }
                next();
            });
            // server.middlewares.serveStaticMiddleware

            // };
        }
    };
}
