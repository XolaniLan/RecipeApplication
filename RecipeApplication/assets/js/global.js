"use strict";
/**
 * Add event on multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type string
 * @param {Function} callback Callback function
 */

window.addEventListener = ($elements, eventType, callback) => {
  for (const $element of $elements) {
    $element.addEventListener(eventType, callback);
  }
}