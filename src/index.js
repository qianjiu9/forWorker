import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Button>click</Button>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
