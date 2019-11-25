import React from 'react';

const DEFAULTCOLOR = 'red';
const DEFAULTFONTSIZE = 22;

class Reset extends React.Component {

    resetAction() {
        this.props.resetAction(DEFAULTCOLOR, DEFAULTFONTSIZE)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.resetAction()} type="button" class="btn btn-secondary">Reset</button>
            </div>
        );
    }
}

export default Reset;