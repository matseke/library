import React from 'react';

const TableHead = (props) => {

    return (
        <thead>
            <tr>
                <th><button type="button" onClick={() => props.requestSort('title')} className={props.getClassNamesFor('title')}>Title</button></th>
                <th><button type="button" onClick={() => props.requestSort('author')} className={props.getClassNamesFor('author')}>Author</button></th>
            </tr>
        </thead>
    );
}

export default TableHead;