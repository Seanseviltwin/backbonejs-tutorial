define(['underscore', './views/moviesView', './collections/movieCollection'], function (_, MoviesView, MovieCollection) {
    return function () {
        return new MoviesView({
            el: this.$el,
            options: this.options,
            collection: new MovieCollection()
        });
    };
    
    //return {
    //    initialize: function () {
    //        _.bindAll(this);
    //        this.collection = new movieCollection();
    //        this.collection.on('reset', this.renderResult, this);
    //        this.render();
    //    },

    //    render: function() {
    //        this.collection.fetch({ reset: true });
            
    //    },
        
    //    renderResult: function () {
    //        this.$el.html("Total Hits: " + this.collection.length);
    //    }
    //};
});