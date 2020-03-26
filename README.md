<div>
	<br>
	<br>
	<p align="center"><a href="https://slyk.io/"><img width="150" src="docs/media/slyk.png" alt="Slyk"></a></p>
	<br>
	<p align="center"><a href="https://slyk.io/"><img width="50" src="docs/media/logo.png" alt="Slyk"></a> - Node.js SDK </p>
	<br>
	<p align="center">
		<img alt="node" src="https://img.shields.io/node/v/@slyk/slyk-sdk-node">
		<img alt="NPM" src="https://img.shields.io/npm/l/@slyk/slyk-sdk-node">
		<img alt="Travis (.org) branch" src="https://img.shields.io/travis/slykio/slyk-sdk-node/master">
		<img alt="Coveralls github" src="https://img.shields.io/coveralls/github/slykio/slyk-sdk-node?branch=master">
  </p>
</div>

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

The `slyk-sdk-node` requires node **v4** or higher.

## Usage

### Example

```js
const slykSDK = require('@slyk/slyk-sdk-node');

(function() {
  const slyk = slykSDK({ apikey: 'api-key' });

  slyk.wallet.get('8399340e-8c1f-4c4f-94e0-81a5ee0378e1')
    .then(function(wallet) {
      wallet.getBalance({ filter: { assetCode: 'in:btc,usd' } })
        .then(function(balance) {
          console.log(balance);
        });
    });
})();
```

### ES8 Example

```js
import slykSDK from '@slyk/slyk-sdk-node';

(async () => {
  const slyk = slykSDK({ apikey: 'api-key' });
  const wallet = await slyk.wallet.get('8399340e-8c1f-4c4f-94e0-81a5ee0378e1');
  const balance = await wallet.getBalance({ filter: { assetCode: 'in:btc,usd' } });

  console.log(balance);
})();
```

### Result

```json
[
  { "amount": "0.50000000", "assetCode": "btc" },
  { "amount": "25.50000000", "assetCode": "usd" }
]
```
