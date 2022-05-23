import * as React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '.';

describe('<Icon/>', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Icon type="search" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should not render anything if type mismatch or undefined', () => {
    // @ts-ignore
    const { container } = render(<Icon />);
    expect(container.firstChild).toBeNull();
  });
});
