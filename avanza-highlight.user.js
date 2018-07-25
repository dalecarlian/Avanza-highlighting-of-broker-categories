// ==UserScript==
// @name Avanza highlighting of broker categories
// @namespace http://tampermonkey.net/
// @version 0.0.0.2
// @description
// @author
// @match https://www.avanza.se/*
// @grant none
// ==/UserScript==

(function() {
  'use strict';

  function highlightElement(e)
  {
    var text = e.text().trim();
    if(text == 'AVA' || text == 'NON') {
      e.css('background-color', 'pink');
    } else if(text == '-') {
      e.css('background-color', 'lightgray');
    } else if(text == 'SWB' || text == 'SHB' || text == 'DDB' || text == 'NRD' || text == 'ENS') {
      e.css('background-color', 'lightblue');
    }
  }

  function brokerHighlighting(){
    $('.latest_trades tr').each(function (i) {
      highlightElement($(this).find(">:first-child"));
      highlightElement($(this).find(">:nth-child(2)"));
    });

    setTimeout(brokerHighlighting, 1000);
  }
  function addEvent(element, eventName, fn) {
    if (element.addEventListener) {
      element.addEventListener(eventName, fn, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + eventName, fn);
    }
  }
 
  addEvent(window, 'load', function() {
    brokerHighlighting();
  });
})();
