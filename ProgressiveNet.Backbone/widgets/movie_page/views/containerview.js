define(['underscore', 'backbone', './moviesTableView', '../router/movieRouter'],
    function (_, backbone, MoviesView, MovieRouter) {
        "use strict";

        return backbone.View.extend({
            initialize: function() {
                _.bindAll(this);
                this.collection
                    .on('reset', this.onMovieCollectionReset)
                    .fetch({ reset: true });;
                
                this.router = new MovieRouter({ context: this });

                $(function () {
                    backbone.history.start({ pushState: true, hashChange: true, root: '/movie', silent: true });
                });
            },
            
            render: function() {
            },

            onMovieCollectionReset: function () {
                if(!this.moviesView) {
                    this.moviesView = new MoviesView({ el: this.el, collection: this.collection, router: this.router });
                    this.listenTo(this.moviesView, 'movieSelected', this.initializeMovie, this);
                }

                this.moviesView.render();
            },

            initializeMovie: function(options) {
                this.router.navigate('/id/' + options.model.get('imdb_id'));
                this.initializeMovieView(options.model);
            },
            
            initializeMovieView: function (model) {
                this.$el.html(model.get('title'));
            }
        });
    })