import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      robots: [],
      searchTerm: '',
      isPending: true
    }
  }
  componentDidMount(){
    setTimeout(()=> {
     fetch('http://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => {
      this.setState({
        robots: data,
        isPending: false
      })
     })
    },3000);
  }
  onSearchChange = (evt) => {
    this.setState({searchTerm: evt.target.value})
  }
  render() {
    const { searchTerm, robots, isPending } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    } )

   return(
       <div className='tc'>
          <h1>Robodex</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
            { isPending ? <h2>Loading ...</h2> : <CardList robots={filteredRobots} />}
          </Scroll>
      </div> 
    ) 
     }
}

export default App;
