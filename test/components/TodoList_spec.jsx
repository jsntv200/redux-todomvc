import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../src/components/TodoList';
import {expect} from 'chai';
import {List, Map} from 'immutable';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} = TestUtils;

describe('TodoList', () => {
  let items;

  const todos = List.of(
    Map({id: 1, text: 'React',     status: 'active'}),
    Map({id: 2, text: 'Redux',     status: 'active'}),
    Map({id: 3, text: 'Immutable', status: 'completed'})
  );

  describe('when filter is active', () => {
    beforeEach(() => {
      const component = renderIntoDocument(
        <TodoList filter='active' todos={todos} />
      );

      items = scryRenderedDOMComponentsWithTag(component, 'li');
    });

    it('should render a list with only the active items', () => {
      expect(items.length).to.equal(2);
    });

    it('should render the first items text as React', () => {
      expect(items[0].textContent).to.contain('React');
    });

    it('should render the second items text as Redux', () => {
      expect(items[1].textContent).to.contain('Redux');
    });
  });

  describe('when filter is completed', () => {
    beforeEach(() => {
      const component = renderIntoDocument(
        <TodoList filter='completed' todos={todos} />
      );

      items = scryRenderedDOMComponentsWithTag(component, 'li');
    });

    it('should render a list with only the completed items', () => {
      expect(items.length).to.equal(1);
    });

    it('should render the first items text as React', () => {
      expect(items[0].textContent).to.contain('Immutable');
    });
  });

  describe('when filter is all', () => {
    beforeEach(() => {
      const component = renderIntoDocument(
        <TodoList filter='all' todos={todos} />
      );

      items = scryRenderedDOMComponentsWithTag(component, 'li');
    });

    it('should render a list with all items', () => {
      expect(items.length).to.equal(3);
    });

    it('render the first items text as React', () => {
      expect(items[0].textContent).to.contain('React');
    });

    it('render the second items text as Redux', () => {
      expect(items[1].textContent).to.contain('Redux');
    });

    it('render the third items text as Immutable', () => {
      expect(items[2].textContent).to.contain('Immutable');
    });
  });
});
