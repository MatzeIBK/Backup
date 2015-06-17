var Config = (function() {

    var
        Config = {},
        mConfig = {
            url: 'http://localhost/elf/test.php'
        };

    Config.get = function(key) {
        if(mConfig[key] != undefined) {
            return mConfig[key];
        }

        return null;
    }

    return Config;

})();