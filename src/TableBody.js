import React from 'react';

const TableBody = (props) => {
    const rows = props.libraryData.map((row, index) => {
        return(
            <tr key={row.id}>
                <td>{row.title}</td>
                <td>{row.author}</td>
                <td>
                    <button onClick={() => props.removeBook(row.id)}>Delete</button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default TableBody;