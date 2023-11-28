import reactUseClientPlugIn from "esbuild-react18-useclient";
import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  format: ["cjs", "esm"],
  entry: ["src/**/*.tsx"],
  sourcemap: false,
  dts: true,
  clean: true,
  minify: !options.watch,
  esbuildPlugins: [reactUseClientPlugIn],
  legacyOutput: true,
}));
