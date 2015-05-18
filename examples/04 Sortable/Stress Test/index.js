import React from 'react';
import Container from './Container';

export default class SortableStress {
  render() {
    return (
      <div>
        <p>
          How many items can React DnD handle at the same time?
          There is a thousand items in this list.
          With some optimizations like updating the state inside a <code>requestAnimationFrame</code> callback, it can handle a few thousand items without lagging.
          After that, you're better off using virtual lists like <a href='https://github.com/facebook/fixed-data-table'>fixed-data-table</a>.
          Luckily, React DnD is designed to work great with any virtual React data list components because it doesn't keep any state in the DOM.
        </p>
        <p>
          This example does not scroll automatically but you can add the scrolling with a parent drop target that compares <code>component.getBoundingClientRect()</code> with <code>monitor.getClientOffset()</code> inside its <code>hover</code> handler.
          In fact, you are welcome to contribute this functionality to this example!
        </p>
        <Container />
      </div>
    );
  }
}