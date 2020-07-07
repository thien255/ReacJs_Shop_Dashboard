import 'date-fns';
import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import { lighten, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridItem from 'components/Grid/GridItem';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import GridContainer from 'components/Grid/GridContainer';
import { FormControl, FormGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
// icon
import SaveIcon from '@material-ui/icons/Save';

function createData(code, name, type, fromdate, todate, quantity, value, status) {
  return { code, name, type, fromdate, todate, quantity, value, status };
}
function CodeVoucher(code, userBuy,  fromdate, todate, dateUsing, value, status) {
  return { code, userBuy, fromdate, todate, dateUsing, value, status };
}
var toDate = new Date();
const rows = [
  createData('PHVC000003', 'Cupcake', 1, toDate, toDate, 1000, 10000, 4.3),
  createData('PHVC000003', 'Donut', 1, toDate, toDate, 1000, 10000, 4.9),
  createData('PHVC000003', 'Eclair', 1, toDate, toDate, 1000, 10000, 6.0),
  createData('PHVC000003', 'Frozen yoghurt', 2, toDate, toDate, 1000, 10000, 4.0),
  createData('PHVC000003', 'Gingerbread', 2, toDate, toDate, 1000, 10000, 3.9),
  createData('PHVC000003', 'Honeycomb', 1, toDate, toDate, 1000, 10000, 6.5),
  createData('PHVC000003', 'Ice cream sandwich', 2, toDate, toDate, 1000, 10000, 4.3),
  createData('PHVC000003', 'Jelly Bean', 1, toDate, toDate, 1000, 10000, 0.0),
  createData('PHVC000003', 'KitKat', 2, toDate, toDate, 1000, 10000, 7.0),
  createData('PHVC000003', 'Lollipop', 1, toDate, toDate, 1000, 10000, 0.0),
  createData('PHVC000003', 'Marshmallow', 1, toDate, toDate, 1000, 10000, 2.0),
  createData('PHVC000003', 'Nougat', 1, toDate, toDate, 1000, 10000, 37.0),
  createData('PHVC000003', 'Oreo', 1, toDate, toDate, 1000, 10000, 4.0),
];
const ListCodeVoucher = [
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, toDate, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
  CodeVoucher('PHVC000003', '', toDate, toDate, null, null, 1),
];

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
const listAddress = [
  { title: 'Hà Nội', id: 1 },
  { title: 'Hải Phòng', id: 2 },
  { title: 'Đà Nẵng', id: 3 },
  { title: 'Hồ Chi Minh', id: 4 }
];
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

const headCells = [
  { id: 'code', numeric: false, disablePadding: false, label: 'Mã đợt phát hành' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Tên đợt phát hành' },
  { id: 'type', numeric: true, disablePadding: false, label: 'Loại' },
  { id: 'fromdate', numeric: true, disablePadding: false, label: 'Ngày bắt đầu' },
  { id: 'todate', numeric: true, disablePadding: false, label: 'Ngày kết thúc' },
  { id: 'quantity', numeric: true, disablePadding: false, label: 'Số lượng' },
  { id: 'value', numeric: true, disablePadding: false, label: 'Giá trị' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Trạng thái' },
];
const headListCodeVoucherCells = [
  { id: 'code', numeric: false, disablePadding: false, label: 'Mã voucher' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Người mua' },
  { id: 'fromdate', numeric: true, disablePadding: false, label: 'Ngày bắt đầu' },
  { id: 'todate', numeric: true, disablePadding: false, label: 'Ngày kết thúc' },
  { id: 'dateUsing', numeric: true, disablePadding: false, label: 'Ngày sử dụng' },
  { id: 'value', numeric: true, disablePadding: false, label: 'Giá bán' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Trạng thái' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, data } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
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

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Chiến dịch
          </Typography>
        )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  mt3: {
    marginTop: '3rem',
  },
  mb3: {
    marginBottom: '3rem',
  },
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix=""
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default function Campaign() {
  const classes = useStyles();
  const theme = useTheme();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('type');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [value, setValueTab] = React.useState(0);
  const [status, setStatus] = React.useState("1");
  const [system, setSystem] = React.useState("-1");
  const [customer, setCustomer] = React.useState("-1");
  const [optionSelectSystem, setOptionSelectSystem] = React.useState(true);
  const [optionSelectCustomer, setOptionSelectCustomer] = React.useState(true);
  const [startDate, setSelectedStartDate] = React.useState(new Date());
  const [endDate, setSelectedEndDate] = React.useState(new Date());
  const [price, setPriceValues] = React.useState({ textmask: ',', numberformat: '' });
  const [values, setValues] = React.useState({ textmask: ',', numberformat: '' });
  const [openDialogConfirmSave, setOpenDialogConfirmSave] = React.useState(false);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {

    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };

  const handleChangeTab = (event, newValue) => {
    if (newValue === 2) {
      setOpenDialogConfirmSave(true);
    }
    setValueTab(newValue);
  };

  const handleChangeTabIndex = (index) => {
    if (index === 2) {
      alert(index);
      // setOpenDialogConfirmSave(true);
    }
    setValueTab(index);
  };

  const handleSaveCampaingn = () => {
    setOpenDialogConfirmSave(false);
  };

  const handleCloseDialogConfirmSave = () => {
    setOpenDialogConfirmSave(false);
  };

  const handlePriceChange = (event) => {
    setPriceValues({
      ...price,
      [event.target.name]: event.target.value,
    });
  };
  const handleValueChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleSystemChange = (event) => {
    setSystem(event.target.value);
    if (system === -1) {
      setOptionSelectSystem(false);
    } else {
      setOptionSelectSystem(true);
    }
  };
  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
    if (customer === -1) {
      setOptionSelectCustomer(false);
    } else {
      setOptionSelectCustomer(true);
    }
  };
  //Button mở form thêm mới chiến dịch
  const handleClickOpenFromCreate = () => {
    setOpen(true);
  };

  //Button đóng form thêm mới chiến dịch
  const handleCloseFromCreate = () => {
    setOpen(false);
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <GridItem md="12" style={{ "margin-top": "10px" }}>
            <Button variant="contained" color="primary" onClick={handleClickOpenFromCreate}>
              Thêm đợt phát hành mới
            </Button>
          </GridItem>
        </TableContainer>
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
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

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
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                      </TableCell>
                      <TableCell align="left">{row.code}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right"><Moment format="DD/MM/YYYY">{row.frodate}</Moment></TableCell>
                      <TableCell align="right"><Moment format="DD/MM/YYYY">{row.todate}</Moment></TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Tắt padding cho bảng"
      />
      <Dialog
        maxWidth={"lg"}
        open={open}
        onClose={handleCloseFromCreate}
        aria-labelledby="dialog-title"
      >
        <DialogTitle id="dialog-title">{"Thêm đợt phát hành mới"}</DialogTitle>
        <DialogContent style={{ 'min-width': '970px', 'min-height': '500px' }}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Thông tin" {...a11yProps(0)} />
              <Tab label="Áp dụng" {...a11yProps(1)} />
              <Tab label="Danh sách voucher" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeTabIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Tooltip title="Mã đợt phát hành là thông tin duy nhất" placement="top">
                      <TextField
                        id="code"
                        label="Mã đợt phát hành"
                        placeholder="Mã tự động"
                        multiline
                        fullWidth
                        variant="outlined"
                        className={classes.mb3}
                        onInput={(e) => { e.target.value = e.target.value.slice(0, 12) }}
                      />
                    </Tooltip>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Tooltip title="Hóa đơn này có chứa các hàng hóa được thanh toán bằng voucher" placement="top">
                      <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        filterSelectedOptions
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Hàng/nhóm hàng mua"
                            placeholder="Chọn"
                            fullWidth
                            className={classes.mb3}
                          />
                        )}
                      />
                    </Tooltip>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="name"
                      label="Tên đợt phát hành"
                      placeholder="Dữ liệu bắt buộc"
                      multiline
                      fullWidth
                      variant="outlined"
                      className={classes.mb3}
                      onInput={(e) => { e.target.value = e.target.value.slice(0, 100) }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Tooltip title="Tổng tiền hàng tối thiểu để có thể thanh toán bằng voucher" placement="top">
                      <TextField
                        id="price"
                        label="Tổng tiền mua"
                        placeholder="Dữ liệu bắt buộc"
                        multiline
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        className={classes.mb3}
                        onChange={handlePriceChange}
                        value={value.numberformat}
                        onInput={(e) => {
                          e.target.value = e.target.value.slice(0, 11)
                        }}
                        InputProps={{
                          inputComponent: NumberFormatCustom,
                        }}
                      />
                    </Tooltip>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Tooltip title="Giá trị của voucher khi khách hàng thanh toán lúc mua hàng" placement="top">
                      <TextField
                        id="value"
                        label="Mệnh giá"
                        placeholder="Dữ liệu bắt buộc"
                        multiline
                        fullWidth
                        variant="outlined"
                        autoComplete="off"
                        className={classes.mb3}
                        onChange={handleValueChange}
                        value={value.numberformat}
                        onInput={(e) => {
                          e.target.value = e.target.value.slice(0, 11)
                        }}
                        InputProps={{
                          inputComponent: NumberFormatCustom,
                        }}
                      />
                    </Tooltip>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="note"
                      label="Ghi chú"
                      multiline
                      fullWidth
                      variant="outlined"
                      className={classes.mb3}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Tình trạng</FormLabel>
                      <RadioGroup row aria-label="status" name="status" value={status} onChange={handleStatusChange}>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="Kích hoạt" />
                        <FormControlLabel value="0" control={<Radio color="primary" />} label="Chưa áp dụng" />
                      </RadioGroup>
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </form>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <GridContainer>
                  <GridItem md={12}>
                    <Typography variant="h6" gutterBottom>Thời gian áp dụng</Typography>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      label="Ngày bắt đầu"
                      value={startDate}
                      onChange={handleStartDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      label="Ngày kết thúc"
                      value={endDate}
                      onChange={handleEndDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </MuiPickersUtilsProvider>
              <GridContainer>
                <GridItem md={12}>
                  <Typography variant="h6" gutterBottom>Phạm vi áp dụng</Typography>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <RadioGroup row aria-label="system" name="system" value={system} onChange={handleSystemChange}>
                    <GridContainer md={12}>
                      <GridItem md={12}>
                        <FormControlLabel value="-1" control={<Radio color="primary" />} label="Toàn hệ thống" />
                      </GridItem>
                      <GridItem md={4}>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="Chi nhánh" />
                      </GridItem>
                      <GridItem md={8}>
                        <Tooltip title="Hóa đơn này có chứa các hàng hóa được thanh toán bằng voucher" placement="top">
                          <Autocomplete
                            multiple
                            options={listAddress}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            disabled={optionSelectSystem}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="outlined"
                                label="Chi nhánh áp dụng"
                                placeholder="Chọn"
                                fullWidth
                              />
                            )}
                          />
                        </Tooltip>
                      </GridItem>
                    </GridContainer>
                  </RadioGroup>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <RadioGroup row aria-label="system" name="system" value={customer} onChange={handleCustomerChange}>
                    <GridContainer md={12}>
                      <GridItem md={12}>
                        <FormControlLabel value="-1" control={<Radio color="primary" />} label="Toàn bộ khách hàng" />
                      </GridItem>
                      <GridItem md={4}>
                        <FormControlLabel value="1" control={<Radio color="primary" />} label="Nhóm khách hàng" />
                      </GridItem>
                      <GridItem md={8}>
                        <Tooltip title="Nhóm khách hàng được thanh toán bằng voucher này" placement="top">
                          <Autocomplete
                            multiple
                            options={listAddress}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            disabled={optionSelectCustomer}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="outlined"
                                label="Nhóm khách hàng"
                                placeholder="Chọn"
                                fullWidth
                              />
                            )}
                          />
                        </Tooltip>
                      </GridItem>
                    </GridContainer>
                  </RadioGroup>
                </GridItem>
              </GridContainer>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Bạn cần phải lưu đợt phát hành voucher trước khi tạo danh sách voucher
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
                    rowCount={ListCodeVoucher.length}
                    data={headListCodeVoucherCells}
                  />
                  <TableBody>
                    {stableSort(ListCodeVoucher, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.code);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.code)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.code}
                            selected={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                            </TableCell>
                            <TableCell align="left">{row.code}</TableCell>
                            <TableCell align="left">{row.userBuy}</TableCell>
                            <TableCell align="right"><Moment format="DD/MM/YYYY">{row.frodate}</Moment></TableCell>
                            <TableCell align="right"><Moment format="DD/MM/YYYY">{row.todate}</Moment></TableCell>
                            <TableCell align="right">{row.dateUsing}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
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
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100, 1000]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TabPanel>
          </SwipeableViews>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseFromCreate} color="primary" autoFocus startIcon={<SaveIcon />}>
            Lưu (F9)
          </Button>
          <Button onClick={handleCloseFromCreate} color="primary" autoFocus>
            Đóng
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDialogConfirmSave}
        onClose={handleCloseDialogConfirmSave}
      >
        <DialogTitle>{"Thêm đợt phát hành voucher"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn cần phải lưu đợt phát hành voucher trước khi tạo danh sách voucher. Bạn có muốn lưu không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveCampaingn} color="primary" variant="contained" startIcon={<SaveIcon />}>
            Đồng ý
          </Button>
          <Button onClick={handleCloseDialogConfirmSave} color="primary" autoFocus>
            Bỏ qua
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
