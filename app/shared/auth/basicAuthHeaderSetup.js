/**
 * Created by johannesC on 2016/06/15.
 */
var basicAuthHeader = {};

basicAuthHeader.getBasicHeader = function (username, password) {
    var credentials = username + ":" + password;
    //this gets an instance of base64Encode from the given class.
    var base64Encode = require('../../utils/base64');

    var baseCredentials = base64Encode.btoa(credentials);
    return "Basic " + baseCredentials;
};
module.exports = basicAuthHeader;
