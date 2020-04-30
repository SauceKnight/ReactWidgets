import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        };
    }

    tick = () => {
        this.setState({
            time: new Date()
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        this.interval.clearInterval();
    }

    render() {
        return (
            <>
                <div className="widget1">
                    <h1>Clock</h1>
                    <div className="clock">
                        <div className="time">
                            <p>Time: </p>
                            <p>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</p>
                        </div>
                        <div className="date">
                            <p>Date: </p>
                            <p>{this.state.time.toDateString()}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Clock;