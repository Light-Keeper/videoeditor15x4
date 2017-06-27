import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('goolge-singin', 'Integration | Component | goolge singin', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{goolge-singin}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#goolge-singin}}
      template block text
    {{/goolge-singin}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
