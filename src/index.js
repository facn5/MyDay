import React from 'react';
import ReactDOM from 'react-dom';
import getData from './utils/data_helpers';

class Card extends React.Component {
  state = {
    data: {}
  };

componentDidMount() {
  getData('http://history.muffinlabs.com/date/01/01')
  .then(data=> console.log(data));
}

}


ReactDOM.render(<Card />, document.getElementById('root'));
