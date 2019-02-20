module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'tools/jest/setup-tests.js', instrument: false },
      'package.json',
      'tsconfig.json',
      'jest.config.js',
      // 'tools/jest/setup-tests.js',
      'src/**/*.ts?(x)',
      'src/**/*.js?(x)',
      'src/**/*.json',
      '!src/**/*.test.ts?(x)',
      '!src/**/*.spec.ts?(x)',
    ],

    tests: ['src/**/*.spec.ts?(x)', 'src/**/*.test.ts?(x)'],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    // like ts-jest need to hoist jest.mock() so use babel after ts to js
    // https://github.com/wallabyjs/public/issues/1375
    preprocessors: {
      '**/*.js?(x)': file =>
        require('babel-core').transform(file.content, {
          sourceMap: true,
          filename: file.path,
          compact: false,
          babelrc: true,
        }),
    },

    debug: true,

    reportConsoleErrorAsError: true,

    lowCoverageThreshold: 80,
  };
};
