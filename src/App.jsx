import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChortleCard from './components/ChortleCard';

class App extends React.Component {
    state = {
        chortles: [],
        mews: '',
        name: '',
        purrs: 0,
        loading: false,
    };

    componentDidMount() {
        this.setState({
            loading: true,
            chortles: [
             { id: uuidv4(), name: 'Michelle', mews: 'These are my Mew-sings'},
             {id: uuidv4(), name: 'Nibby', mews: 'Meroow'},
             {id: uuidv4(), name: 'FuFu', mews: 'Perrrow'}
            ]
        })
    }

    loadContent = () => {
        this.setState({ loading: true });
    }

    handleMewsChange = (e) => {
        this.setState({ mews: e.target.value });
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handleClick = e => {
        e.preventDefault();
        let newChortles = [...this.state.chortles, { id: uuidv4(), name: this.state.name, mews: this.state.mews }];
        this.setState({ name: '', mews: '', chortles: newChortles });
    }



    render() {
        if (this.state.loading) {
            return (
                <div>
                    <nav className="navbar navbar-light bg-light">
                        <span className="navbar-brand">Welcome to Chortler</span>
                        <form className="form-inline">
                            <input id="name" value={this.state.name} onChange={this.handleNameChange} className="form-control mr-sm-2" type="text" placeholder="Name"></input>
                            <input id="mewsings" value={this.state.mews} onChange={this.handleMewsChange} className="form-control mr-sm-2" type="text" placeholder="Mewsings"></input>
                            <button onClick={this.handleClick} className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Chortle</button>
                        </form>
                    </nav>
                    <main className="container">
                        <section className="row justify-content-center">
                            {this.state.chortles.map((chortle) => (
                                <ChortleCard chortle={chortle} key={`chortle-${chortle.id}`} />
                            ))}
                        </section>
                    </main>
                </div>
            );
        } else {
            return (
                <div>
                    <h1 onClick={this.loadContent}>Click to load</h1>
                </div>
            );
        }
    }
}


export default App;

