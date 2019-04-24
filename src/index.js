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
            console.log("satra",data['Births']);
            var y = data['Births'].length;
            // var x = this.state.data.data['Briths'].text;
            console.log(data['Births'][y-1].text);
        }

        return (
            <div>
            </div>
        );
    }
}

ReactDOM.render(<Card />, document.getElementById('root'));
