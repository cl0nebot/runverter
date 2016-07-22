import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
   didTransition: function() {
    this._super(...arguments);
    return ga('send', 'pageview', {
      'page': this.get('url'),
      'title': this.get("currentPath")
    });
  }
});

Router.map(function() {
  this.resource('tools', { path: '/' }, function(){
    this.route('locale', { path: '/:locale' });
  });
});

export default Router;
