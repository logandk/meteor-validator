Package.describe({
  name:    'logandk:validator',
  summary: 'String validation and sanitization',
  version: '3.34.0',
  git:     'https://github.com/logandk/meteor-validator'
});

Package.on_use(function (api) {
  api.export('validator');
  api.add_files([
    'vendor/validator.js',
    'export.js'
  ]);
});
