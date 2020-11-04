import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from 'react';
import Table from './Table';
import Form from './Form';
import Pagination from './components/Pagination';

const useSortableTableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = React.useMemo(() => {
      var sortableItems = [...items];

      if (sortConfig != null) {
          sortableItems.sort((a, b) => {
              if (a[sortConfig.key] < b[sortConfig.key]) {
                  return sortConfig.direction === 'ascending' ? -1 : 1;
              }
              if (a[sortConfig.key] > b[sortConfig.key]) {
                  return sortConfig.direction === 'ascending' ? 1 : -1;
              }
              return 0;
          });
      }

      return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
      let direction = 'ascending';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
      }

      setSortConfig({ key, direction });
  }

  return {items: sortedItems, requestSort, sortConfig};
}

  const App = () => {

    const books = [{
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
    }];

  var library = [...books];
  const {items, requestSort, sortConfig} = useSortableTableData(library);

  const [currentBooks, setCurrentBooks] = useState([]);
  var currentPageX = 1;
  var totalPagesX = 0;

  const onPageChanged = data => {
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    setCurrentBooks(items.slice(offset, offset + pageLimit));
    currentPageX = currentPage;
    totalPagesX = totalPages;

    console.log('library: ' + library + ' currentBooks:' + currentBooks + ' currentPage:' + currentPage + ' offset: ' + offset + ' pagelimit: ' + pageLimit + ' TotalPages: ' + totalPages + ' sortconfig: ' + sortConfig);
  }

  const removeBook = (index) => {
    library =
      library.filter((book, i) => {
        return i !== index
      })
    ;
  }

  const handleSubmit = (book) => {
    library = [...library, book];
    currentPageX = null; 
  }
  
  const totalBooks = library.length;
  if (totalBooks === 0) return null;
  return (
      <div className="App">
        <h1>Hello again, Mats!</h1>
        <Table libraryData={currentBooks} removeBook={removeBook} requestSort={requestSort} sortConfig={sortConfig}/>
        { currentPageX && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  sida <span className="font-weight-bold">{ currentPageX }</span> / <span className="font-weight-bold">{ totalPagesX }</span>
                </span>
              )
        }
        <Form handleSubmit={handleSubmit}/>
        <div className="d-flex flex-row py-4 align-items-center">
          <Pagination totalRecords={totalBooks} pageLimit={3} pageNeighbours={1} onPageChanged={onPageChanged} />
        </div>
      </div>
  );
  
}
  
  export default App;