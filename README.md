<div align="center">
	<br>
	<br>
	<img width="150" src="docs/media/slyk.png" alt="Slyk">
	<br>
	<br>
	<p align="center"><img width="50" src="docs/media/logo.png" alt="Slyk"> - Node.js SDK </p>
	<br>
	<br>
</div>

## Table of contents
- [Install](#install)
- [Usage](#usage)
- [Available methods](docs/methods.md)

## Install

```
$ yarn add @slyk/slyk-sdk-node
```

> The `slyk-sdk-node` requires node **v8.6.0** or higher.

## Usage

```js
const slykSDK = require('slyk-sdk-node');

(async () => {
  const slyk = slykSDK({ apikey: 'foobar' });
  const wallet = await slyk.wallet.get('3778f28c-5a02-472f-b428-b7b40acf8055');
  const balance = await wallet.getBalance({ filter: { assetCode: 'in:btc,usd' } });

  console.log(balance);
})();
```

### Result

```json
[
  { "amount": "0.50000000", "assetCode": "btc" }
  { "amount": "25.50000000", "assetCode": "usd" },
]
```
