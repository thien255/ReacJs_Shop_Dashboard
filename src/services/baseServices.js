import React from 'react';
import axios from 'axios';
export default class baseServices extends React.Component {
    post(url, data) {
        axios.post(url, data).then(res => {
            return res;
        })
    }
    get(url, data) {
        axios.get(url, data).then(res => {
            return res;
        })
    }
    delete(url, data) {
        axios.delete(url).then(res => {
            return res;
        })
    }
}