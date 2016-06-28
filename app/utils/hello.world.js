/**
 * Created by johannesC on 2016/06/27.
 */
var helloWorld = new function () {
    helloWorld.sayHi = new function () {
        return "Hello World";
    };
};

module.exports = helloWorld;