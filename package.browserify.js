global.React = React;
global.ReactDOM = ReactDOM;

ReactRouter = require('react-router');
ReactRouter.history = require('history');

injectTapEventPlugin = require("react-tap-event-plugin");
MUI = require('material-ui');
MUI.Libs = {};
MUI.Libs.Menu = require('material-ui/lib/menus/menu');
MUI.Libs.MenuItem = require('material-ui/lib/menus/menu-item');
MUI.Libs.MenuDivider = require('material-ui/lib/menus/menu-divider');

MUI.Libs.SvgIcons = require('material-ui/lib/svg-icons');