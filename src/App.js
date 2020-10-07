import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
      var library = [
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
        }]; 
        
        return (
        <div className="App">
          <h1>Hello again, Mats!</h1>
          <Table libraryData={library}/>
        </div>
      )
    }
  }
  
  export default App;