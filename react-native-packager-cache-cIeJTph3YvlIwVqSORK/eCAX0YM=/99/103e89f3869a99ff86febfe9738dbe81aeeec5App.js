Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/ali/ReactNativeProjects/LoginAppWithFirebase/LoginAppWithFirebase/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Header = require('./src/components/common/Header');

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        _react2.default.createElement(_Header2.default, { headerText: 'Authentication', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          'lsdjfnhlavnrfew'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          'Open up App.js to start working on your app!'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          'Changes you make will automatically reload.'
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          'Shake your phone to open the developer menu.'
        )
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});