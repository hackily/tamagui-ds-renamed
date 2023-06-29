import { defineConfig } from "vite";
import { tamaguiPlugin } from "@tamagui/vite-plugin";

const tamaguiPluginConfig = {
  config: "./core/tamagui.config.ts",
  components: [],
};

export default defineConfig({
  plugins: [tamaguiPlugin(tamaguiPluginConfig)],
});
