module.exports = {
  root: true,
  extends: ['universe/native'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': [
          'warn',
          {
            printWidth: 80,
            tabWidth: 2,
            singleQuote: true,
            bracketSameLine: true,
          },
        ],
      },
    },
  ],
};
