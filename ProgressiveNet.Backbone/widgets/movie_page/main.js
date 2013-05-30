define(['underscore', 'backbone', './collection/movieCollection', './views/containerview'], function (_, backbone, MovieCollection, ContainerView) {
    return function () {
        return new ContainerView({
            el: this.$el,
            collection: new MovieCollection()
        });
    };
});