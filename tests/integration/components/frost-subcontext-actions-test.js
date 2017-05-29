import {expect} from 'chai'
import {setupComponentTest} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'

describe('Integration | Component | frost subcontext actions', function () {
  setupComponentTest('frost-subcontext-actions', {
    integration: true
  })

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#frost-subcontext-actions}}
    //     template content
    //   {{/frost-subcontext-actions}}
    // `);

    this.render(hbs`{{frost-subcontext-actions}}`)
    expect(this.$()).to.have.length(1)
  })
})
