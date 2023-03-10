module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', "@babel/preset-react", /*"@babel/preset-env"*/],
    plugins: [
      "module:react-native-dotenv", "@babel/plugin-transform-react-jsx"
    ]
  };
};
