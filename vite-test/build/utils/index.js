import os from "os";

function getLocalIp() {
    const networkInterfaces = os.networkInterfaces();

    let ip = "";
    Object.values(networkInterfaces).forEach((list) => {
        list.forEach((ipInfo) => {
            if (ipInfo.family === "IPv4" && ipInfo.address !== "127.0.0.1" && !ipInfo.internal) {
                ip = ipInfo.address;
            }
        });
    });
    return ip;
}

let ip = getLocalIp();
export let ipAdress = ip;
