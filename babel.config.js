module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-styled-components',
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~',
          rootPathSuffix: 'src',
        },
      ],
      ['module:react-native-dotenv', {
        'envName': 'APP_ENV',
        'moduleName': '@env',
        'path': '.env',
        'safe': false,
        'allowUndefined': true,
        'verbose': false
      }]
    ],
  };
};