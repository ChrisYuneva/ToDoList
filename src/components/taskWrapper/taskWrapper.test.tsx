import TaskWrapper from './taskWrapper';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('task test', () => {
  it('Render empty children', () => {
    const mock = {
      name: 'test'
    };

    const screen = render(<TaskWrapper name={mock.name} children={<></>} />);

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test').children.length).toEqual(0);
  });

  it('Render children', () => {
    const mock = {
      name: 'test'
    };

    const mockChildren = [{ name: 'c1' }, { name: 'c2' }, { name: 'c3' }, { name: 'c4' }];

    const screen = render(
      <TaskWrapper
        name={mock.name}
        children={mockChildren.map((el) => (
          <div key={el.name}>{el.name}</div>
        ))}
      />
    );

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByTestId('children-wrapper').children.length).toEqual(4);
    expect(screen.getByText('c3')).toBeInTheDocument();
  });
});
