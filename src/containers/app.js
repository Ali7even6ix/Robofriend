import React, { useState, useEffect } from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';
import './app.css'

function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfeild: ''
    //     }
    // }
    const [robots, setRobots] = useState([])
    const [searchfeild, setSearchfield] = useState('')
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    //         .then(users => this.setState({ robots: users }));

    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { setRobots(users) })
    })
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfeild.toLowerCase());
    })
    if (robots.length === 0) {
        return <h1>Loding ...</h1>
    } else {
        return (
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }

}

export default App;