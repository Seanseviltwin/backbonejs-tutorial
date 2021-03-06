﻿define(['backbone'], function(backbone) {
    "use strict";

    return backbone.Collection.extend({
        keyword: "a",
        
        url: function () {
            return 'http://imdbapi.org/?title=' + this.keyword + '&type=json&plot=none&episode=0&limit=100&year=2012&yg=1&mt=none&lang=en-US&offset=&aka=simple&release=simple&business=0&tech=0';
        }
    });
});