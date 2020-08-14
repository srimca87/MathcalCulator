var exec = require('cordova/exec');

module.coolMethod = function (arg0, success, error) {
    exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
};
module.add = function(arg0, success, error){
    exec(success, error, 'MathCalculator', 'add', [arg0])
}
module.substract = function(arg0, success, error){
    exec(success, error, 'MathCalculator', 'substract', [arg0])
}
