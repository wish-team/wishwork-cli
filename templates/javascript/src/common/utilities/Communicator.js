import axios from 'axios';
import Environment from "../../../Environment";

const address = Environment.ADDRESS;

export class Communicator {

    static postRequest(method, url, callBackSuccess, callBackFail, dataSet, contentType = "application/json") {
        let fullPathUrl = address + url;
        let configs = {
            method: method,
            headers: {'Content-Type': contentType},
            url: fullPathUrl
        };
        if (dataSet !== null) {
            configs.data = dataSet
        }
        console.log('CONFIGS: ', configs);
        axios(configs)
            .then(response => this.requestCallBack(callBackSuccess, response))
            .catch(err => this.requestFailure(callBackFail, err))
    }

    static requestCallBack(callBack, response) {
        callBack()
    }

    static requestFailure(callBack, err) {
        callBack()
    }
}
