import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/main.js',
      format: 'cjs',
    },
    {
      file: 'lib/main.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    del({ targets: ['lib/*'] }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
