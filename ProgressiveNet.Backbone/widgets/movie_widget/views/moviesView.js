define(['underscore', 'backbone', 'text!../templates/movieItem.html'],
    function (_, backbone, movieItemTemplate) {
        "use strict";
        return backbone.View.extend({
            MovieItemTemplate: _.template(movieItemTemplate),

            initialize: function() {
                _.bindAll(this);
                this.collection.keyword = this.options.options.keyword;
                this.collection.on('reset', this.renderActors);
                this.render();
            },

            render: function () {
                this.collection.fetch({ reset: true });
            },
            
            renderActors: function () {
                //this.$el.html('Total Movies: ' + this.collection.length);
                var detached = $('<div><div class="page-header"><h2>Movie Search <small>for "' + this.collection.keyword + '" with ' + this.collection.length + ' results</small></h2></div></div>');
                detached.append("<ul class='thumbnails'>");
                this.collection.each(function (model, idx) {
                    console.log(model.toJSON());
                    if(model.get('poster') != null)
                    {
                        detached.append(this.MovieItemTemplate(model.toJSON()));
                    }
                    if((idx + 1) % 3 === 0) {
                        detached.append("</ul><ul class='thumbnails'>");
                    }
                }, this);
                detached.append("</ul>");
                
                this.$el.html(detached);
            }
        });
    })