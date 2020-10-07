import React, {Component} from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
    render() {
        const {libraryData} = this.props;
        return(
            <React.Fragment>
            <table>
                    <TableHead/>
                    <TableBody libraryData = {libraryData}/>
            </table>
        </React.Fragment>
        )
    }
}

export default Table;