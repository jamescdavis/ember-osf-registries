import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('unregistered-contributor-form', 'Integration | Component | unregistered contributor form', {
  integration: true
});

test('form renders', function(assert) {

    this.set('resetFindContributorsView', console.log('reset'));
    this.set('addUnregisteredContributor', console.log('add'));

    this.render(hbs`{{unregistered-contributor-form resetFindContributorsView=resetFindContributorsView addUnregisteredContributor=addUnregisteredContributor}}`);

    assert.equal(this.$('label')[0].textContent.trim(), 'Full Name');
    assert.equal(this.$('label')[1].textContent.trim(), 'Email');

});
