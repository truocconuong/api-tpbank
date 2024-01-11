const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getDeviceId } = require("./utils");
const { handleLogin, getBankAccount, getHistories } = require("./tpbank/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const deviceId = getDeviceId();
    if (deviceId) this.deviceId = deviceId;
    const login = await handleLogin(username, password, deviceId);
    return res.json({ access_token: login.access_token });
  } catch (error) {
    res.json({error : error.data})
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const deviceId = getDeviceId();
    if (deviceId) this.deviceId = deviceId;
    const login = await handleLogin(username, password, deviceId);
    return res.json({ access_token: login.access_token });
  } catch (error) {
    res.json({ error: error.response.data });
  }
});

app.post("/bank-account", async (req, res) => {
  try {
    const { accessToken } = req.body;
    const accounts = (await getBankAccount(accessToken, this.deviceId)) || [];
    return res.json({ info: accounts[0] });
  } catch (error) {
    res.json({ error: error.data });
  }
});

app.post("/histories", async (req, res) => {
  try {
    const { accessToken } = req.body;
    const accounts = (await getBankAccount(accessToken, this.deviceId)) || [];
    const accountId = accounts[0].BBAN;
    const histories = await getHistories(accessToken, accountId, this.deviceId);
    return res.json({ info: histories });
  } catch (error) {
    res.json({ error: error.data });
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}!`);
});
