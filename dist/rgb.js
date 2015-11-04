'use strict';

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.rgb = factory();
})(undefined, function () {
  'use strict';

  var rgb = {
    greet: function greet() {
      console.log('hello world 3');
    }
  };

  return rgb;
});
//# sourceMappingURL=rgb.js.map
