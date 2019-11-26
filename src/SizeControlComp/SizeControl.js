import React from 'react'

// const UP = 1;
// const DOWN = 0;

class SizeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: props.fontSize
        }
    }

    changeSize(value) {
        var fontSizeChange = this.state.fontSize + value
        if(fontSizeChange >= 12 && fontSizeChange <= 34){
            this.props.onReceiveFontSize(fontSizeChange);
            this.setState({
                fontSize: fontSizeChange
            });
        }
    };

    render() {
        return(
            <div className="col-md-4">
                <div className="panel panel-warning">
                    <div className="panel-heading"> <h3 className="panel-title">Size Control</h3> </div>
                    <div className="panel-body">
                        <p style={{ fontSize: this.state.fontSize + "px" }}>Font Size: {this.state.fontSize}</p>
                        <button onClick={() => this.changeSize(2)} className="btn btn-primary">Up</button><br/>
                        <button onClick={() => this.changeSize(-2)} className="btn btn-success">Down</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SizeControl;