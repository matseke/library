import React from 'react';

const TableBody = (props) => {
    const rows = props.libraryData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.author}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default TableBody;