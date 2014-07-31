var API_URL = '/api/tweets/';

$(function(){
    // Rest framework synced tweet model, view and collection
    var Tweet = Backbone.Model.extend({
        urlRoot: API_URL
    });
    var TweetView = Backbone.View.extend({
        render: function () {
            this.el = ich.tweet(this.model.toJSON());
            return this;
        }
    });
    var TweetCollection = Backbone.Collection.extend({
        model: Tweet,
        url: API_URL
    });

    // Create messages view
    var InputView = Backbone.View.extend({
        events: {
            'click .tweet-it': 'createTweet',
            'keypress #message': 'createOnEnter'
        },
        createOnEnter: function(e){
            if((e.keyCode || e.which) == 13){
                this.createTweet();
                e.preventDefault();
            }

        },
        // Получаем текст твита и добавляем его в коллекцию
        createTweet: function(){
            var message = this.$('#message').val();
            if(message){
                // После этого TweetCollection автоматически
                // отправит post запрос в бекенд!
                this.collection.create({
                    text: message,
                    username: $('.user_data').attr('username')
                });
                this.$('#message').val('');
            }
        }

    });

    // Main app view
    var Timeline = Backbone.View.extend({
        el: $('.feed'),
        initialize: function() {
            // 1. create collection
            // 2. bind events
            // 3. fetch data
            this.tweets = new TweetCollection();
            this.tweets.bind('reset', this.render, this);
            this.tweets.bind('add', this.insert, this);
            this.tweets.fetch({reset:true});
        },

        // Render functions
        insert: function(tweet){
            $(this.el).prepend(new TweetView({model: tweet}).render().el);
        },
        render: function () {
            this.tweets.each(function (tweet) {
                this.insert(tweet);
            }, this);
            new InputView({
                collection: this.tweets,
                el: $('.input_data'),
            });
            return this;
        }
    });

    // Create app and init
    var app = new Timeline();
    app.initialize();
});
