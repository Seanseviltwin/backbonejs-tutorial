define(function() {
    "use strict";

    require.config({
        baseUrl: '/',
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: [
                    'underscore',
                    'jquery'
                ],
                exports: 'backbone'
            }
        },
        paths: {
            aura: 'components/aura/lib',
            jquery: 'components/jquery/jquery',
            underscore: 'components/underscore/underscore',
            backbone: 'components/backbone-amd/backbone'
        }
    });
});