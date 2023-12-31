import axios from "axios";

//apply base url for axios
const REACT_APP_APP_URL = "http://ankursingh.xyz/api/";

const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  console.log('====================================',url);
  console.log(config);
  console.log('====================================');
  const res = await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data).catch((er)=>console.log('Error api eexcuteee=',er))
    console.log('====================================');
    console.log("api_helper>>>res>>>>",res);
    console.log('====================================');
    return res
}
