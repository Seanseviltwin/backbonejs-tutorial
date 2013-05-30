define(['underscore', 'backbone', 'text!../templates/moviesTable.html', './movieRowView'],
    function (_, backbone, movieTableTemplate, MovieRowView) {
        "use strict";
        return backbone.View.extend({
            MovieTableTemplate: _.template(movieTableTemplate),

            initialize: function () {
                _.bindAll(this);
            },

            render: function () {
                this.$el.html(this.MovieTableTemplate());

                var $tbody = this.$el.find("tbody");

                this.collection.each(function(model) {
                    var row = new MovieRowView({ model: model });
                    row.on('movieSelected', this.rowSelected);
                    $tbody.append(row.render().$el);
                }, this);
                
                return this;
            },
            
            rowSelected: function(model) {
                this.trigger('movieSelected', model);
            }
        });
    })