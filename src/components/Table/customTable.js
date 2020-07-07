import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, checkbox, data } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {checkbox == true ? <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'Chọn tất cả' }}
                    />
                </TableCell> : ''}

                {data.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
EnhancedTableHead.defaultProps = {
    checkbox: false,
    order: 'asc'
};
EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    checkbox: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
};

function EnhancedTableCell(props) {
    const { classes, Align, Format, DataType, data } = props;
    switch (DataType) {
        case 'number':
            return (
                <TableCell className={classes} align={Align}>
                    {Format == '#,#.##' ? 0 : data}
                </TableCell>
            );
        case "date":
            return (
                <TableCell className={classes} align={Align}>
                    <Moment format={Format}>{data}</Moment>
                </TableCell>
            );
        default:
            return (
                <TableCell className={classes} align={Align}>
                    {data}
                </TableCell>
            );
    }
}
EnhancedTableCell.defaultProps = {
    Align: 'left',
    DataType: 'string'
};
EnhancedTableCell.propTypes = {
    classes: PropTypes.object,
    Align: PropTypes.oneOf(['left', 'center','right']),
    Format: PropTypes.string,
    DataType: PropTypes.string,
    data: PropTypes.object.isRequired
};

export default function CustomTableV1(props) {
    const classes = useStyles();
    const { tableHead, tableData, tableHeaderColor, Checkbox, Tagination, ListSize } = props;
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('type');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(typeof (ListSize) == 'array' ? ListSize[0] : 20);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    return (
        <div className={classes.tableResponsive}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                        data={headCells}
                    />
                    <TableBody>
                        {stableSort(tableData, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                if (Checkbox) {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    <TableCell padding="checkbox">
                                        <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                                    </TableCell>
                                }
                                tableHead.map((headCell) => (
                                    <EnhancedTableCell 
                                    Align={headCell.Align} 
                                    Format={headCell.fomat}
                                    DataType={headCell.dataType}
                                    data={row[headCell.id]}
                                    />
                                ))
                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.name}
                                        selected={isItemSelected}
                                    >
                                        {Checkbox == true ? <TableCell padding="checkbox">
                                            <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                                        </TableCell> : ''}
                                        
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {Tagination != true ? '' : <TablePagination
                rowsPerPageOptions={ListSize}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />}
        </div>
    );
}
CustomTableV1.defaultProps = {
    tableHeaderColor: "gray",
    Tagination: true,
    ListSize: [10, 20, 50, 100, 1000]
};
CustomTableV1.propTypes = {
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string).isRequired,
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    Tagination: PropTypes.bool,
    ListSize: PropTypes.arrayOf(PropTypes.number)
};
