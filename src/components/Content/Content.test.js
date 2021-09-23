import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
  it('Should be render content component', () => {
    const component = renderComponent();
    expect(component).toBeDefined();
  });
});


const renderComponent = () => {
  return render(<Content />);
};