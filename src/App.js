import React, {Component} from 'react';
import TodoItems from './Components/TodoItems/TodoItems'
import AddItem from './Components/AddItem/AddItem'

class App extends Component {
  state = {
    items : [
      {id:1,name:"Achref",age:22},
      {id:2,name:"Mahdi",age:23},
      {id:3,name:"Moussa",age:24}
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id)
    items.splice(i,1)
    this.setState({items})
  }

  addItem = (item) => {
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return (
    <div className="App container">
    <h1 className="text-center" >Todo List</h1>
    <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
    <AddItem addItem={this.addItem}/>
    </div>
    );
  }
}

export default App;
