import API from '../configAPI.js';
import axios from 'axios';

export function clickListener(event, widget) {

  let listenerParams = {
    element: event.target.outerHTML,
    widget: widget,
    time: event.timeStamp.toString()
  };

  axios.post(API.url + '/interactions', listenerParams, API.auth)
    .catch(rejVal => console.log('Listener POST Error: ', rejVal));
}