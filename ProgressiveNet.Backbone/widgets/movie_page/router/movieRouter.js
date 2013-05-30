define(['backbone'], function (Backbone) {

    return Backbone.Router.extend({

        initialize: function (options) {
            this.context = options.context;
        },

        routes: {
            '': 'list',
            '/id/:id': 'view'
        },
        
        list: function () {
            this.context.moviesView.render();
        },

        view: function (id) {
            
            var model = this.context.collection.get(id);
            if (model) {
                this.context.initializeMovie(model);
            } else {
                window.history.back(-1);
            }
        }
    });
});