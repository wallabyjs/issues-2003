module.exports = function(wallaby) {
  return {
    files: [
      "src/**/*.js",
      "src/**/*.jsx",
      "!src/**/*.spec.js",
      "!src/**/*.spec.jsx"
    ],
    tests: ["src/**/*.spec.js", "src/**/*.spec.jsx"],
    env: {
      type: "node",
      runner: "node"
    },
    compilers: {
      "**/*.js": wallaby.compilers.babel({
        presets: ["@babel/react", "@babel/preset-env"],
        plugins: [
          "@babel/proposal-class-properties",
          "@babel/proposal-object-rest-spread"
        ]
      })
    },
    testFramework: "jest"
  };
};