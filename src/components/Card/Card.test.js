import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('Should be render Card component', () => {
    const component = renderComponent();
    expect(component).toBeDefined();
  });
});


const renderComponent = () => {
  return render(<Card />);
};