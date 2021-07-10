module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: [
    "node_modules/(?!vue-awesome)"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,vue}" 
  ]
};
