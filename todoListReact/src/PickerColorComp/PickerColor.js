import React from 'react';

class PickerColor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: ['red', 'green', 'blue', 'pink']
        }
    }

    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }

    render() {
        var elmColor = this.state.colors.map((color, index) => {
            return <span 
                        className = {color === this.props.color ? 'active' : ''} 
                        style={{ backgroundColor: color }} 
                        key={index}
                        onClick={() => this.setActiveColor(color)}
                    />
        })
        return(
            <div className="col-md-4">
                <div className="panel panel-primary">
                    <div className="panel-heading"> <h3 className="panel-title">Panel title</h3> </div>
                    <div className="panel-body">
                        {elmColor}
                    </div>
                </div>
            </div>
        );
    }
}

export default PickerColor;