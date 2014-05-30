var plugin_custom_var = {
getToken: function(types, success, fail) {
    return Cordova.exec(success, fail, "PushToken", "getToken", types);
}
};
