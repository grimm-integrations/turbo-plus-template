import reactUseClient from "esbuild-react18-useclient";
import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  splitting: true,
  entry: ["src/**/*.tsx"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  esbuildPlugins: [reactUseClient],
  external: ["react"],
  ...options,
}));
