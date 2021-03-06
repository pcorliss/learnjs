describe('LearnJS', function() {
  it('can show a problem view', function(){
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });

  it('shows the landing page when there is no hash', function() {
    learnjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });

  it('leaves the view unchanges when there is no hash', function() {
    learnjs.showView('#problem-1');
    learnjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(0);
    expect($('.view-container .problem-view').length).toEqual(1);
  });

  it('passes the hash view paramter to the view function', function() {
    spyOn(learnjs, 'problemView');
    learnjs.showView('#problem-42');
    expect(learnjs.problemView).toHaveBeenCalledWith('42');
  });

  it('invokes the router when loaded', function() {
    spyOn(learnjs, 'showView');
    learnjs.appOnReady();
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  it('subscribes to the hash change event', function() {
    learnjs.appOnReady();
    spyOn(learnjs, 'showView');
    $(window).trigger('hashchange');
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  describe('problem view', function() {
    it('has a title that includes the problem number', function(){
      var view = learnjs.problemView('1');
      expect(view.text()).toEqual('Problem #1 Coming Soon!');
    });
  });
});

describe('ECMAScript 6', () => {
  it('reflects', () => {
    var reflect = value => value;
    expect(reflect(1)).toEqual(1);
  });
});
