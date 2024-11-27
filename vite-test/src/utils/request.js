import axios from "axios";

const request = (config) => {
    const controller = new AbortController();
    console.log("controller", controller);
    // controller.abort()  取消请求
    const requestConfig = {
        method: "post",
        headers: {
            "X-Access-Token": "Wo2wZ8fvRJwACwNu_t3ntoFwmVf1tKMj",
            "X-Channel": 1000,
            "X-User-Id": 3100000001058742,
            "X-User-IdpId": 3100000001058742
        },
        timeout: 10000,
        data: {},
        signal: controller.signal,
        ...config
    };
    axios.interceptors.request.use(
        function (config) {
            // Do something before request is sent

            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger

            response = {
                ...response,
                status: 201
            };
            // Do something with response data
            return response;
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        }
    );
    return axios(requestConfig);
};

export { request };
