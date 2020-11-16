# Slyk - Node.js SDK

## Available methods

- [address](#address)
  - [`address.create`](#addresscreate)
  - [`address.get`](#addressget)
  - [`address.list`](#addresslist)
- [auth](#auth)
  - [`auth.login`](#authlogin)
  - [`auth.logout`](#authlogout)
  - [`auth.refresh`](#authrefresh)
  - [`auth.validate`](#authvalidate)
- [asset](#asset)
  - [`asset.create`](#assetcreate)
  - [`asset.get`](#assetget)
  - [`asset.list`](#assetlist)
  - [`asset.patch`](#assetpatch)
- [connection](#connection)
  - [`connection.create`](#connectioncreate)
  - [`connection.get`](#connectionget)
  - [`connection.list`](#connectionlist)
  - [`connection.patch`](#connectionpatch)
- [invite](#invite)
  - [`invite.cancel`](#invitecancel)
  - [`invite.create`](#invitecreate)
  - [`invite.get`](#inviteget)
  - [`invite.list`](#invitelist)
  - [`invite.send`](#invitesend)
  - [`invite.validate`](#invitevalidate)
- [movement](#movement)
  - [`movement.get`](#movementget)
  - [`movement.list`](#movementlist)
- [paymentMethod](#paymentmethod)
  - [`paymentMethod.get`](#paymentmethodget)
  - [`paymentMethod.list`](#paymentmethodlist)
- [rate](#rate)
  - [`rate.create`](#ratecreate)
  - [`rate.delete`](#ratedelete)
  - [`rate.get`](#rateget)
  - [`rate.list`](#ratelist)
  - [`rate.patch`](#ratepatch)
- [transaction](#transaction)
  - [`transaction.approve`](#transactionapprove)
  - [`transaction.confirm`](#transactionconfirm)
  - [`transaction.deposit`](#transactiondeposit)
  - [`transaction.fail`](#transactionfail)
  - [`transaction.get`](#transactionget)
  - [`transaction.list`](#transactionlist)
  - [`transaction.pay`](#transactionpay)
  - [`transaction.reject`](#transactionreject)
  - [`transaction.transfer`](#transactiontransfer)
  - [`transaction.withdrawal`](#transactionwithdrawal)
- [user](#user)
  - [`user.approve`](#userapprove)
  - [`user.block`](#userblock)
  - [`user.changePassword`](#userchangepassword)
  - [`user.create`](#usercreate)
  - [`user.get`](#userget)
  - [`user.list`](#userlist)
  - [`user.patch`](#userpatch)
  - [`user.unblock`](#userunblock)
- [wallet](#wallet)
  - [`wallet.activity`](#walletactivity)
  - [`wallet.balance`](#walletbalance)
  - [`wallet.create`](#walletcreate)
  - [`wallet.get`](#walletget)
  - [`wallet.globalActivity`](#walletglobalactivity)
  - [`wallet.globalBalance`](#walletglobalbalance)
  - [`wallet.list`](#walletlist)
  - [`wallet.movements`](#walletmovements)
  - [`wallet.patch`](#walletpatch)
  - [`wallet.transactions`](#wallettransactions)

## address

The result of each one of the following `address` methods return one or an array of `Address` objects that include the following methods:
- `getAsset`: Returns the `asset` of the `address` `assetCode`.
- `getData`: Returns the `address` details.
- `getWallet`: Returns the `wallet` of the `address` `walletId` if set.

### `address.create`

Creates a new `address`.

**Example:**

#### Request

```js
await slyk.address.create({
  address: 'xyzzy',
  assetCode: 'foo',
  walletId: '9afa8a2d-023a-4040-b591-c03077f43d23'
});
```

#### Response

```json
{
  "address": "xyzzy",
  "assetCode": "foo",
  "customData": {},
  "createdAt": "2019-03-20T14:30:37.483Z",
  "metadata": {},
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "walletId": "9afa8a2d-023a-4040-b591-c03077f43d23"
}
```

### `address.get`

Retrieves the `address` of the given `address`.

**Example:**

#### Request

```js
await slyk.address.get('xyzzy');
```

#### Response

```json
{
  "address": "xyzzy",
  "assetCode": "foo",
  "customData": {},
  "createdAt": "2019-03-20T14:30:37.483Z",
  "metadata": {},
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "walletId": "9afa8a2d-023a-4040-b591-c03077f43d23"
}
```

### `address.list`

Retrieves a list of `addresses`.

**Example:**

#### Request

```js
await slyk.address.list({
  page: { size: 2 },
  sort: [{ name: 'createdAt'}],
  filter: { walletId: '9afa8a2d-023a-4040-b591-c03077f43d23' }
});
```

#### Response

```json
{
  "results": [{
    "address": "xyzzy",
    "assetCode": "foo",
    "customData": {},
    "createdAt": "2019-03-20T14:30:37.483Z",
    "metadata": {},
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "walletId": "9afa8a2d-023a-4040-b591-c03077f43d23"
  },
  {
    "address": "garply",
    "assetCode": "foo",
    "customData": {},
    "createdAt": "2019-03-20T14:30:37.483Z",
    "metadata": {},
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "walletId": "9afa8a2d-023a-4040-b591-c03077f43d23"
  }],
  "total": 32
}
```

## auth

### `auth.login`

Issues `auth` tokens and returns one `Auth` object that include the following methods:
- `getData`: Returns the `auth` details.
- `refresh`: Refreshes the current `auth` token.
- `logout`: Revokes the current `auth` `refreshToken`.

**Example:**

#### Request

```js
await slyk.auth.login({ email: 'foo@bar.com', password: 'Password123' });
```

#### Response

```json
{
  "refreshToken": "123",
  "roles": ["user"],
  "token": "456",
}
```

### `auth.logout`

Revokes the `auth` `refreshToken`.

**Example:**

#### Request

```js
await slyk.auth.logout({ refreshToken: '123' });
```

#### Response

```json
true
```

### `auth.refresh`

Refreshes the `auth` tokens and returns one `Auth` object that include the following methods:
- `getData`: Returns the `auth` details.
- `refresh`: Refreshes the current `auth` token.
- `logout`: Revokes the current `auth` `refreshToken`.

**Example:**

#### Request

```js
await slyk.auth.refresh({ refreshToken: '123' });
```

#### Response

```json
{
  "refreshToken": "789",
  "token": "012"
}
```

### `auth.validate`

Validate the `auth` `token`.

**Example:**

#### Request

```js
await slyk.auth.validate({ token: '456' });
```

#### Response

```json
true
```

## asset

The result of each one of the following `asset` methods return one or an array of `Asset` objects that include the following methods:
- `getConnection`: Returns the `connection` of the `asset` `connectionId` if set.
- `getData`: Returns the `asset` details.
- `patch`: Patches the `asset`.

### `asset.create`

Creates a new `asset`.

**Example:**

#### Request

```js
await slyk.asset.create({
  code: 'foo',
  name: 'foobar',
  symbol: 'ƒ'
});
```

#### Response

```json
{
  "code": "foo",
  "connectionId": null,
  "contract": {},
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "decimalPlaces": 8,
  "enabled": false,
  "logoUrl": null,
  "metadata": {},
  "name": "foobar",
  "symbol": "ƒ",
  "system": false,
  "type": "custom",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `asset.get`

Retrieves the `asset` of the given `code`.

**Example:**

#### Request

```js
await slyk.asset.get('foo');
```

#### Response

```json
{
  "code": "foo",
  "connectionId": null,
  "contract": {},
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "decimalPlaces": 8,
  "enabled": false,
  "logoUrl": null,
  "metadata": {},
  "name": "foobar",
  "symbol": "ƒ",
  "system": false,
  "type": "custom",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `asset.list`

Retrieves a list of `assets`.

**Example:**

#### Request

```js
await slyk.asset.list({
  page: { size: 2 },
  sort: [{ direction: 'desc', name: 'code' }],
  filter: { name: 'foo' }
});
```

#### Response

```json
{
  "results": [{
    "code": "bar",
    "connectionId": null,
    "contract": {},
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "decimalPlaces": 8,
    "enabled": false,
    "logoUrl": null,
    "metadata": {},
    "name": "foobar",
    "symbol": "Ɓ",
    "system": false,
    "type": "custom",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  },
  {
    "code": "biz",
    "connectionId": null,
    "contract": {},
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "decimalPlaces": 8,
    "enabled": false,
    "logoUrl": null,
    "metadata": {},
    "name": "foobiz",
    "symbol": "ƀ",
    "system": false,
    "type": "custom",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  }],
  "total": 32
}
```

### `asset.patch`

Modifies the details the `asset` of the given `code`.

**Example:**

#### Request

```js
await slyk.asset.patch('bar' { customData: { qux: 'quux' } });
```

#### Response

```json
{
  "code": "bar",
  "connectionId": null,
  "contract": {},
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "decimalPlaces": 8,
  "enabled": false,
  "logoUrl": null,
  "metadata": {},
  "name": "foobar",
  "symbol": "Ɓ",
  "system": false,
  "type": "custom",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

## connection

The result of each one of the following `connection` methods return one or an array of `Connection` objects that include the following methods:
- `getData`: Returns the `connection` details.
- `patch`: Patches the `connection`.

### `connection.create`

Creates a new `connection`.

**Example:**

#### Request

```js
await slyk.connection.create({ name: 'foobar' });
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "driver": null,
  "id": "93a1b4ef-ee6b-43b4-9546-cfa7aed80bc1",
  "name": "foobar",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "uri": null
}
```

### `connection.get`

Retrieves the `connection` of the given `id`.

**Example:**

#### Request

```js
await slyk.connection.get('93a1b4ef-ee6b-43b4-9546-cfa7aed80bc1');
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "driver": null,
  "id": "93a1b4ef-ee6b-43b4-9546-cfa7aed80bc1",
  "name": "foobar",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "uri": null
}
```

### `connection.list`

Retrieves a list of `connections`.

**Example:**

#### Request

```js
await slyk.connection.list({
  page: { size: 2 },
  filter: { name: 'foo' }
});
```

#### Response

```json
{
  "results": [{
    "createdAt": "2019-03-20T14:30:37.483Z",
    "driver": null,
    "id": "93a1b4ef-ee6b-43b4-9546-cfa7aed80bc1",
    "name": "foobar",
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "uri": null
  },
  {
    "createdAt": "2019-03-20T14:30:37.483Z",
    "driver": null,
    "id": "f1ee08ee-265b-472c-88cf-4bae10d0ff9b",
    "name": "foobiz",
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "uri": null
  }],
  "total": 4
}
```

### `connection.patch`

Modifies the details the `connection` of the given `id`.

**Example:**

#### Request

```js
await slyk.connection.patch('f1ee08ee-265b-472c-88cf-4bae10d0ff9b', { uri: 'waldo' });
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "driver": null,
  "id": "f1ee08ee-265b-472c-88cf-4bae10d0ff9b",
  "name": "foobiz",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "uri": "waldo"
}
```


## invite

The result of each one of the following `invite` methods return one or an array of `Invite` objects that include the following methods:
- `cancel`: Cancels the `invite`.
- `getData`: Returns the `invite` details.
- `getInvitedUser`: Returns the `user` of the `invite` `invitedUserId` if set.
- `getInviterUser`: Returns the `user` of the `invite` `inviterUserId` if set.
- `validate`: Validates the `invite`.

### `invite.cancel`

Cancels the `invite` of the given `code`.

**Example:**

#### Request

```js
await slyk.invite.cancel('bar');
```

#### Response

```json
true
```

### `invite.create`

Creates a new `invite`.

**Example:**

#### Request

```js
await slyk.invite.create({ email: 'foo@bar.com', inviterUserId: '26b7d8c3-d21c-420b-9820-9e8b822b90d2' });
```

#### Response

```json
{
  "code": "bar",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "expiredAt": "2019-04-20T14:30:37.483Z",
  "invitedEmail": "foo@bar.com",
  "invitedUserId": null,
  "inviterUserId": "26b7d8c3-d21c-420b-9820-9e8b822b90d2",
  "status": "pending",
  "updatedAt": "2019-03-20T14:30:37.483Z",
}
```

### `invite.get`

Retrieves the `invite` of the given `code`.

**Example:**

#### Request

```js
await slyk.invite.get('foo');
```

#### Response

```json
{
  "code": "bar",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "expiredAt": "2019-04-20T14:30:37.483Z",
  "invitedEmail": "foo@bar.com",
  "invitedUserId": null,
  "inviterUserId": "26b7d8c3-d21c-420b-9820-9e8b822b90d2",
  "status": "pending",
  "updatedAt": "2019-03-20T14:30:37.483Z",
}
```

### `invite.list`

Retrieves a list of `invites`.

**Example:**

#### Request

```js
await slyk.invite.list({
  page: { size: 2 },
  sort: [{ direction: 'desc', name: 'code' }],
  filter: { invitedEmail: 'foo@bar.com' }
});
```

#### Response

```json
{
  "results": [{
    "code": "bar",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "expiredAt": "2019-04-20T14:30:37.483Z",
    "invitedEmail": "foo@bar.com",
    "invitedUserId": null,
    "inviterUserId": "26b7d8c3-d21c-420b-9820-9e8b822b90d2",
    "status": "pending",
    "updatedAt": "2019-03-20T14:30:37.483Z",
  },
  {
    "code": "biz",
    "createdAt": "2019-01-20T14:30:37.483Z",
    "expiredAt": "2019-02-20T14:30:37.483Z",
    "invitedEmail": "foo@bar.com",
    "invitedUserId": null,
    "inviterUserId": "26b7d8c3-d21c-420b-9820-9e8b822b90d2",
    "status": "expired",
    "updatedAt": "2019-03-20T14:30:37.483Z",
  }],
  "total": 32
}
```

### `invite.send`

Creates and sends a one or multiples `invite`.

**Example:**

#### Request

```js
await slyk.invite.send({
  email: ['foo@bar.com', 'foo@biz.com'],
  inviterUserId: '26b7d8c3-d21c-420b-9820-9e8b822b90d2'
});
```

#### Response

```json
true
```

### `invite.validate`

Validates the `invite` with the given `code`.

**Example:**

#### Request

```js
await slyk.invite.validate('bar');
```

#### Response

```json
{ "referrerName": "corge" }
```

## movement

The result of each one of the following `movement` methods return one or an array of `Movement` objects that include the following methods:
- `getAsset`: Returns the `asset` of the `movement` `assetCode`.
- `getData`: Returns the `movement` details.
- `getWallet`: Returns the `wallet` of the `movement` `walletId`.
- `getTransaction`: Returns the `transaction` of the `movement` `transactionId`.

### `movement.get`

Returns the `movement` of the given `id`.

**Example:**

#### Request

```js
await slyk.movement.get('09900e6e-991e-43bd-9b82-0641f648c1d1');
```

#### Response

```json
{
  "amount": "4.50000000",
  "assetCode": "garply",
  "code": "deposit",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "id": "09900e6e-991e-43bd-9b82-0641f648c1d1",
  "transactionId": "43563311-ab16-4499-95d2-30d9e06ba159",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "walletId": "703d8c69-d8fc-4e02-a7c9-42340ef07727"
}
```

### `movement.list`

Retrieves a list of `movements`.

**Example:**

#### Request

```js
await slyk.movement.list({
  inlcude: 'transaction',
  page: { size: 2 },
  filter: { walletId: '703d8c69-d8fc-4e02-a7c9-42340ef07727' }
});
```

#### Response

```json
{
  "results": [{
    "amount": "4.50000000",
    "assetCode": "garply",
    "code": "deposit",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "id": "09900e6e-991e-43bd-9b82-0641f648c1d1",
    "transactionId": "43563311-ab16-4499-95d2-30d9e06ba159",
    "transaction": {
      "amount": "4.50000000",
      "assetCode": "garply",
      "code": "internal",
      "createdAt": "2019-03-20T14:30:37.483Z",
      "description": null,
      "destinationAddress": null,
      "destinationWalletId": "703d8c69-d8fc-4e02-a7c9-42340ef07727",
      "externalId": null,
      "id": "09900e6e-991e-43bd-9b82-0641f648c1d1",
      "metadata": {},
      "originAddress": null,
      "originWalletId": null,
      "status": "completed",
      "type": "deposit",
      "updatedAt": "2019-03-20T14:30:37.483Z"
    },
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "walletId": "703d8c69-d8fc-4e02-a7c9-42340ef07727"
  },
  {
    "amount": "-0.50000000",
    "assetCode": "garply",
    "code": "withdrawal",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "id": "b9fe22e5-2985-4814-8cb8-02e1cb581001",
    "transactionId": "a3293366-0d4c-4f83-8f71-84fe0b7dda99",
    "transaction": {
      "amount": "4.50000000",
      "assetCode": "garply",
      "code": "internal",
      "createdAt": "2019-03-20T14:30:37.483Z",
      "description": null,
      "destinationAddress": null,
      "destinationWalletId": null,
      "externalId": null,
      "id": "b9fe22e5-2985-4814-8cb8-02e1cb581001",
      "metadata": {},
      "originAddress": null,
      "originWalletId": "703d8c69-d8fc-4e02-a7c9-42340ef07727",
      "status": "completed",
      "type": "withdrawal",
      "updatedAt": "2019-03-20T14:30:37.483Z"
    },
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "walletId": "703d8c69-d8fc-4e02-a7c9-42340ef07727"
  }],
  "total": 4
}
```

## paymentMethod

### `paymentMethod.get`

Returns the `paymentMethod` of the given `slug`.
- `getData`: Returns the `paymentMethod` details.

**Example:**

#### Request

```js
await slyk.paymentMethod.get('paypal');
```

#### Response

```json
{
  "assets": ["garply"],
  "capabilities": ["deposit"],
  "createdAt": "2019-03-20T14:30:37.483Z",
  "enabled": true,
  "features": ["apm"],
  "metadata": {
    "clientId": "foobar",
    "secret": "12345*****"
  },
  "name": "Paypal",
  "slug": "paypal"
}
```

### `paymentMethod.list`

Retrieves a list of `paymentMethod`.

**Example:**

#### Request

```js
await slyk.movement.list({ filter: { enabled: true } });
```

#### Response

```json
{
  "results": [{
    "assets": ["garply"],
    "capabilities": ["deposit"],
    "createdAt": "2019-03-20T14:30:37.483Z",
    "enabled": true,
    "features": ["apm"],
    "metadata": {
      "clientId": "foobar",
      "secret": "12345*****"
    },
    "name": "Paypal",
    "slug": "paypal"
  },
  {
    "assets": ["garply"],
    "capabilities": ["deposit"],
    "createdAt": "2019-03-20T14:30:37.483Z",
    "enabled": true,
    "features": ["apm"],
    "metadata": {
      "apiPublishableKey": "foobiz",
      "apiSecretKey": "12345*****"
    },
    "name": "Stripe",
    "slug": "stripe"
  }],
  "total": 4
}
```

## rate

The result of each one of the following `rate` methods return one or an array of `Rate` objects that include the following methods:
- `getBaseAsset`: Returns the `asset` of the `rate` `baseAssetCode`.
- `getData`: Returns the `rate` details.
- `getQuoteAsset`: Returns the `asset` of the `rate` `quoteAssetCode`.
- `patch`: Patches the `rate`.

### `rate.create`

Creates a new `rate`.

**Example:**

#### Request

```js
await slyk.rate.create({
  baseAssetCode: 'garply',
  quoteAssetCode: 'corge',
  rate: '0.5'
});
```

#### Response

```json
{
  "baseAssetCode": "garply",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "metadata": {},
  "quoteAssetCode": "corge",
  "rate": "0.50000000",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `rate.delete`

Deletes the `rate` of the given `baseAssetCode` and `quoteAssetCode`.

**Example:**

#### Request

```js
await slyk.rate.delete('garply', 'corge');
```

#### Response

```json
true
```

### `rate.get`

Retrieves the `rate` of the given `baseAssetCode` and `quoteAssetCode`.

**Example:**

#### Request

```js
await slyk.rate.get('garply', 'corge');
```

#### Response

```json
{
  "baseAssetCode": "garply",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "metadata": {},
  "quoteAssetCode": "corge",
  "rate": "0.50000000",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `rate.list`

Retrieves a list of `rates`.

**Example:**

#### Request

```js
await slyk.asset.list({ filter: { assetCode: 'garply' } });
```

#### Response

```json
{
  "results": [{
    "baseAssetCode": "garply",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "metadata": {},
    "quoteAssetCode": "corge",
    "rate": "0.50000000",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  },
  {
    "baseAssetCode": "corge",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "metadata": {},
    "quoteAssetCode": "garply",
    "rate": "2.10000000",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  }],
  "total": 2
}
```

### `rate.patch`

Modifies the details the `rate` of the given `baseAssetCode` and `quoteAssetCode`.

**Example:**

#### Request

```js
await slyk.rate.patch('garply', 'corge', { rate: '0.6' });
```

#### Response

```json
{
  "baseAssetCode": "garply",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "metadata": {},
  "quoteAssetCode": "corge",
  "rate": "0.60000000",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

## transaction

The result of each one of the following `transaction` methods return one or an array of `Transaction` objects that include the following methods:
- `approve`: Approves the `transaction`.
- `confirm`: Confirms the `transaction`.
- `fail`: Fails the `transaction`.
- `getAsset`: Returns the `asset` of the `transaction` `assetCode`.
- `getData`: Returns the `transaction` details.
- `getDestinationAddress`: Returns the `address` of the `transaction` `destinationAddress` if set.
- `getDestinationWallet`: Returns the `wallet` of the `transaction` `destinationWalletId` if set.
- `getOriginAddress`: Returns the `address` of the `transaction` `originAddress` if set.
- `getOriginWallet`: Returns the `wallet` of the `transaction` `originWalletId` if set.
- `getMovements`: Returns the related `movements`.
- `reject`: Rejects the `transaction`.

### `transaction.approve`

Approves the `transaction` of the given `id`.

**Example:**

#### Request

```js
await slyk.transaction.approve('43563311-ab16-4499-95d2-30d9e06ba159');
```

#### Response

```json
{
  "amount": "5.00000000",
  "assetCode": "garply",
  "code": "internal",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": {},
  "originAddress": null,
  "originWalletId": null,
  "processedAt": null,
  "reference": null,
  "status": "processing",
  "type": "deposit",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `transaction.confirm`

Confirms the `transaction` of the given `id`.

**Example:**

#### Request

```js
await slyk.transaction.confirm('43563311-ab16-4499-95d2-30d9e06ba159');
```

#### Response

```json
{
  "amount": "5.00000000",
  "assetCode": "garply",
  "code": "internal",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": {},
  "originAddress": null,
  "originWalletId": null,
  "processedAt": null,
  "reference": null,
  "status": "completed",
  "type": "deposit",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `transaction.deposit`

Creates a new `deposit` `transaction`.

**Example:**

#### Request

```js
await slyk.transaction.deposit({
  amount: '5',
  assetCode: 'garply',
  code: 'internal',
  destinationWalletId: '1ef0452a-062c-45ce-aaf5-dd19e38c7711'
});
```

#### Response

```json
{
  "amount": "5.00000000",
  "assetCode": "garply",
  "code": "internal",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": {},
  "originAddress": null,
  "originWalletId": null,
  "processedAt": null,
  "reference": null,
  "status": "pending",
  "type": "deposit",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `transaction.fail`

Fails the `transaction` of the given `id`.

**Example:**

#### Request

```js
await slyk.transaction.fail('43563311-ab16-4499-95d2-30d9e06ba159', { reason: 'corge' });
```

#### Response

```json
{
  "amount": "5.00000000",
  "assetCode": "garply",
  "code": "internal",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": { "failReason": "corge" },
  "originAddress": null,
  "originWalletId": null,
  "processedAt": null,
  "reference": null,
  "status": "failed",
  "type": "deposit",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```


### `transaction.get`

Returns the `transaction` of the given `id`.

**Example:**

#### Request

```js
await slyk.transaction.get('1ef0452a-062c-45ce-aaf5-dd19e38c7711');
```

#### Response

```json
{
  "amount": "5.00000000",
  "assetCode": "garply",
  "code": "internal",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": {},
  "originAddress": null,
  "originWalletId": null,
  "processedAt": null,
  "reference": null,
  "status": "pending",
  "type": "deposit",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `transaction.list`

Retrieves a list of `transactions`.

**Example:**

#### Request

```js
await slyk.movement.list({ filter: { walletId: '1ef0452a-062c-45ce-aaf5-dd19e38c7711' } });
```

#### Response

```json
{
  "results": [{
    "amount": "5.00000000",
    "assetCode": "garply",
    "code": "internal",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "description": null,
    "destinationAddress": null,
    "destinationWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
    "externalId": null,
    "externalReference": null,
    "id": "43563311-ab16-4499-95d2-30d9e06ba159",
    "metadata": {},
    "originAddress": null,
    "originWalletId": null,
    "processedAt": null,
    "reference": null,
    "status": "completed",
    "type": "deposit",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  },
  {
    "amount": "2.50000000",
    "assetCode": "garply",
    "code": "bank:wire",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "description": null,
    "destinationAddress": null,
    "destinationWalletId": null,
    "externalId": null,
    "externalReference": null,
    "id": "43563311-ab16-4499-95d2-30d9e06ba159",
    "metadata": {},
    "originAddress": null,
    "originWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
    "processedAt": null,
    "reference": null,
    "status": "pending",
    "type": "withdrawal",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  }],
  "total": 2
}
```

### `transaction.pay`

Creates a new `pay` `transaction`.

**Example:**

#### Request

```js
await slyk.transaction.pay({
  amount: '1',
  assetCode: 'garply',
  originWalletId: '1ef0452a-062c-45ce-aaf5-dd19e38c7711'
});
```

#### Response

```json
{
  "amount": "1.00000000",
  "assetCode": "garply",
  "code": "internal:pay",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "c4004a9d-6f2a-47b5-8c1e-d6349951ad05",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": {},
  "originAddress": null,
  "originWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "processedAt": null,
  "reference": null,
  "status": "pending",
  "type": "transfer",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `transaction.reject`

Rejects the `transaction` of the given `id`.

**Example:**

#### Request

```js
await slyk.transaction.reject('43563311-ab16-4499-95d2-30d9e06ba159', { reason: { qux: 'quux' } });
```

#### Response

```json
{
  "amount": "5.00000000",
  "assetCode": "garply",
  "code": "internal",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": { "rejectReason": { "qux": "quux" } },
  "originAddress": null,
  "originWalletId": null,
  "processedAt": null,
  "reference": null,
  "status": "rejected",
  "type": "deposit",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `transaction.transfer`

Creates a new `transfer` `transaction`.

**Example:**

#### Request

```js
await slyk.transaction.transfer({
  amount: '2',
  code: 'internal',
  commit: true,
  assetCode: 'garply',
  originAddress: 'foobar',
  originWalletId: '1ef0452a-062c-45ce-aaf5-dd19e38c7711',
  destinantionAddress: 'foobiz',
  destinationWalletId: 'ab7970fb-a1a9-456e-a6b2-1fedfba2247b'
});
```

#### Response

```json
{
  "amount": "2.00000000",
  "assetCode": "garply",
  "code": "internal",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": "foobiz",
  "destinationWalletId": "ab7970fb-a1a9-456e-a6b2-1fedfba2247b",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": {},
  "originAddress": "foobar",
  "originWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "processedAt": null,
  "reference": null,
  "status": "pending",
  "type": "transfer",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `transaction.withdrawal`

Creates a new `withdrawal` `transaction`.

**Example:**

#### Request

```js
await slyk.transaction.withdrawal({
  amount: '2.5',
  code: 'bank:wire',
  commit: true,
  assetCode: 'garply',
  originWalletId: '1ef0452a-062c-45ce-aaf5-dd19e38c7711',
});
```

#### Response

```json
{
  "amount": "2.50000000",
  "assetCode": "garply",
  "code": "bank:wire",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": null,
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": {},
  "originAddress": null,
  "originWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "processedAt": null,
  "reference": null,
  "status": "pending",
  "type": "withdrawal",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

## user

The result of each one of the following `user` methods return one or an array of `User` objects that include the following methods:
- `approve`: Approves the `user`.
- `block`: Blocks the `user`.
- `changePassword`: Changes the `user` the password.
- `getData`: Returns the `user` details.
- `getInvites`: Returns the `invites` of the `user`.
- `getWallets`: Returns the `wallets` of the `user`.
- `getPrimaryWallet`: Returns the `wallet` of the `user` `primaryWalletId`.
- `getReferralUser`: Returns the `user` of the `user` `referralUserId` if set.
- `patch`: Patches the `user`.
- `unblock`: Unblocks the `user`.

### `user.approve`

Approves the `user` of the given `id`.

**Example:**

#### Request

```js
await slyk.user.approve('5e101529-fa30-4415-9945-6540e70c4483');
```

#### Response

```json
{
  "approved": true,
  "blocked": false,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "email": "foo@bar.com",
  "id": "5e101529-fa30-4415-9945-6540e70c4483",
  "locale": "en-us",
  "name": "foobar",
  "phone": null,
  "primaryWalletId": "6c455aa8-c714-4441-97a8-0739fe387a67",
  "referralCode": "XYZZY",
  "referralUserId": null,
  "roles": ["user"],
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "verified": false
}
```

### `user.block`

Blocks the `user` of the given `id`.

**Example:**

#### Request

```js
await slyk.user.block('5e101529-fa30-4415-9945-6540e70c4483');
```

#### Response

```json
{
  "approved": false,
  "blocked": true,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "email": "foo@bar.com",
  "id": "5e101529-fa30-4415-9945-6540e70c4483",
  "locale": "en-us",
  "name": "foobar",
  "phone": null,
  "primaryWalletId": "6c455aa8-c714-4441-97a8-0739fe387a67",
  "referralCode": "XYZZY",
  "referralUserId": null,
  "roles": ["user"],
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "verified": false
}
```

### `user.changePassword`

Changes the `user` password.

**Example:**

#### Request

```js
await slyk.user.changePassword('5e101529-fa30-4415-9945-6540e70c4483', { password: 'waldo' });
```

#### Response

```json
true
```

### `user.create`

Creates a new `user`.

**Example:**

#### Request

```js
await slyk.user.create({ email: 'foo@bar.com', password: 'waldo' });
```

#### Response

```json
{
  "approved": false,
  "blocked": false,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "email": "foo@bar.com",
  "id": "5e101529-fa30-4415-9945-6540e70c4483",
  "locale": "en-us",
  "name": "foobar",
  "phone": null,
  "primaryWalletId": "6c455aa8-c714-4441-97a8-0739fe387a67",
  "referralCode": "XYZZY",
  "referralUserId": null,
  "roles": ["user"],
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "verified": false
}
```

### `user.get`

Returns the `user` of the given `id`.

**Example:**

#### Request

```js
await slyk.user.get('5e101529-fa30-4415-9945-6540e70c4483');
```

#### Response

```json
{
  "approved": false,
  "blocked": false,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "email": "foo@bar.com",
  "id": "5e101529-fa30-4415-9945-6540e70c4483",
  "locale": "en-us",
  "name": "foobar",
  "phone": null,
  "primaryWalletId": "6c455aa8-c714-4441-97a8-0739fe387a67",
  "referralCode": "XYZZY",
  "referralUserId": null,
  "roles": ["user"],
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "verified": false
}
```

### `user.list`

Retrieves a list of `user`.

**Example:**

#### Request

```js
await slyk.user.list({ filter: { name: 'foo' } });
```

#### Response

```json
{
  "results": [{
    "approved": false,
    "blocked": false,
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "email": "foo@bar.com",
    "id": "5e101529-fa30-4415-9945-6540e70c4483",
    "locale": "en-us",
    "name": "foobar",
    "phone": null,
    "primaryWalletId": "6c455aa8-c714-4441-97a8-0739fe387a67",
    "referralCode": "XYZZY",
    "referralUserId": null,
    "roles": ["user"],
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "verified": false
  },
  {
    "approved": false,
    "blocked": false,
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "email": "foo@biz.com",
    "id": "6173fe23-1442-4003-bc4d-d18f5f42c024",
    "locale": "en-us",
    "name": "foobiz",
    "phone": null,
    "primaryWalletId": "a12fb051-9e36-441a-82b8-90f7813c5504",
    "referralCode": "XYZZY",
    "referralUserId": null,
    "roles": ["user"],
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "verified": false
  }],
  "total": 2
}
```

### `user.patch`

Patches the details of the `user` of the given `id`.

**Example:**

#### Request

```js
await slyk.user.patch('5e101529-fa30-4415-9945-6540e70c4483', { name: 'corge' });
```

#### Response

```json
{
  "approved": false,
  "blocked": false,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "email": "foo@bar.com",
  "id": "5e101529-fa30-4415-9945-6540e70c4483",
  "locale": "en-us",
  "name": "corge",
  "phone": null,
  "primaryWalletId": "6c455aa8-c714-4441-97a8-0739fe387a67",
  "referralCode": "XYZZY",
  "referralUserId": null,
  "roles": ["user"],
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "verified": false
}
```

### `user.unblock`

Unblocks the `user` of the given `id`.

**Example:**

#### Request

```js
await slyk.user.unblock('5e101529-fa30-4415-9945-6540e70c4483');
```

#### Response

```json
{
  "approved": false,
  "blocked": false,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "email": "foo@bar.com",
  "id": "5e101529-fa30-4415-9945-6540e70c4483",
  "locale": "en-us",
  "name": "foobar",
  "phone": null,
  "primaryWalletId": "6c455aa8-c714-4441-97a8-0739fe387a67",
  "referralCode": "XYZZY",
  "referralUserId": null,
  "roles": ["user"],
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "verified": false
}
```

## wallet

The result of each one of the following `wallet` methods return one or an array of `Wallet` objects that include the following methods:
- `getActivity`: Returns the `activity`.
- `getBalance`: Returns the `balance`.
- `getData`: Returns the `wallet` details.
- `getMovements`: Returns the `movements`.
- `getTransactions`: Returns the `transactions`.
- `getOwner`: Returns the `user` of the `wallet` `ownerId`.
- `patch`: Patches the `wallet`.

### `wallet.activity`

Returns the `activity` of the `wallet` of the given `id`.

**Example:**

#### Request

```js
await slyk.wallet.activity('2d9b72c5-fbb2-45f1-8591-329c2a014c43', { page: { number: 2, size: 2 } });
```

#### Response

```json
{
  "results": [{
    "amount": "5.00000000",
    "assetCode": "garply",
    "code": "internal",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "description": null,
    "destinationAddress": null,
    "destinationWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
    "externalId": null,
    "externalReference": null,
    "id": "43563311-ab16-4499-95d2-30d9e06ba159",
    "metadata": {},
    "originAddress": null,
    "originWalletId": null,
    "processedAt": null,
    "reference": null,
    "status": "completed",
    "type": "deposit",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  },
  {
    "amount": "2.50000000",
    "assetCode": "garply",
    "code": "bank:wire",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "description": null,
    "destinationAddress": null,
    "destinationWalletId": null,
    "externalId": null,
    "externalReference": null,
    "id": "43563311-ab16-4499-95d2-30d9e06ba159",
    "metadata": {},
    "originAddress": null,
    "originWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
    "processedAt": null,
    "reference": null,
    "status": "processing",
    "type": "withdrawal",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  }],
  "total": 5
}
```

### `wallet.balance`

Returns the `balance` of the `wallet` of the given `id`.

**Example:**

#### Request

```js
await slyk.wallet.balance('2d9b72c5-fbb2-45f1-8591-329c2a014c43', { filter: { assetCode: 'in:garply,corge' } });
```

#### Response

```json
[
  { "amount": "2.50000000", "assetCode": "coreg" },
  { "amount": "0.50000000", "assetCode": "garply" }
]
```

### `wallet.create`

Creates a new `wallet`.

**Example:**

#### Request

```js
await slyk.wallet.create({ ownerId: '0adb8aa9-6232-48f2-8faa-d9289e9134b9' });
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "id": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
  "locked": false,
  "metadata": {},
  "name": null,
  "ownerId": null,
  "reference": "XYZZY",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `wallet.get`

Returns the `wallet` of the given `id`.

**Example:**

#### Request

```js
await slyk.wallet.get('4b1a22bf-642c-4c4f-bfb4-678e59121e74');
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "id": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
  "locked": false,
  "metadata": {},
  "name": null,
  "ownerId": null,
  "reference": "XYZZY",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `wallet.globalActivity`

Returns the `globalActivity`.

**Example:**

#### Request

```js
await slyk.wallet.globalActivity({ page: { number: 2, size: 2 } });
```

#### Response

```json
{
  "results": [{
    "amount": "5.00000000",
    "assetCode": "garply",
    "code": "internal",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "description": null,
    "destinationAddress": null,
    "destinationWalletId": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
    "externalId": null,
    "externalReference": null,
    "id": "43563311-ab16-4499-95d2-30d9e06ba159",
    "metadata": {},
    "originAddress": null,
    "originWalletId": null,
    "processedAt": null,
    "reference": null,
    "status": "completed",
    "type": "deposit",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  },
  {
    "amount": "2.50000000",
    "assetCode": "garply",
    "code": "bank:wire",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "description": null,
    "destinationAddress": null,
    "destinationWalletId": null,
    "externalId": null,
    "externalReference": null,
    "id": "43563311-ab16-4499-95d2-30d9e06ba159",
    "metadata": {},
    "originAddress": null,
    "originWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
    "processedAt": null,
    "reference": null,
    "status": "processing",
    "type": "withdrawal",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  }],
  "total": 5
}
```

### `wallet.globalBalance`

Returns the `globalBalance`.

**Example:**

#### Request

```js
await slyk.wallet.globalBalance({ filter: { assetCode: 'in:garply,corge' } });
```

#### Response

```json
[
  { "amount": "20.00000000", "assetCode": "coreg" },
  { "amount": "15.50000000", "assetCode": "garply" }
]
```

### `wallet.list`

Returns a list `wallet`.

**Example:**

#### Request

```js
await slyk.wallet.list({ filter: { locked: true } });
```

#### Response

```json
{
  "results": [{
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "id": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
    "locked": true,
    "metadata": {},
    "name": null,
    "ownerId": null,
    "reference": "XYZZY",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  },
  {
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "id": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
    "locked": true,
    "metadata": {},
    "name": null,
    "ownerId": null,
    "reference": "WALDO",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  }],
  "total": 2
}
```

### `wallet.movements`

Returns the `movments` of the `wallet` of the given `id`.

**Example:**

#### Request

```js
await slyk.wallet.movements('4b1a22bf-642c-4c4f-bfb4-678e59121e74', { include: 'transaction' });
```

#### Response

```json
{
  "results": [{
    "amount": "4.50000000",
    "assetCode": "garply",
    "code": "deposit",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "id": "09900e6e-991e-43bd-9b82-0641f648c1d1",
    "transactionId": "43563311-ab16-4499-95d2-30d9e06ba159",
    "transaction": {
      "amount": "4.50000000",
      "assetCode": "garply",
      "code": "internal",
      "createdAt": "2019-03-20T14:30:37.483Z",
      "description": null,
      "destinationAddress": null,
      "destinationWalletId": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
      "externalId": null,
      "id": "09900e6e-991e-43bd-9b82-0641f648c1d1",
      "metadata": {},
      "originAddress": null,
      "originWalletId": null,
      "status": "completed",
      "type": "deposit",
      "updatedAt": "2019-03-20T14:30:37.483Z"
    },
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "walletId": "4b1a22bf-642c-4c4f-bfb4-678e59121e74"
  },
  {
    "amount": "-0.50000000",
    "assetCode": "garply",
    "code": "withdrawal",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "id": "b9fe22e5-2985-4814-8cb8-02e1cb581001",
    "transactionId": "a3293366-0d4c-4f83-8f71-84fe0b7dda99",
    "transaction": {
      "amount": "4.50000000",
      "assetCode": "garply",
      "code": "internal",
      "createdAt": "2019-03-20T14:30:37.483Z",
      "description": null,
      "destinationAddress": null,
      "destinationWalletId": null,
      "externalId": null,
      "id": "b9fe22e5-2985-4814-8cb8-02e1cb581001",
      "metadata": {},
      "originAddress": null,
      "originWalletId": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
      "status": "completed",
      "type": "withdrawal",
      "updatedAt": "2019-03-20T14:30:37.483Z"
    },
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "walletId": "4b1a22bf-642c-4c4f-bfb4-678e59121e74"
  }],
  "total": 2
}
```

### `wallet.patch`

Patches the details of the `wallet` of the given `id`.

**Example:**

#### Request

```js
await slyk.wallet.patch('4b1a22bf-642c-4c4f-bfb4-678e59121e74', { customData: { qux: 'quux' }, name: 'corge' });
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "id": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
  "locked": true,
  "metadata": {},
  "name": "corge",
  "ownerId": null,
  "reference": "XYZZY",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `wallet.transactions`

Returns the `transactions` of the `wallet` of the given `id`.

**Example:**

#### Request

```js
await slyk.wallet.transactions('4b1a22bf-642c-4c4f-bfb4-678e59121e74';
```

#### Response

```json
{
  "results": [{
    "amount": "4.50000000",
    "assetCode": "garply",
    "code": "internal",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "description": null,
    "destinationAddress": null,
    "destinationWalletId": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
    "externalId": null,
    "id": "09900e6e-991e-43bd-9b82-0641f648c1d1",
    "metadata": {},
    "originAddress": null,
    "originWalletId": null,
    "status": "completed",
    "type": "deposit",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  },
  {
    "amount": "4.50000000",
    "assetCode": "garply",
    "code": "internal",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "description": null,
    "destinationAddress": null,
    "destinationWalletId": null,
    "externalId": null,
    "id": "b9fe22e5-2985-4814-8cb8-02e1cb581001",
    "metadata": {},
    "originAddress": null,
    "originWalletId": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
    "status": "completed",
    "type": "withdrawal",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  }],
  "total": 2
}
```
