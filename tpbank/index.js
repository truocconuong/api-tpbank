const axios = require("axios");

async function handleLogin(username, password, deviceId) {
  return new Promise((resolve, reject) => {
    const axios = require("axios");
    let data = JSON.stringify({
      username: username,
      password: password,
      step_2FA: "VERIFY",
      deviceId: deviceId,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://ebank.tpb.vn/gateway/api/auth/login",
      headers: {
        APP_VERSION: "2023.12.08",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "vi",
        Authorization: "Bearer",
        Connection: "keep-alive",
        "Content-Type": "application/json",
        DEVICE_ID: deviceId,
        DEVICE_NAME: "Chrome",
        Origin: "https://ebank.tpb.vn",
        PLATFORM_NAME: "WEB",
        PLATFORM_VERSION: "120",
        Referer: "https://ebank.tpb.vn/retail/vX/",
        SOURCE_APP: "HYDRO",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        throw error;
      });
  });
}
async function getHistories(token, accountId, deviceId) {
  return new Promise((resolve, reject) => {
    const axios = require("axios");
    let data = JSON.stringify({
      pageNumber: 1,
      pageSize: 400,
      accountNo: accountId,
      currency: "VND",
      maxAcentrysrno: "",
      fromDate: "20231002",
      toDate: "20240102",
      keyword: "",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://ebank.tpb.vn/gateway/api/smart-search-presentation-service/v2/account-transactions/find",
      headers: {
        APP_VERSION: "2023.12.08",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "vi,en-US;q=0.9,en;q=0.8",
        Authorization: `Bearer ${token}`,
        Connection: "keep-alive",
        "Content-Type": "application/json",
        DEVICE_ID: deviceId,
        DEVICE_NAME: "Chrome",
        Origin: "https://ebank.tpb.vn",
        PLATFORM_NAME: "WEB",
        PLATFORM_VERSION: "120",
        SOURCE_APP: "HYDRO",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function getBankAccount(token, deviceId) {
  return new Promise((resolve, reject) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://ebank.tpb.vn/gateway/api/common-presentation-service/v1/bank-accounts?function=inquiry",
      headers: {
        APP_VERSION: "2023.12.08",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "vi",
        Authorization: `Bearer ${token}`,
        Connection: "keep-alive",
        "Content-Type": "application/json",
        DEVICE_ID: deviceId,
        DEVICE_NAME: "Chrome",
        PLATFORM_NAME: "WEB",
        PLATFORM_VERSION: "120",
        SOURCE_APP: "HYDRO",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
      },
    };

    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// async function run() {
//   const infoLogin = await handleLogin(info.username, info.password);
//   console.log(infoLogin);
//   const token = infoLogin.access_token;
//   const histories = await handleGetHistory(token);
//   console.log(histories);
// }

// run();

module.exports = { handleLogin, getBankAccount ,getHistories };
