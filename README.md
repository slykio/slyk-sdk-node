<div>
	<br>
	<br>
	<p align="center"><a href="https://slyk.io/"><img width="150" src="docs/media/slyk.png" alt="Slyk"></a></p>
	<br>
	<p align="center"><a href="https://slyk.io/"><img width="50" src="docs/media/logo.png" alt="Slyk"></a> - Node.js SDK </p>
	<br>
	<br>
</div>

![Travis (.org)](https://img.shields.io/travis/slykio/slyk-sdk-node)
[![Coverage Status](https://coveralls.io/repos/github/slykio/slyk-sdk-node/badge.svg?branch=master)](https://coveralls.io/github/slykio/slyk-sdk-node?branch=master)

## Table of contents
- [Install](#install)
- [Usage](#usage)
- [Available methods](docs/methods.md)

This library allows you to quickly integrate **Slyk** with your Node.js application.

For additional information and documentation please visit our [developers page](https://developers.slyk.io).

## Install

```
$ yarn add @slyk/slyk-sdk-node
```

The `slyk-sdk-node` requires node **v8.6.0** or higher.

## Usage

```js
const slykSDK = require('@slyk/slyk-sdk-node');

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
