import Task from './task';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('task test', () => {
  it('test', () => {
    const mock = {
      task: 'test',
      fulfilment: false
    };

    const onClickChangeMock = jest.fn();
    const onClickDeleteMock = jest.fn();

    const screen = render(
      <Task
        task={mock.task}
        fulfilment={mock.fulfilment}
        changeFulfilment={onClickChangeMock}
        deleteTask={onClickDeleteMock}
      />
    );

    expect(screen.getByText('test')).toBeInTheDocument();

    fireEvent.click(screen.getByText('test'));
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button'));

    expect(onClickChangeMock).toHaveBeenCalled();
    expect(onClickDeleteMock).toHaveBeenCalled();
  });
});
