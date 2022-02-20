/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import { Mermaid } from './index';

describe('Mermaid component', () => {
  test('Render mermaid graph sucessfully', () => {
    const { container } = render(
      <Mermaid deterministicIds deterministicIDSeed="test">
        {`pie title Pets adopted by volunteers
        "Dogs" : 386
        "Cats" : 85
        "Rats" : 15
        `}
      </Mermaid>
    );

    expect(container).toMatchSnapshot();
  });

  test('Render error void diagram', () => {
    render(<Mermaid>this should error!</Mermaid>);

    expect(screen.getByText('Syntax error in graph')).toBeTruthy();
  });
});
