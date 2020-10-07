import React from 'react';
import TableBody from './TableBody';

const Table = (props) => {
    const [sortedField, setSortedField] = React.useState(null);
    const {libraryData} = props;
    let sortedData = [...libraryData];
    if (sortedField !== null) {
        sortedData.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
          return -1;
        }
        if (a[sortedField] > b[sortedField]) {
          return 1;
        }
        return 0;
      });
    }
   
    return(
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th><button type="button" onClick={() => setSortedField('title')}>Title</button></th>
                        <th><button type="button" onClick={() => setSortedField('author')}>Author</button></th>
                    </tr>
                </thead>
                <TableBody libraryData = {sortedData}/>
            </table>
        </React.Fragment>
    )
}

export default Table;