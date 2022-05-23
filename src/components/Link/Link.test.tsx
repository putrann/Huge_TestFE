import * as React from 'react';
import { render } from '@testing-library/react';
import { Link } from '.';

describe('<Link/>', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Link msg="Learn more" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should not render anything if type mismatch or undefined', () => {
    // @ts-ignore
    const { container } = render(<Link />);
    expect(container.firstChild).toBeNull();
  });
});
