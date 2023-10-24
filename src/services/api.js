import md5 from "md5";
import axios from "axios";

const publicKey = "82e442b82dcca6a7a59d97257b392f85";
const priveteKey = "c218a1d1929ec6dd1affc2889443736a36269bb6";

const time = Number(new Date());

const hash = md5(time + priveteKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: time,
    apikey: publicKey,
    hash: hash,
  },
});

export default api;
