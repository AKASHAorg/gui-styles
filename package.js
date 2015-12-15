Package.describe({
  name: 'akasha:gui-styles',
  version: '0.0.2',
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
    'static/font/material-design-icons/Material-Design-Icons.eot',
    'static/font/material-design-icons/Material-Design-Icons.svg',
    'static/font/material-design-icons/Material-Design-Icons.ttf',
    'static/font/material-design-icons/Material-Design-Icons.woff',
    'static/font/material-design-icons/Material-Design-Icons.woff2',
    'static/font/roboto/Roboto-Bold.ttf',
    'static/font/roboto/Roboto-Bold.woff',
    'static/font/roboto/Roboto-Bold.woff2',
    'static/font/roboto/Roboto-Light.ttf',
    'static/font/roboto/Roboto-Light.woff',
    'static/font/roboto/Roboto-Light.woff2',
    'static/font/roboto/Roboto-Medium.ttf',
    'static/font/roboto/Roboto-Medium.woff',
    'static/font/roboto/Roboto-Medium.woff2',
    'static/font/roboto/Roboto-Regular.ttf',
    'static/font/roboto/Roboto-Regular.woff',
    'static/font/roboto/Roboto-Regular.woff2',
    'static/font/roboto/Roboto-Thin.ttf',
    'static/font/roboto/Roboto-Thin.woff',
    'static/font/roboto/Roboto-Thin.woff2',
  ]
  var components = [
    'static/sass/components/date_picker/_default.date.scss',
    'static/sass/components/date_picker/_default.scss',
    'static/sass/components/date_picker/_default.time.scss',
    'static/sass/components/_buttons.scss',
    'static/sass/components/_cards.scss',
    'static/sass/components/_chips.scss',
    'static/sass/components/_collapsible.scss',
    'static/sass/components/_color.scss',
    'static/sass/components/_dropdown.scss',
    'static/sass/components/_form.scss',
    'static/sass/components/_global.scss',
    'static/sass/components/_grid.scss',
    'static/sass/components/_icons-material-design.scss',
    'static/sass/components/_materialbox.scss',
    'static/sass/components/_mixins.scss',
    'static/sass/components/_modal.scss',
    'static/sass/components/_navbar.scss',
    'static/sass/components/_normalize.scss',
    'static/sass/components/_prefixer.scss',
    'static/sass/components/_preloader.scss',
    'static/sass/components/_roboto.scss',
    'static/sass/components/_sideNav.scss',
    'static/sass/components/_slider.scss',
    'static/sass/components/_table_of_contents.scss',
    'static/sass/components/_tabs.scss',
    'static/sass/components/_toast.scss',
    'static/sass/components/_tooltip.scss',
    'static/sass/components/_typography.scss',
    'static/sass/components/_variables.scss',
    'static/sass/components/_waves.scss',
  ]
  api.addAssets(assets, 'client');
  api.addFiles(components, 'client', {isImport: true});
  api.addFiles('static/sass/materialize.scss', 'client');
});

