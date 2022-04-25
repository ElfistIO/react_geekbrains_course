import React from 'react';
import { Submit } from './Submit';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';
describe('Button', () => {
  it('render component', () => {
    render(<Submit disabled={false} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Submit disabled={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Submit disabled={false} />);
    expect(screen.getByText(/submit/)).toBeInTheDocument();
  });

  it('render multiply components', () => {
    render(
      <>
        <Submit disabled={false} />
        <Submit disabled={false} />
      </>
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<Submit disabled />);
    expect(screen.getByText('click')).toBeDisabled();
  })
})
