import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import initialData from './initial-data';
import Column from './column';

class App extends React.Component {
  state = initialData;

  render() {
    return (
      <div>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
          return <Column key={columnId} column={column} tasks={tasks} />;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
