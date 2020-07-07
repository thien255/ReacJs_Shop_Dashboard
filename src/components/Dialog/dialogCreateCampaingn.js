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
import AccountCircle from '@material-ui/icons/AccountCircle';
// core components
import CustomTable from 'components/Table/Table';
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
    { title: 'Fight Club', year: 1999 }
  ];
  const listAddress = [
    { title: 'Hà Nội', id: 1 },
    { title: 'Hải Phòng', id: 2 },
    { title: 'Đà Nẵng', id: 3 },
    { title: 'Hồ Chi Minh', id: 4 }
  ];
export default function dialogCreateCampaingn(props) {
    const { open } = props;
    const theme = useTheme();
    const classes = useStyles();
    const [value, setValueTab] = React.useState(0);
    const [status, setStatus] = React.useState("1");
    const [system, setSystem] = React.useState("-1");
    const [customer, setCustomer] = React.useState("-1");
    const [optionSelectSystem, setOptionSelectSystem] = React.useState(true);
    const [optionSelectCustomer, setOptionSelectCustomer] = React.useState(true);
    const [startDate, setSelectedStartDate] = React.useState(new Date());
    const [endDate, setSelectedEndDate] = React.useState(new Date());
    const [openDialogConfirmSave,setOpenDialogConfirmSave]= React.useState(false);
    const [price,setPriceValues] = React.useState(0);
    const [values,setValues] = React.useState(0);
  
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


    //Button đóng form thêm mới chiến dịch
    const handleCloseFromCreate = () => {
        open = false;
    };
    
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
    return (
        <div>
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
                          
                        </TabPanel>
                    </SwipeableViews>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleCloseFromCreate} color="primary" autoFocus startIcon={<SaveIcon />}>Lưu (F9)</Button>
                    <Button onClick={handleCloseFromCreate} color="primary" autoFocus>Đóng</Button>
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

dialogCreateCampaingn.propTypes = {
    open: true
};
