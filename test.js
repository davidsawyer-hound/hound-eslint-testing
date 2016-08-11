var pluginName = "defaultPluginName";

function getPluginName() {
    pluginName = "anothername";
    return pluginName;
}

getPluginName();

var pluginName = "anothername",
    defaults = {
        propertyName: "value",
    };

function Plugin ( element, options ) {
    this.element = element;
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
}

$.extend( Plugin.prototype, {
    init: function() {
        this.yourOtherFunction( "jQuery Boilerplate" );
    }
});
