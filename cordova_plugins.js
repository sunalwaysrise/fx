cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.li8.inappbrowser/www/inappbrowser.js",
        "id": "org.li8.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.li8.inappbrowser": "0.1"
}
// BOTTOM OF METADATA
});