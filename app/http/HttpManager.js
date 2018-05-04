import HttpConfig from "../http/HttpConfig";

class HttpManager {
    static post(paramsMap) {
        let url = '';
        let data = '';
        for (var [key, value] of paramsMap) {
            if (key == 'ac') {
                url = HttpConfig.URL_SERVICE + '/' + value
            } else {
                data = data + key + '=' + value + '&'
            }
        }
        data = data.substring(0, data.length - 1);
        return new Promise(function (successCall, errorCall) {
            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: data,
            }).then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    errorCall(response.error);
                }
            })
                .then((responseData) => {
                    successCall(responseData);
                }).catch((err) => {
                errorCall(err);
            });
        });
    }
}

export default HttpManager;