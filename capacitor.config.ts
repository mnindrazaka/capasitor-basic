import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capasitor-basic",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.1.11:3000",
    cleartext: true,
  },
};

export default config;
