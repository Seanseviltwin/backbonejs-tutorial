define(['backbone'], function (backbone) {
    "use strict";

    return backbone.Collection.extend({
        url: function () {
            return '/actor/list';
        }
    });
});