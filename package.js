Package.describe({
  name: 'akasha:gui-styles',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('fourseven:scss@3.4.1');
  
  var assets = [
    'vendor/materialize/font/material-design-icons/Material-Design-Icons.eot',
    'vendor/materialize/font/material-design-icons/Material-Design-Icons.svg',
    'vendor/materialize/font/material-design-icons/Material-Design-Icons.ttf',
    'vendor/materialize/font/material-design-icons/Material-Design-Icons.woff',
    'vendor/materialize/font/material-design-icons/Material-Design-Icons.woff2',
    'vendor/materialize/font/roboto/Roboto-Bold.ttf',
    'vendor/materialize/font/roboto/Roboto-Bold.woff',
    'vendor/materialize/font/roboto/Roboto-Bold.woff2',
    'vendor/materialize/font/roboto/Roboto-Light.ttf',
    'vendor/materialize/font/roboto/Roboto-Light.woff',
    'vendor/materialize/font/roboto/Roboto-Light.woff2',
    'vendor/materialize/font/roboto/Roboto-Medium.ttf',
    'vendor/materialize/font/roboto/Roboto-Medium.woff',
    'vendor/materialize/font/roboto/Roboto-Medium.woff2',
    'vendor/materialize/font/roboto/Roboto-Regular.ttf',
    'vendor/materialize/font/roboto/Roboto-Regular.woff',
    'vendor/materialize/font/roboto/Roboto-Regular.woff2',
    'vendor/materialize/font/roboto/Roboto-Thin.ttf',
    'vendor/materialize/font/roboto/Roboto-Thin.woff',
    'vendor/materialize/font/roboto/Roboto-Thin.woff2',
  ]
  var components = [
    'vendor/materialize/sass/components/date_picker/_default.date.scss',
    'vendor/materialize/sass/components/date_picker/_default.scss',
    'vendor/materialize/sass/components/date_picker/_default.time.scss',
    'vendor/materialize/sass/components/_buttons.scss',
    'vendor/materialize/sass/components/_cards.scss',
    'vendor/materialize/sass/components/_chips.scss',
    'vendor/materialize/sass/components/_collapsible.scss',
    'vendor/materialize/sass/components/_color.scss',
    'vendor/materialize/sass/components/_dropdown.scss',
    'vendor/materialize/sass/components/_form.scss',
    'vendor/materialize/sass/components/_global.scss',
    'vendor/materialize/sass/components/_grid.scss',
    'vendor/materialize/sass/components/_icons-material-design.scss',
    'vendor/materialize/sass/components/_materialbox.scss',
    'vendor/materialize/sass/components/_mixins.scss',
    'vendor/materialize/sass/components/_modal.scss',
    'vendor/materialize/sass/components/_navbar.scss',
    'vendor/materialize/sass/components/_normalize.scss',
    'vendor/materialize/sass/components/_prefixer.scss',
    'vendor/materialize/sass/components/_preloader.scss',
    'vendor/materialize/sass/components/_roboto.scss',
    'vendor/materialize/sass/components/_sideNav.scss',
    'vendor/materialize/sass/components/_slider.scss',
    'vendor/materialize/sass/components/_table_of_contents.scss',
    'vendor/materialize/sass/components/_tabs.scss',
    'vendor/materialize/sass/components/_toast.scss',
    'vendor/materialize/sass/components/_tooltip.scss',
    'vendor/materialize/sass/components/_typography.scss',
    'vendor/materialize/sass/components/_variables.scss',
    'vendor/materialize/sass/components/_waves.scss',
  ]
  api.addAssets(assets, 'client');
  api.addFiles(components, 'client', {isImport: true});
  api.addFiles('vendor/materialize/sass/materialize.scss', 'client');
});

