import React from 'react';

class ChortleCard extends React.Component {
    state = {
        purrs: 0,

    }
    render() {
        return (
            <div className="col-md-8">
                <div className="card my-2 shadow">
                    <div className="card-header">
                        <p className="header-text">{this.props.chortle.name}</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.chortle.mews}</p>
                        <button onClick={() => this.setState ({purrs: this.state.purrs +1})} className="btn btn-primary">Purr {this.state.purrs}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChortleCard;