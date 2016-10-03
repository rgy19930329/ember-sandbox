import Route from 'ember-route';
import inject from 'ember-service/inject';

export default Route.extend({
  ajax: inject(),

  model() {
    return this.get('ajax').request('//api.github.com/users');
    // return this.get('ajax').request('http://rap.taobao.org/mockjsdata/8086/users');
  }
});
