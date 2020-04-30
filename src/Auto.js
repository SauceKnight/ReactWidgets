import React from 'react';


class Auto extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputVal: "",
        }
    }

    handleInput = (e) => {
        this.setState({ inputVal: e.target.value })
    }

    handleSearch = (e) => {
        this.setState({ inputVal: e.target.value })
    }

    matches = () => {
        const names = ["Abba", "Barney", "Barabara", "Jeff"];
        const namesLi = names.filter(name => {
            // console.log(name);
            return name.includes(this.state.inputVal);
        });

        // console.log(namesLi);
        return namesLi;
        // const namesMatch = names.reduce(name => name === this.inputVal);
    }

    render() {
        const matchedNames = this.matches();
        return (
            <>
                <input onChange={this.handleInput} placeholder="type here" value={this.state.inputVal}></input>
                <ul onClick={this.handleSearch}>
                    {matchedNames.map(name => <li>{name}</li>)}
                </ul>
            </>
        )
    }


}





export default Auto;