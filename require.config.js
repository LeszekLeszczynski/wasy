// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap":            "bower_components/bootstrap/dist/js/bootstrap.min",
        "crossroads":           "bower_components/crossroads/dist/crossroads.min",
        "hasher":               "bower_components/hasher/dist/js/hasher.min",
        "signals":              "bower_components/js-signals/dist/signals.min",
        "jquery":               "bower_components/jquery/dist/jquery.min",
        "text":                 "bower_components/requirejs-text/text",
        "handlebars":           "bower_components/handlebars/handlebars.min"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
};
