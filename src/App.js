import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Pagination from './components/Pagination';

class App extends Component {
  state = {
    library: [
      // {
      //   title: 'Ronja',
      //   author: 'Astrid Lindgren',
      //   id: 1254
      // },
      // {
      //   title: 'Emil i Lönneberga',
      //   author: 'Astrid Lindgren',
      //   id: 4264
      // },
      // {
      //   title: 'Harry Potter',
      //   author: 'J.K Rowling',
      //   id: 3245
      // }
    ],
    currentBooks: [],
    currentPage: null,
    totalPages: null,
  };

  componentDidMount() {
    const library = [{
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
      title: 'Mio min mio',
      author: 'Astrid Lindgren',
      id: 4299
    },
    {
      title: 'Barnen i Bullerbyn',
      author: 'Astrid Lindgren',
      id: 4300
    },
    {
      title: 'Harry Potter',
      author: 'J.K Rowling',
      id: 3245
    },
    {
      title: 'Gravplaneten',
      author: 'Oskar Källner',
      id: 4239
    },
    {
      title: 'Nalle Puh',
      author: 'A A Milne',
      id: 3246
    }
  ];

    this.setState({ library });
  }

  onPageChanged = data => {
    const { library } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentBooks = library.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentBooks, totalPages });
    console.log('library: ' + library + ' currentBooks:' + currentBooks + ' currentPage:' + currentPage + ' offset: ' + offset + ' pagelimit: ' + pageLimit + ' TotalPages: ' + totalPages);
  }

  removeBook = (index) => {
    const {library} = this.state;

    this.setState({
      library: library.filter((book, i) => {
        return i !== index
      }),
    });
  }

  handleSubmit = (book) => {
    this.setState({library: [...this.state.library, book]});
    this.setState({currentPage: null});
  }
  
  render() {
    const { library, currentBooks, currentPage, totalPages } = this.state;
    const totalBooks = library.length;

    if (totalBooks === 0) return null;
        
    return (
      <div className="App">
        <h1>Hello again, Mats!</h1>
        <Table libraryData={currentBooks} removeBook={this.removeBook}/>
        { currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  sida <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
                </span>
              )
        }
        <Form handleSubmit={this.handleSubmit}/>
        <div className="d-flex flex-row py-4 align-items-center">
          <Pagination totalRecords={totalBooks} pageLimit={3} pageNeighbours={1} onPageChanged={this.onPageChanged} />
        </div>
      </div>
    );
  }
}
  
  export default App;