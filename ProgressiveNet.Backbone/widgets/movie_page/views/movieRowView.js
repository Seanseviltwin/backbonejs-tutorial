define(['underscore', 'backbone', 'text!../templates/moviesTableRow.html', './movieRowView'],
    function (_, backbone, movieRowTemplate) {
        "use strict";
        return backbone.View.extend({
            MovieRowTemplate: _.template(movieRowTemplate),
            tagName: 'tr',
            
            events: {
                "click tr":          "rowSelected",
            },

            initialize: function () {
                _.bindAll(this);
            },

            render: function () {
                this.$el.html(this.MovieRowTemplate(this.model.toJSON()));

                return this;
            },
            
            rowSelected: function() {
                console.log("clicked on " + this.model.get('imdb_id'));
                this.trigger('movieSelected', {model: this.model });
            }
        });
    })