import React from 'react';
import ReactDOM from 'react-dom';
import { getData } from './utils/data_helpers';

class Card extends React.Component {
    state = {
        data: {}
    };

    componentDidMount() {
        // getData('http://history.muffinlabs.com/date/01/01').then(data => console.log(data));
        getData('http://history.muffinlabs.com/date/01/01').then(data => this.setState({ data }));

    }

    render() {
        const {
            data,
            url,
        } = this.state.data;

        if( data ){
            var x = this.state.data.data['Events'][2].text;
        }

        return (
            <div>
                <p>{x}</p>
            </div>
        );
    }
}

ReactDOM.render(<Card />, document.getElementById('root'));
