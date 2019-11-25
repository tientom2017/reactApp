import React from 'react';

class Result extends React.Component {

    render() {
        return (
            <div className="col-md-8">
                <div className="panel panel-success">
                    <div className="panel-heading"> <h3 className="panel-title">Result</h3> </div>
                    <div className="panel-body">
                        <p style={{ color: this.props.resultColor, fontSize: this.props.resultFontSize + "px" }}>Color name: {this.props.resultColor}</p>
                        <p style={{ fontSize: this.props.resultFontSize + "px" }}>Font size: {this.props.resultFontSize}px</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
