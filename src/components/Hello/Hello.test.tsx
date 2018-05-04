import * as enzyme from 'enzyme';
import * as React from 'react';

import Hello from './Hello';

it('renders the correct text when to enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Maria" />);
  expect(hello.find('.greeting').text()).toEqual('Hello Maria!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name="Maria" enthusiasmLevel={5} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Maria!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Maria" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Maria" enthusiasmLevel={-1} />);
  }).toThrow();
});
