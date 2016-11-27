'use strict';
var learnjs = {};

learnjs.problemView = function() {
  return $('<div class="problem-view">').text('Coming Soon!');
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
