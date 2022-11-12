// ++++++++  Tron Testnet

const TronWeb = require("tronweb");
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.shasta.trongrid.io");
const solidityNode = new HttpProvider("https://api.shasta.trongrid.io");
const eventServer = new HttpProvider("https://api.shasta.trongrid.io");
// const privateKey = process.env.REACT_APP_Privatekey;
const privateKey = "89b9546100b202ef63760f391c3877c987864e9dc21c666918d80a0f738c57a6";

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

const USDT_TRON_Contract = "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs"; //testnet USDT contract
const USDFX_TRON_Contract = "TNu83TBy1D8LHK9ug23D2hTCEGadNxqkGj";
const USDFX_TRON_WALLET_ADDRESS = "TWw1EcAWZwMzzqq8VqqCQdasDpxumouWyH";

//++++++++  Tron Mainnet

// const TronWeb = require('tronweb');
// const HttpProvider = TronWeb.providers.HttpProvider;
// const fullNode = new HttpProvider("https://api.trongrid.io");
// const solidityNode = new HttpProvider("https://api.trongrid.io");
// const eventServer = new HttpProvider("https://api.trongrid.io");
// const privateKey = process.env.REACT_APP_Privatekey;;
// const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
// const USDT_TRON_Contract = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //mainnet USDT contract

// const USDFX_TRON_Contract = "TW3ALH6Px487eB6PSJBegKxmTPMMvWX955";
// const USDFX_TRON_WALLET_ADDRESS = "TWw1EcAWZwMzzqq8VqqCQdasDpxumouWyH";

exports.transferListener = async () => {
  console.log("....... watching to transferUSDFX .......");

  const contract = await tronWeb.contract().at(USDT_TRON_Contract);

  // console.log(tronWeb.address.toHex(USDFX_TRON_WALLET_ADDRESS));

  (await contract) &&
    contract.Transfer().watch((err, event) => {
      if (err) {
        return console.error('Error with "Message" event:', err);
      }

      const RECEVED_ADDRESS = tronWeb.address.fromHex(event.result.to);
      const BUYER_ADDRESS = tronWeb.address.fromHex(event.result.from);
      const amount = event.result.value;

      if (RECEVED_ADDRESS == USDFX_TRON_WALLET_ADDRESS) {
        console.log("|----- USDT send to Admin successfully -----|");
        transferUSDFX(BUYER_ADDRESS, amount);
      }
    });
};

const transferUSDFX = async (BUYER_ADDRESS, amount) => {
  const constract_usdfx = await tronWeb.contract().at(USDFX_TRON_Contract);
  await constract_usdfx.methods
    .transferUSDFX(BUYER_ADDRESS, amount / 1000000)
    .send();
  console.log("|----- USDFX send to User successfully -----|");
};
