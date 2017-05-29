import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('frost-subcontext-actions', 'Integration | Component | frost subcontext actions', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{frost-subcontext-actions}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#frost-subcontext-actions}}
      template block text
    {{/frost-subcontext-actions}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
