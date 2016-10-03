import Component from 'ember-component';
import set from 'ember-metal/set';

export default Component.extend({
	actions: {
		selectUser(user) {
			set(this, 'selectedUser', user);
		},
		clearUser() {
			set(this, 'selectedUser', null);
		}
	}
});
