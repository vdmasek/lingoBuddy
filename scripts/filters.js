angular.module('lbApp')
    .filter('toArray', function () {
        return function (obj) {
            if (!(obj instanceof Object)) {
                return obj;
            }

            return _.map(obj, function (val, key) {
                return (_.isObject(val) ? Object.defineProperty(val, '$key', {__proto__: null, value: parseInt(key), writable: true }) : val);
            });
        };
    });