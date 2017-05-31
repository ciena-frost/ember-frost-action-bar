import {expect} from 'chai'
import {$hook} from 'ember-hook'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'
const test = integration('frost-subcontext-actions')

describe(test.label, function () {
  test.setup()

  describe('when onClick is given and button is clicked', function () {
    let dispatchHandler, handler
    beforeEach(function () {
      dispatchHandler = sinon.spy()
      handler = sinon.spy()
      this.setProperties({dispatchHandler})
      this.setProperties({handler})
      this.render(hbs`
      {{frost-subcontext-actions
        hook='subcontext-actions'
        subcontentActions=(array
          (hash
            label='Do something'
            action=(action handler)
            icon=(hash
              pack='frost'
              name='round-add'
            )
          )
          (hash
            label='Action type'
            action=(hash type="string")
            icon=(hash
              pack='frost'
              name='round-add'
            )
          )
        )
        onDispatch=dispatchHandler
      }}

      `)

      $hook('subcontext-actions-button').click()
    })

    it('should call the handler', function () {
      expect(dispatchHandler).to.have.callCount(1)
      expect(handler).to.have.callCount(1)
    })
  })
})
