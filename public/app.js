'use strict';
var learnjs = {};

// I'm not really certain why we're not using jQuery's $(document).ready stuff here.
learnjs.appOnReady = function() {
  var showCurrentView = function() {learnjs.showView(window.location.hash)};
  window.onhashchange = showCurrentView;
  showCurrentView();
};

learnjs.problemView = function(index) {
  return $('<div class="problem-view">').text('Problem #' + index + ' Coming Soon!');
};

learnjs.showView = function(hash){
  var routes, view, index, viewFn;
  routes = {
    '#problem': learnjs.problemView
  };
  [view, index] = hash.split('-');
  viewFn = routes[view];
  if (viewFn) {
    $('.view-container').empty().append(viewFn(index));
  }
};
