describe('ProgrammeGuideController', function() {
  beforeEach(module('Guide'))

  var ctrl

  beforeEach(inject(function($controller) {
   ctrl = $controller('ProgrammeGuideController')
  }))

  it('initializes with an populated guide', function() {
    expect(ctrl.programmes.length).toBeDefined()
  })

})
