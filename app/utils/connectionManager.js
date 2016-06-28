/**
 * Created by johannesC on 2016/06/22.
 */

var connectionManager = {};

connectionManager.isOnline = function () {
    var connectivity = require("connectivity");

    if (connectivity == null) {
        return false;
    } else {
        if (connectivity.getConnectionType() == connectivity.connectionType.wifi) {
            return true;
        }

        if (connectivity.getConnectionType() == connectivity.connectionType.mobile) {
            return true;
        }

        return false;
    }

};


module.exports = connectionManager;