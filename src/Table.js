import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

// const useSortableTableData = (items, config = null) => {
//     const [sortConfig, setSortConfig] = React.useState(config);

//     const sortedItems = React.useMemo(() => {
//         var sortableItems = [...items];

//         if (sortConfig != null) {
//             sortableItems.sort((a, b) => {
//                 if (a[sortConfig.key] < b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? -1 : 1;
//                 }
//                 if (a[sortConfig.key] > b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? 1 : -1;
//                 }
//                 return 0;
//             });
//         }

//         return sortableItems;
//     }, [items, sortConfig]);

//     const requestSort = key => {
//         let direction = 'ascending';
//         if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
//             direction = 'descending';
//         }

//         setSortConfig({ key, direction });
//     }

//     return {items: sortedItems, requestSort, sortConfig};
// }

const Table = (props) => {
    const {libraryData, removeBook, requestSort, sortConfig} = props;

    //const {items, requestSort, sortConfig} = useSortableTableData(libraryData);

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    
    return(
        <table>
            <caption>Books</caption>
            <TableHead getClassNamesFor={getClassNamesFor} requestSort={requestSort}/>
            <TableBody libraryData = {libraryData} removeBook = {removeBook}/>
        </table>
    );
}

export default Table;