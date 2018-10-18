'use strict';

var visibility = false;

var appRoot = document.getElementById('app');

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Some details go here'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
