import { declare } from '@babel/helper-plugin-utils';

export default declare(() => {
  return {
    presets: [
      "minify",
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: [],
  }
});
