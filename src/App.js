import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  state = {
    library: [
      {
        title: 'Ronja',
        author: 'Astrid Lindgren',
        id: 1254
      },
      {
        title: 'Emil i Lönneberga',
        author: 'Astrid Lindgren',
        id: 4264
      },
      {
        title: 'Harry Potter',
        author: 'J.K Rowling',
        id: 3245
      }
    ]
  };

  removeBook = (index) => {
    const {library} = this.state;

    this.setState({
      library: library.filter((book, i) => {
        return i !== index
      }),
    });
  }

  render() {
        
    return (
      <div className="App">
        <h1>Hello again, Mats!</h1>
        <Table libraryData={this.state.library} removeBook={this.removeBook}/>
      </div>
    );
  }
}
  
  export default App;