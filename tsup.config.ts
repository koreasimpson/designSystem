import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  treeshake: true,
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'copy',
  },
});
