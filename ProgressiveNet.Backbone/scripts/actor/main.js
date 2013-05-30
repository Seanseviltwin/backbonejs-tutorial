define(['require', '../requireConfig'], function (require) {
    require(['aura/aura'], function (Aura) {
        'use strict';

        var app = new Aura({debug: true});
        app.start({
            widgets: 'body'
        });
    });
})

