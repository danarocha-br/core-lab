module.exports = {
  testEnvironment: 'node',
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/lib/"
  ],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  moduleNameMapper: {
    'react-syntax-highlighter/dist/esm/(.*)':
        'react-syntax-highlighter/dist/cjs/$1'
  },
  transformIgnorePatterns: [
      'node_modules/(?!react-syntax-highlighter|@storybook)'
  ],

    transformIgnorePatterns: [
      "/node_modules/(?!@dump247).+(ts|tsx|js|jsx)$"
    ],
  }
