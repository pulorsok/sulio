import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText, PageTitle } from '../StyledText';

it('Page title', () => {
  const tree = renderer.create(<PageTitle>Snapshot test!</PageTitle>).toJSON();
  expect(tree).toMatchSnapshot();
})
it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();
  expect(tree).toMatchSnapshot();
});
