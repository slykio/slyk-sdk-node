# Slyk - Node.js SDK

## Available methods

- [Slyk - Node.js SDK](#slyk---nodejs-sdk)
  - [Available methods](#available-methods)
  - [address](#address)
    - [`address.create`](#addresscreate)
      - [Request](#request)
      - [Response](#response)
    - [`address.get`](#addressget)
      - [Request](#request-1)
      - [Response](#response-1)
    - [`address.list`](#addresslist)
      - [Request](#request-2)
      - [Response](#response-2)
  - [auth](#auth)
    - [`auth.login`](#authlogin)
      - [Request](#request-3)
      - [Response](#response-3)
    - [`auth.logout`](#authlogout)
      - [Request](#request-4)
      - [Response](#response-4)
    - [`auth.refresh`](#authrefresh)
      - [Request](#request-5)
      - [Response](#response-5)
    - [`auth.validate`](#authvalidate)
      - [Request](#request-6)
      - [Response](#response-6)
  - [asset](#asset)
    - [`asset.create`](#assetcreate)
      - [Request](#request-7)
      - [Response](#response-7)
    - [`asset.get`](#assetget)
      - [Request](#request-8)
      - [Response](#response-8)
    - [`asset.list`](#assetlist)
      - [Request](#request-9)
      - [Response](#response-9)
    - [`asset.patch`](#assetpatch)
      - [Request](#request-10)
      - [Response](#response-10)
  - [bankAccount](#bankaccount)
    - [`bankAccount.create`](#bankaccountcreate)
      - [Request](#request-11)
      - [Response](#response-11)
    - [`bankAccount.delete`](#bankaccountdelete)
      - [Request](#request-12)
      - [Response](#response-12)
    - [`bankAccount.get`](#bankaccountget)
      - [Request](#request-13)
      - [Response](#response-13)
    - [`bankAccount.list`](#bankaccountlist)
      - [Request](#request-14)
      - [Response](#response-14)
    - [`bankAccount.patch`](#bankaccountpatch)
      - [Request](#request-15)
      - [Response](#response-15)
  - [bankAccountRegion](#bankaccountregion)
    - [`bankAccountRegion.list`](#bankaccountregionlist)
      - [Request](#request-16)
      - [Response](#response-16)
  - [connection](#connection)
    - [`connection.create`](#connectioncreate)
      - [Request](#request-17)
      - [Response](#response-17)
    - [`connection.get`](#connectionget)
      - [Request](#request-18)
      - [Response](#response-18)
    - [`connection.list`](#connectionlist)
      - [Request](#request-19)
      - [Response](#response-19)
    - [`connection.patch`](#connectionpatch)
      - [Request](#request-20)
      - [Response](#response-20)
  - [identity](#identity)
    - [`identity.approve`](#identityapprove)
      - [Request](#request-21)
      - [Response](#response-21)
    - [`identity.cancel`](#identitycancel)
      - [Request](#request-22)
      - [Response](#response-22)
    - [`identity.create`](#identitycreate)
      - [Request](#request-23)
      - [Response](#response-23)
    - [`identity.delete`](#identitydelete)
      - [Request](#request-24)
      - [Response](#response-24)
    - [`identity.get`](#identityget)
      - [Request](#request-25)
      - [Response](#response-25)
    - [`identity.list`](#identitylist)
      - [Request](#request-26)
      - [Response](#response-26)
    - [`identity.reject`](#identityreject)
      - [Request](#request-27)
      - [Response](#response-27)
    - [`identity.submit`](#identitysubmit)
      - [Request](#request-28)
      - [Response](#response-28)
  - [IdentityDocument](#identitydocument)
  - [`identityDocument.create`](#identitydocumentcreate)
      - [Request](#request-29)
      - [Response](#response-29)
  - [`identityDocument.delete`](#identitydocumentdelete)
      - [Request](#request-30)
      - [Response](#response-30)
  - [`identityDocument.get`](#identitydocumentget)
      - [Request](#request-31)
      - [Response](#response-31)
  - [`identityDocument.list`](#identitydocumentlist)
      - [Request](#request-32)
      - [Response](#response-32)
  - [invite](#invite)
    - [`invite.cancel`](#invitecancel)
      - [Request](#request-33)
      - [Response](#response-33)
    - [`invite.create`](#invitecreate)
      - [Request](#request-34)
      - [Response](#response-34)
    - [`invite.get`](#inviteget)
      - [Request](#request-35)
      - [Response](#response-35)
    - [`invite.list`](#invitelist)
      - [Request](#request-36)
      - [Response](#response-36)
    - [`invite.send`](#invitesend)
      - [Request](#request-37)
      - [Response](#response-37)
    - [`invite.validate`](#invitevalidate)
      - [Request](#request-38)
      - [Response](#response-38)
  - [movement](#movement)
    - [`movement.get`](#movementget)
      - [Request](#request-39)
      - [Response](#response-39)
    - [`movement.list`](#movementlist)
      - [Request](#request-40)
      - [Response](#response-40)
  - [order](#order)
    - [`order.cancel`](#ordercancel)
      - [Request](#request-41)
      - [Response](#response-41)
    - [`order.create`](#ordercreate)
      - [Request](#request-42)
      - [Response](#response-42)
    - [`order.fulfill`](#orderfulfill)
      - [Request](#request-43)
      - [Response](#response-43)
    - [`order.get`](#orderget)
      - [Request](#request-44)
      - [Response](#response-44)
    - [`order.list`](#orderlist)
      - [Request](#request-45)
      - [Response](#response-45)
    - [`order.patch`](#orderpatch)
      - [Request](#request-46)
      - [Response](#response-46)
    - [`order.pay`](#orderpay)
      - [Request](#request-47)
      - [Response](#response-47)
    - [`order.refund`](#orderrefund)
      - [Request](#request-48)
      - [Response](#response-48)
    - [`order.unfulfill`](#orderunfulfill)
      - [Request](#request-49)
      - [Response](#response-49)
  - [orderLine](#orderline)
    - [`orderLine.fulfill`](#orderlinefulfill)
      - [Request](#request-50)
      - [Response](#response-50)
    - [`orderLine.get`](#orderlineget)
      - [Request](#request-51)
      - [Response](#response-51)
    - [`orderLine.list`](#orderlinelist)
      - [Request](#request-52)
      - [Response](#response-52)
    - [`orderLine.unfulfill`](#orderlineunfulfill)
      - [Request](#request-53)
      - [Response](#response-53)
  - [paymentMethod](#paymentmethod)
    - [`paymentMethod.get`](#paymentmethodget)
      - [Request](#request-54)
      - [Response](#response-54)
    - [`paymentMethod.list`](#paymentmethodlist)
      - [Request](#request-55)
      - [Response](#response-55)
  - [product](#product)
    - [`product.create`](#productcreate)
      - [Request](#request-56)
      - [Response](#response-56)
    - [`product.createQuestion`](#productcreatequestion)
      - [Request](#request-57)
      - [Response](#response-57)
    - [`product.delete`](#productdelete)
      - [Request](#request-58)
      - [Response](#response-58)
    - [`product.deleteQuestion`](#productdeletequestion)
      - [Request](#request-59)
      - [Response](#response-59)
    - [`product.get`](#productget)
      - [Request](#request-60)
      - [Response](#response-60)
    - [`product.list`](#productlist)
      - [Request](#request-61)
      - [Response](#response-61)
    - [`product.patch`](#productpatch)
      - [Request](#request-62)
      - [Response](#response-62)
    - [`product.reorder`](#productreorder)
      - [Request](#request-63)
      - [Response](#response-63)
    - [`product.reorderQuestion`](#productreorderquestion)
      - [Request](#request-64)
      - [Response](#response-64)
  - [productCategory](#productcategory)
    - [`productCategory.create`](#productcategorycreate)
      - [Request](#request-65)
      - [Response](#response-65)
    - [`productCategory.delete`](#productcategorydelete)
      - [Request](#request-66)
      - [Response](#response-66)
    - [`productCategory.get`](#productcategoryget)
      - [Request](#request-67)
      - [Response](#response-67)
    - [`productCategory.list`](#productcategorylist)
      - [Request](#request-68)
      - [Response](#response-68)
    - [`productCategory.patch`](#productcategorypatch)
      - [Request](#request-69)
      - [Response](#response-69)
    - [`productCategory.reorder`](#productcategoryreorder)
      - [Request](#request-70)
      - [Response](#response-70)
  - [productImage](#productimage)
    - [`productImage.create`](#productimagecreate)
      - [Request](#request-71)
      - [Response](#response-71)
    - [`productImage.delete`](#productimagedelete)
      - [Request](#request-72)
      - [Response](#response-72)
    - [`productImage.get`](#productimageget)
      - [Request](#request-73)
      - [Response](#response-73)
    - [`productImage.list`](#productimagelist)
      - [Request](#request-74)
      - [Response](#response-74)
    - [`productImage.reorder`](#productimagereorder)
      - [Request](#request-75)
      - [Response](#response-75)
  - [question](#question)
    - [`question.create`](#questioncreate)
      - [Request](#request-76)
      - [Response](#response-76)
    - [`question.delete`](#questiondelete)
      - [Request](#request-77)
      - [Response](#response-77)
    - [`question.get`](#questionget)
      - [Request](#request-78)
      - [Response](#response-78)
    - [`question.list`](#questionlist)
      - [Request](#request-79)
      - [Response](#response-79)
    - [`question.patch`](#questionpatch)
      - [Request](#request-80)
      - [Response](#response-80)
  - [questionType](#questiontype)
    - [`question.list`](#questionlist-1)
      - [Request](#request-81)
      - [Response](#response-81)
  - [rate](#rate)
    - [`rate.create`](#ratecreate)
      - [Request](#request-82)
      - [Response](#response-82)
    - [`rate.delete`](#ratedelete)
      - [Request](#request-83)
      - [Response](#response-83)
    - [`rate.get`](#rateget)
      - [Request](#request-84)
      - [Response](#response-84)
    - [`rate.list`](#ratelist)
      - [Request](#request-85)
      - [Response](#response-85)
    - [`rate.patch`](#ratepatch)
      - [Request](#request-86)
      - [Response](#response-86)
    - [setting](#setting)
    - [`setting.get`](#settingget)
      - [Request](#request-87)
      - [Response](#response-87)
    - [`setting.list`](#settinglist)
      - [Request](#request-88)
      - [Response](#response-88)
  - [task](#task)
    - [`task.complete`](#taskcomplete)
      - [Request](#request-89)
      - [Response](#response-89)
    - [`task.completeSurvey`](#taskcompletesurvey)
      - [Request](#request-90)
      - [Response](#response-90)
    - [`task.create`](#taskcreate)
      - [Request](#request-91)
      - [Response](#response-91)
    - [`task.get`](#taskget)
      - [Request](#request-92)
      - [Response](#response-92)
    - [`task.getStatistics`](#taskgetstatistics)
      - [Request](#request-93)
      - [Response](#response-93)
    - [`task.list`](#tasklist)
      - [Request](#request-94)
      - [Response](#response-94)
    - [`task.listAnswers`](#tasklistanswers)
      - [Request](#request-95)
      - [Response](#response-95)
    - [`task.patch`](#taskpatch)
      - [Request](#request-96)
      - [Response](#response-96)
    - [`task.reorder`](#taskreorder)
      - [Request](#request-97)
      - [Response](#response-97)
  - [taskStep](#taskstep)
    - [`taskStep.get`](#taskstepget)
      - [Request](#request-98)
      - [Response](#response-98)
    - [`taskStep.list`](#tasksteplist)
      - [Request](#request-99)
      - [Response](#response-99)
    - [`taskStep.patch`](#tasksteppatch)
      - [Request](#request-100)
      - [Response](#response-100)
  - [taskStepQuestion](#taskstepquestion)
    - [`taskStepQuestion.list`](#taskstepquestionlist)
      - [Request](#request-101)
      - [Response](#response-101)
  - [taxRate](#taxrate)
    - [`taxRate.create`](#taxratecreate)
      - [Request](#request-102)
      - [Response](#response-102)
    - [`taxRate.delete`](#taxratedelete)
      - [Request](#request-103)
      - [Response](#response-103)
    - [`taxRate.get`](#taxrateget)
      - [Request](#request-104)
      - [Response](#response-104)
    - [`taxRate.list`](#taxratelist)
      - [Request](#request-105)
      - [Response](#response-105)
    - [`taxRate.patch`](#taxratepatch)
      - [Request](#request-106)
      - [Response](#response-106)
  - [transaction](#transaction)
    - [`transaction.approve`](#transactionapprove)
      - [Request](#request-107)
      - [Response](#response-107)
    - [`transaction.confirm`](#transactionconfirm)
      - [Request](#request-108)
      - [Response](#response-108)
    - [`transaction.deposit`](#transactiondeposit)
      - [Request](#request-109)
      - [Response](#response-109)
    - [`transaction.fail`](#transactionfail)
      - [Request](#request-110)
      - [Response](#response-110)
    - [`transaction.get`](#transactionget)
      - [Request](#request-111)
      - [Response](#response-111)
    - [`transaction.list`](#transactionlist)
      - [Request](#request-112)
      - [Response](#response-112)
    - [`transaction.pay`](#transactionpay)
      - [Request](#request-113)
      - [Response](#response-113)
    - [`transaction.reject`](#transactionreject)
      - [Request](#request-114)
      - [Response](#response-114)
    - [`transaction.request`](#transactionrequest)
      - [Request](#request-115)
      - [Response](#response-115)
    - [`transaction.send`](#transactionsend)
      - [Request](#request-116)
      - [Response](#response-116)
    - [`transaction.transfer`](#transactiontransfer)
      - [Request](#request-117)
      - [Response](#response-117)
    - [`transaction.withdrawal`](#transactionwithdrawal)
      - [Request](#request-118)
      - [Response](#response-118)
  - [user](#user)
    - [`user.approve`](#userapprove)
      - [Request](#request-119)
      - [Response](#response-119)
    - [`user.block`](#userblock)
      - [Request](#request-120)
      - [Response](#response-120)
    - [`user.changeEmail`](#userchangeemail)
      - [Request](#request-121)
      - [Response](#response-121)
    - [`user.changePassword`](#userchangepassword)
      - [Request](#request-122)
      - [Response](#response-122)
    - [`user.changePhone`](#userchangephone)
      - [Request](#request-123)
      - [Response](#response-123)
    - [`user.confirmEmail`](#userconfirmemail)
      - [Request](#request-124)
      - [Responses](#responses)
    - [`user.confirmPhone`](#userconfirmphone)
      - [Request](#request-125)
      - [Responses](#responses-1)
    - [`user.create`](#usercreate)
      - [Request](#request-126)
      - [Response](#response-124)
    - [`user.forgotPassword`](#userforgotpassword)
      - [Request](#request-127)
      - [Response](#response-125)
    - [`user.get`](#userget)
      - [Request](#request-128)
      - [Response](#response-126)
    - [`user.getReferralProgram`](#usergetreferralprogram)
      - [Request](#request-129)
      - [Response](#response-127)
    - [`user.delete`](#userdelete)
      - [Request](#request-130)
      - [Response](#response-128)
    - [`user.list`](#userlist)
      - [Request](#request-131)
      - [Response](#response-129)
    - [`user.patch`](#userpatch)
      - [Request](#request-132)
      - [Response](#response-130)
    - [`user.resendConfirmation`](#userresendconfirmation)
      - [Request](#request-133)
      - [Response](#response-131)
    - [`user.resetPassword`](#userresetpassword)
      - [Request](#request-134)
      - [Response](#response-132)
    - [`user.unblock`](#userunblock)
      - [Request](#request-135)
      - [Response](#response-133)
  - [wallet](#wallet)
    - [`wallet.activity`](#walletactivity)
      - [Request](#request-136)
      - [Response](#response-134)
    - [`wallet.balance`](#walletbalance)
      - [Request](#request-137)
      - [Response](#response-135)
    - [`wallet.create`](#walletcreate)
      - [Request](#request-138)
      - [Response](#response-136)
    - [`wallet.get`](#walletget)
      - [Request](#request-139)
      - [Response](#response-137)
    - [`wallet.globalActivity`](#walletglobalactivity)
      - [Request](#request-140)
      - [Response](#response-138)
    - [`wallet.globalBalance`](#walletglobalbalance)
      - [Request](#request-141)
      - [Response](#response-139)
    - [`wallet.list`](#walletlist)
      - [Request](#request-142)
      - [Response](#response-140)
    - [`wallet.movements`](#walletmovements)
      - [Request](#request-143)
      - [Response](#response-141)
    - [`wallet.patch`](#walletpatch)
      - [Request](#request-144)
      - [Response](#response-142)
    - [`wallet.transactions`](#wallettransactions)
      - [Request](#request-145)
      - [Response](#response-143)
  - [webhook](#webhook)
    - [`webhook.create`](#webhookcreate)
      - [Request](#request-146)
      - [Response](#response-144)
    - [`webhook.delete`](#webhookdelete)
      - [Request](#request-147)
      - [Response](#response-145)
    - [`webhook.get`](#webhookget)
      - [Request](#request-148)
      - [Response](#response-146)
    - [`webhook.list`](#webhooklist)
      - [Request](#request-149)
      - [Response](#response-147)
    - [`webhook.patch`](#webhookpatch)
      - [Request](#request-150)
      - [Response](#response-148)

## address

The result of each one of the following `address` methods return one or an array of `Address` objects that include the following methods:
- `getAsset`: Returns the `asset` of the `address` `assetCode`.
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

Validate the `auth` `token` and returns the details of the `user` related with the provided `token`.

**Example:**

#### Request

```js
await slyk.auth.validate({ token: '456' });
```

#### Response

```json
{
  "user": {
    "approved": false,
    "blocked": false,
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": {},
    "email": "foo@bar.com",
    "id": "5e101529-fa30-4415-9945-6540e70c4483",
    "image": {
      "external": false,
      "path": "/waldo/fred.png",
      "type": "image",
      "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
      "url": "http://foobar.com/waldo/fred.png"
    },
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
}
```

## asset

The result of each one of the following `asset` methods return one or an array of `Asset` objects that include the following methods:
- `getConnection`: Returns the `connection` of the `asset` `connectionId` if set.
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
  "logo": {
    "external": false,
    "path": "/foo/bar",
    "type": "image",
    "uploadId": "86365b03-48f8-4bfc-8ed7-f873cc75fb64",
    "url": "http://86365b03-48f8-4bfc-8ed7-f873cc75fb64.url"
  },
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

## bankAccount

The result of each one of the following `bankAccount` methods return one or an array of `BankAccount` objects that include the following methods:
- `delete`: Deletes the `bankAccount`;
- `getAsset`: Returns the `bankAccount` `asset` details;
- `patch`: Patches the `bankAccount` details.

### `bankAccount.create`

Creates a `bankAccount` with the provided data.

**Example:**

#### Request

```js
await slyk.bankAccount.create({
  asset: 'garply',
  details: {
    foo: 'biz'
  },
  name: 'foobar',
  region: 'corge'
});
```

#### Response

```json
{
  "asset": "garply",
  "details": {
    "foo": "biz"
  },
  "id": "xyzzy",
  "name": "foobar",
  "region": "corge"
}
```

### `bankAccount.delete`

Deletes the `bankAccount` of the given `id`.

**Example:**

#### Request

```js
await slyk.bankAccount.delete('xyzzy');
```

#### Response

```json
true
```

### `bankAccount.get`

Retrieves the `bankAccount` of the given `id`.

**Example:**

#### Request

```js
await slyk.bankAccount.get('xyzzy');
```

#### Response

```json
{
  "asset": "garply",
  "details": {
    "foo": "biz"
  },
  "id": "xyzzy",
  "name": "foobar",
  "region": "corge"
}
```

### `bankAccount.list`

Retrieves a list of `bankAccounts`.

**Example:**

#### Request

```js
await slyk.bankAccount.list({
  page: { size: 2 },
  sort: [{ name: 'name'}],
  filter: { region: 'in:corge' }
});
```

#### Response

```json
{
  "results": [
    {
      "asset": "garply",
      "details": {
        "foo": "biz"
      },
      "id": "xyzzy",
      "name": "foobar",
      "region": "corge"
    },
    {
      "asset": "thud",
      "details": {},
      "id": "waldo",
      "name": "fred",
      "region": "corge"
    }
  ],
  "total": 32
}
```

### `bankAccount.patch`

Patches the `bankAccount` of the given `id`.

**Example:**

#### Request

```js
await slyk.bankAccount.patch('xyzzy', {
  details: {
    waldo: 'fred'
  },
  name: 'thud'
});
```

#### Response

```json
{
  "asset": "garply",
  "details": {
    "waldo": "fred"
  },
  "id": "xyzzy",
  "name": "thud",
  "region": "corge"
}
```

## bankAccountRegion

The result of each one of the following `bankAccountRegion` methods return one or an array of `BankAccountRegion` objects that include the following methods:
- `getAssets`: Returns the list of `bankAccountRegion` `assets` details.

### `bankAccountRegion.list`

Retrieves a list of `bankAccountRegion`.

**Example:**

#### Request

```js
await slyk.bankAccountRegion.list({
  page: { size: 2 },
  sort: [{ name: 'name'}]
});
```

#### Response

```json
{
  "results": [
    {
      "assets": ["qux", "quux"],
      "details": {
        "foo": "biz"
      },
      "name": "foobar",
      "region": "corge",
      "requiresIdentity": true
    },
    {
      "assets": ["thud"],
      "details": {},
      "name": "fred",
      "region": "waldo",
      "requiresIdentity": true
    }
  ],
  "total": 32
}
```

## connection

The result of each one of the following `connection` methods return one or an array of `Connection` objects that include the following methods:
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

## identity

The result of each one of the following `identity` methods return one or an array of `Identity` objects that include the following methods:
- `approve`: Approves the `identity`.
- `cancel`: Cancels the `identity`.
- `delete`: Deletes the `identity`.
- `getDocument`: Gets a document related with the `identity`.
- `listDocuments`: List the documents related with the `identity`.
- `reject`: Rejects the `identity`.
- `submit`: Submits the `identity`.

### `identity.approve`

**Example:**

#### Request

```js
await slyk.identity.approve('bar');
```

#### Response

```json
{
  "address": {},
  "approvedAt": "2020-06-17T13:19:00.000Z",
  "birthDate": null,
  "canceledAt": null,
  "country": "PT",
  "createdAt": "2020-06-17T13:19:00.000Z",
  "customData": { "qux": "quux" },
  "documentNumber": "biz",
  "documentType": "waldo",
  "gender": null,
  "id": "bar",
  "name": null,
  "nationality": null,
  "rejectedAt": null,
  "status": "approved",
  "submitedAt": "2020-06-18T13:19:00.000Z",
  "updatedAt": "2020-06-18T13:19:00.000Z",
  "userId": "waldo"
}
```

### `identity.cancel`

**Example:**

#### Request

```js
await slyk.identity.cancel('bar', { reason: "quux" });
```

#### Response

```json
{
  "address": {},
  "approvedAt": null,
  "birthDate": null,
  "cancelReason": "quux",
  "canceledAt": "2020-06-17T13:19:00.000Z",
  "country": "PT",
  "createdAt": "2020-06-17T13:19:00.000Z",
  "customData": { "qux": "quux" },
  "documentNumber": "biz",
  "documentType": "waldo",
  "gender": null,
  "id": "bar",
  "name": null,
  "nationality": null,
  "rejectedAt": null,
  "status": "canceled",
  "submitedAt": "2020-06-18T13:19:00.000Z",
  "updatedAt": "2020-06-18T13:19:00.000Z",
  "userId": "waldo"
}
```

### `identity.create`

**Example:**

#### Request

```js
await slyk.identity.create(
  country: 'PT',
  documentNumber: '123',
  documentType: 'national_identity',
  userId: 'foo'
);
```

#### Response

```json
{
  "address": {},
  "approvedAt": null,
  "birthDate": null,
  "canceledAt": null,
  "country": "PT",
  "createdAt": "2020-06-17T13:19:00.000Z",
  "customData": { "qux": "quux" },
  "documentNumber": "123",
  "documentType": "national_identity",
  "gender": null,
  "id": "bar",
  "name": null,
  "nationality": null,
  "rejectedAt": null,
  "status": "pending",
  "submitedAt": "2020-06-18T13:19:00.000Z",
  "updatedAt": "2020-06-18T13:19:00.000Z",
  "userId": "foo"
}
```

### `identity.delete`

**Example:**

#### Request

```js
await slyk.identity.delete('bar');
```

#### Response

```json
true
```

### `identity.get`

**Example:**

#### Request

```js
await slyk.identity.get('bar', { include: 'documents,user' });
```

#### Response

```json
{
  "address": {},
  "approvedAt": null,
  "birthDate": null,
  "canceledAt": null,
  "country": "PT",
  "createdAt": "2020-06-17T13:19:00.000Z",
  "customData": { "qux": "quux" },
  "documentNumber": "biz",
  "documentType": "waldo",
  "documents": [{
    "createdAt": "2020-06-17T13:19:00.000Z",
    "customData": {},
    "file": {
      "type": "document",
      "url": "http://foobar.url"
    },
    "id": "corge",
    "identityId": "foo",
    "updatedAt": "2020-06-18T13:19:00.000Z"
  }],
  "gender": null,
  "id": "bar",
  "name": null,
  "nationality": null,
  "rejectedAt": null,
  "status": "pending",
  "submitedAt": "2020-06-18T13:19:00.000Z",
  "updatedAt": "2020-06-18T13:19:00.000Z",
  "user": {
    "email": "waldo@foo.com",
    "id": "waldo",
    "name": "fred",
    "phone": "+351912345678"
  },
  "userId": "waldo"
}
```

### `identity.list`

**Example:**

#### Request

```js
await slyk.identity.list({ filter: { country: 'PT' } });
```

#### Response

```json
{
  "results": [
    {
      "address": {},
      "approvedAt": null,
      "birthDate": null,
      "canceledAt": null,
      "country": "PT",
      "createdAt": "2020-06-17T13:19:00.000Z",
      "customData": { "qux": "quux" },
      "documentNumber": "biz",
      "documentType": "waldo",
      "gender": null,
      "id": "bar",
      "name": null,
      "nationality": null,
      "rejectedAt": null,
      "status": "pending",
      "submitedAt": "2020-06-18T13:19:00.000Z",
      "updatedAt": "2020-06-18T13:19:00.000Z",
      "userId": "waldo"
    },
    {
      "address": {},
      "approvedAt": "2020-06-17T13:19:00.000Z",
      "birthDate": null,
      "canceledAt": null,
      "country": "PT",
      "createdAt": "2020-06-17T13:19:00.000Z",
      "customData": { "qux": "quux" },
      "documentNumber": "thud",
      "documentType": "waldo",
      "gender": null,
      "id": "quux",
      "name": null,
      "nationality": null,
      "rejectedAt": null,
      "status": "approved",
      "submitedAt": "2020-06-18T13:19:00.000Z",
      "updatedAt": "2020-06-18T13:19:00.000Z",
      "userId": "foobar"
    }
  ],
  "total": 2
}
```

### `identity.reject`

**Example:**

#### Request

```js
await slyk.identity.reject('bar', { reason: 'quux' });
```

#### Response

```json
{
  "address": {},
  "approvedAt": null,
  "birthDate": null,
  "canceledAt": null,
  "country": "PT",
  "createdAt": "2020-06-17T13:19:00.000Z",
  "customData": { "qux": "quux" },
  "documentNumber": "biz",
  "documentType": "waldo",
  "gender": null,
  "id": "bar",
  "name": null,
  "nationality": null,
  "rejectReason": "quux",
  "rejectedAt": "2020-06-17T13:19:00.000Z",
  "status": "rejected",
  "submitedAt": "2020-06-18T13:19:00.000Z",
  "updatedAt": "2020-06-18T13:19:00.000Z",
  "userId": "waldo"
}
```

### `identity.submit`

*Example:**

#### Request

```js
await slyk.identity.submit('bar');
```

#### Response

```json
{
  "address": {},
  "approvedAt": null,
  "birthDate": null,
  "canceledAt": null,
  "country": "PT",
  "createdAt": "2020-06-17T13:19:00.000Z",
  "customData": { "qux": "quux" },
  "documentNumber": "biz",
  "documentType": "waldo",
  "gender": null,
  "id": "bar",
  "name": null,
  "nationality": null,
  "rejectReason": "quux",
  "rejectedAt": "2020-06-17T13:19:00.000Z",
  "status": "processing",
  "submitedAt": "2020-06-18T13:19:00.000Z",
  "updatedAt": "2020-06-18T13:19:00.000Z",
  "userId": "waldo"
}
```

## IdentityDocument

The result of each one of the following `identityDocument` methods return one or an array of `IdentityDocument` objects that include the following methods:
- `delete`: Deletes the `identityDocument`.

## `identityDocument.create`

Creates an `identityDocument` for the `identity` of the given `identityId`.

**Example:**

#### Request

```js
const identityId = 'bar';

await slyk.identityDocument.create(identityId, { file: 'garply' });
```

#### Response

```json
{
  "createdAt": "2020-03-20T14:30:37.483Z",
  "customData": {},
  "file": { "type": "document", "uploadId": "garply" },
  "id": "foo",
  "identityId": "bar",
  "updatedAt": "2020-03-20T14:30:37.483Z",
}
```

## `identityDocument.delete`

Deletes an `identityDocument` of the given `id` related with the `identity` of the given `identityId`.

**Example:**

#### Request

```js
const id = 'foo';
const identityId = 'bar';

await slyk.identityDocument.delete(id, identityId);
```

#### Response

```json
true
```

## `identityDocument.get`

Gets the `identityDocument` of the given `id` related with the `identity` of the given `identityId`.

**Example:**

#### Request

```js
const id = 'foo';
const identityId = 'bar';

await slyk.identityDocument.get(id, identityId);
```

#### Response

```json
{
  "createdAt": "2020-03-20T14:30:37.483Z",
  "customData": {},
  "file": { "type": "document", "uploadId": "garply" },
  "id": "foo",
  "identityId": "bar",
  "updatedAt": "2020-03-20T14:30:37.483Z",
}
```

## `identityDocument.list`

Lists the `identityDocuments` related with the `identity` of the given `identityId`.

**Example:**

#### Request

```js
const identityId = 'bar';

await slyk.identityDocument.list(identityId, { sort: [{ direction: 'desc', name: 'createdAt' }] });
```

#### Response

```json
{
  "results": [
    {
      "createdAt": "2020-03-20T14:30:37.483Z",
      "customData": {},
      "file": { "type": "document", "uploadId": "garply" },
      "id": "foo",
      "identityId": "bar",
      "updatedAt": "2020-03-20T14:30:37.483Z",
    },
    {
      "createdAt": "2020-03-22T14:30:37.483Z",
      "customData": { "foo": "bar" },
      "file": { "type": "document", "uploadId": "thud" },
      "id": "zyzzy",
      "identityId": "bar",
      "updatedAt": "2020-03-22T14:30:37.483Z",
    }
  ],
  "total": 2
}
```

## invite

The result of each one of the following `invite` methods return one or an array of `Invite` objects that include the following methods:
- `cancel`: Cancels the `invite`.
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

## order

The result of each one of the following `order` methods return one or an array of `Order` objects that include the following methods:
- `cancel`: Cancels the `order`.
- `fulfill`: Fulfills the `order`.
- `fulfillOrderLine`: Fulfills the associated `orderLine` by providing an `id`.
- `getOrderLine`: Returns the associated `orderLine` by providing an `id`.
- `getOrderLines`: Returns the associated `orderLines`.
- `patch`: Patches the `order`.
- `pay`: Pays the `order`.
- `refund`: Refunds the `order`.
- `unfulfill`: Unfulfills the `order`.
- `unfulfillOrderLine`: Unfulfills the associated `orderLine` by providing an `id`.

### `order.cancel`

Cancels the `order` of the given `id`.

**Example:**

#### Request

```js
await slyk.order.cancel('43563311-ab16-4499-95d2-30d9e06ba159', { reason: 'foobar', refundAmount: '2.00000000' });
```

#### Response

```json
true
```

### `order.create`

Creates an `order`.

**Example:**

#### Request

```js
await slyk.order.create({
  chosenPaymentMethod: 'wallet',
  customData: { qux: 'quux' },
  deliveryMethod: 'pickup',
  lines: [{ productId: '8c507367-10e9-4b50-8912-d1b8d37d13d8' }],
  walletId: '5cabbc16-d845-418f-9ecc-7a9fcab99b49'
});
```

#### Response

```json
{
  "amount": "0.00000007",
  "assetCode": "qux",
  "bonus": "0.00000000",
  "bonusAssetCode": null,
  "canceledAt": null,
  "chosenPaymentMethod": "wallet",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "deliveryMethod": "pickup",
  "fulfilledAt": null,
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "netAmount": "0.00000007",
  "orderStatus": "unfulfilled",
  "paidAmount": "0.00000000",
  "paidAt": null,
  "paymentDetails": {
    "remaining": {
      "amount": "0.00000007",
      "assetCode": "qux"
    },
    "wallet": {
      "amount": "0.00000000",
      "assetCode": "qux"
    }
  },
  "paymentStatus": "unpaid",
  "reference": "ATE672BH",
  "taxesAmount": "0.00000000",
  "trackingId": null,
  "unpaidAmount": "0.00000007",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "userId": null,
  "userNotes": "waldo",
  "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
}
```

### `order.fulfill`

Fulfills the `order` of the given `id`.

**Example:**

#### Request

```js
await slyk.order.fulfill('22419f26-6311-4f2e-89e5-05cf96e9bc57');
```

#### Response

```json
{
  "amount": "0.00000007",
  "assetCode": "qux",
  "bonus": "0.00000000",
  "bonusAssetCode": null,
  "canceledAt": null,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "netAmount": "0.00000007",
  "orderStatus": "fulfilled",
  "paidAmount": "0.00000000",
  "paidAt": null,
  "paymentStatus": "unpaid",
  "reference": "ATE672BH",
  "trackingId": null,
  "unpaidAmount": "0.00000007",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "userId": null,
  "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
}
```

### `order.get`

Retrieves the `order` of the given `id`.

**Example:**

#### Request

```js
await slyk.order.get('22419f26-6311-4f2e-89e5-05cf96e9bc57');
```

#### Response

```json
{
  "amount": "0.00000007",
  "assetCode": "qux",
  "bonus": "0.00000000",
  "bonusAssetCode": null,
  "canceledAt": null,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "netAmount": "0.00000007",
  "orderStatus": "fulfilled",
  "paidAmount": "0.00000000",
  "paidAt": null,
  "paymentStatus": "unpaid",
  "reference": "ATE672BH",
  "trackingId": null,
  "unpaidAmount": "0.00000007",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "userId": null,
  "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
}
```

### `order.list`

Retrieves a list `order`.

**Example:**

#### Request

```js
await slyk.order.list({
  filter: { paymentStatus: 'in:unpaid' },
  sort: [{ name: 'fulfilledAt' }]
});
```

#### Response

```json
{
  "results": [
    {
      "amount": "0.00000007",
      "assetCode": "qux",
      "bonus": "0.00000000",
      "bonusAssetCode": null,
      "canceledAt": null,
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": { "qux": "quux" },
      "fulfilledAt": "2019-03-20T14:35:37.483Z",
      "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
      "netAmount": "0.00000007",
      "orderStatus": "fulfilled",
      "paidAmount": "0.00000000",
      "paidAt": null,
      "paymentStatus": "unpaid",
      "reference": "ATE672BH",
      "trackingId": null,
      "unpaidAmount": "0.00000007",
      "updatedAt": "2019-03-20T14:30:37.483Z",
      "userId": null,
      "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
    },
    {
      "amount": "2.00000000",
      "assetCode": "qux",
      "bonus": "0.00000000",
      "bonusAssetCode": null,
      "canceledAt": null,
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": {},
      "fulfilledAt": "2019-03-20T15:40:37.483Z",
      "id": "33319f26-6311-4f2e-89e5-05cf96e9bddd",
      "netAmount": "2.0000000",
      "orderStatus": "fulfilled",
      "paidAmount": "0.00000000",
      "paidAt": null,
      "paymentStatus": "unpaid",
      "reference": "ATE672BH",
      "trackingId": null,
      "unpaidAmount": "2.00000000",
      "updatedAt": "2019-03-20T14:35:37.483Z",
      "userId": null,
      "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
    }
  ],
  "total": 2
}
```

### `order.patch`

Modifies the details of the `order` of the given `id`.

**Example:**

#### Request

```js
await slyk.order.patch('22419f26-6311-4f2e-89e5-05cf96e9bc57', {
  shippingAddress: {
    city: 'foo',
    country: 'bar'
  }
})
```

#### Response

```json
{
  "amount": "0.00000007",
  "assetCode": "qux",
  "bonus": "0.00000000",
  "bonusAssetCode": null,
  "canceledAt": null,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "netAmount": "0.00000007",
  "orderStatus": "fulfilled",
  "paidAmount": "0.00000000",
  "paidAt": null,
  "paymentStatus": "unpaid",
  "reference": "ATE672BH",
  "shippingAddress": {
    "city": "foo",
    "company": "corge",
    "country": "bar",
    "name": "plugh",
    "phoneNumber": "garply"
  },
  "trackingId": null,
  "unpaidAmount": "0.00000007",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "userId": null,
  "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
}
```

### `order.pay`

Pays the `order` of the given `id`.

**Example:**

#### Request

```js
await slyk.order.pay('22419f26-6311-4f2e-89e5-05cf96e9bc57', {
  amount: '0.00000007',
  walletId: '5cabbc16-d845-418f-9ecc-7a9fcab99b49'
});
```

#### Response

```json
{
  "amount": "0.00000007",
  "assetCode": "qux",
  "bonus": "0.00000000",
  "bonusAssetCode": null,
  "canceledAt": null,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "netAmount": "0.00000007",
  "orderStatus": "fulfilled",
  "paidAmount": "0.00000007",
  "paidAt": "2019-04-20T11:30:37.483Z",
  "paymentStatus": "fully_paid",
  "reference": "ATE672BH",
  "trackingId": null,
  "unpaidAmount": "0.00000000",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "userId": null,
  "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
}
```

### `order.refund`

Pays the `order` of the given `id`.

**Example:**

#### Request

```js
await slyk.order.refund('22419f26-6311-4f2e-89e5-05cf96e9bc57', {
  amount: '0.00000007',
  reason: 'foobar'
});
```

#### Response

```json
{
  "amount": "0.00000007",
  "assetCode": "qux",
  "bonus": "0.00000000",
  "bonusAssetCode": null,
  "canceledAt": null,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "netAmount": "0.00000007",
  "orderStatus": "fulfilled",
  "paidAmount": "0.00000000",
  "paidAt": "2019-04-20T11:30:37.483Z",
  "paymentStatus": "fully_refunded",
  "reference": "ATE672BH",
  "refundAmount": "0.00000007",
  "trackingId": null,
  "unpaidAmount": "0.00000007",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "userId": null,
  "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
}
```

### `order.unfulfill`

Pays the `order` of the given `id`.

**Example:**

#### Request

```js
await slyk.order.unfulfill('22419f26-6311-4f2e-89e5-05cf96e9bc57');
```

#### Response

```json
{
  "amount": "0.00000007",
  "assetCode": "qux",
  "bonus": "0.00000000",
  "bonusAssetCode": null,
  "canceledAt": null,
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "netAmount": "0.00000007",
  "orderStatus": "unfulfilled",
  "paidAmount": "0.00000000",
  "paidAt": null,
  "paymentStatus": "unpaid",
  "reference": "ATE672BH",
  "trackingId": null,
  "unpaidAmount": "0.00000000",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "userId": null,
  "walletId": "5cabbc16-d845-418f-9ecc-7a9fcab99b49"
}
```

## orderLine

The result of each one of the following `orderLine` methods return one or an array of `OrderLine` objects that include the following methods:
- `fulfill`: Fulfills the `orderLine`.
- `unfulfill`: Unfulfills the `orderLine`.


### `orderLine.fulfill`

Fulfills the `orderLine` of the given `id`.

**Example:**

#### Request

```js
await slyk.orderLine.fulfill('22419f26-6311-4f2e-89e5-05cf96e9bc57', { quantity: 3 });
```

#### Response

```json
{
  "assetCode": "quux",
  "bonusAssetCode": "quux",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "fulfilledQuantity": 3,
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "orderId": "776e099e-e7c5-4fe9-8509-79c4a74f43f1",
  "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "quantity": 3,
  "status": "fulfilled",
  "unitBonus": "5.00000000",
  "unitNetPrice": "21.00000000",
  "unitPrice": "7.00000000",
  "unitTax": "0.00000000",
  "updatedAt": "2019-03-20T14:35:37.483Z"
}
```

### `orderLine.get`

Retrieves the `orderLine` of the given `id`.

**Example:**

#### Request

```js
await slyk.orderLine.get('22419f26-6311-4f2e-89e5-05cf96e9bc57', { include: { product: true } });
```

#### Response

```json
{
  "assetCode": "quux",
  "bonusAssetCode": "quux",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "fulfilledQuantity": 3,
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "orderId": "776e099e-e7c5-4fe9-8509-79c4a74f43f1",
  "product": {
    "allowChoosingQuantity": false,
    "assetCode": "quux",
    "available": true,
    "bonus": "0.00000000",
    "buttonLabel": "qux",
    "categoryId": "fead8fe9-334e-476a-be17-9c2aa472933e",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "customData": { "plugh": "thud" },
    "description": "xyzzy",
    "featured": true,
    "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
    "image": {
      "external": false,
      "path": "/waldo/fred.png",
      "type": "image",
      "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
      "url": "http://foobar.com/waldo/fred.png"
    },
    "listLabel": "quux",
    "name": "foobiz",
    "price": "7.00000000",
    "requiresIdentity": true,
    "taxRateId": null,
    "thumbnail": {
      "external": false,
      "path": "/quux/qux.png",
      "type": "image",
      "uploadId": "12380c1d-1845-4534-af04-f5a208147ddd",
      "url": "http://foobar.com/quux/qux.png"
    },
    "typeCode": "digital",
    "updatedAt": "2019-03-20T14:30:37.483Z"
  },
  "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "quantity": 3,
  "status": "fulfilled",
  "unitBonus": "5.00000000",
  "unitNetPrice": "21.00000000",
  "unitPrice": "7.00000000",
  "unitTax": "0.00000000",
  "updatedAt": "2019-03-20T14:35:37.483Z"
}
```

### `orderLine.list`

Retrieves a list of `orderLine`.

**Example:**

#### Request

```js
await slyk.orderLine.list({
  page: { number: 2, size: 2 },
  filter: { quantity: 3 },
  sort: [{ name: 'createdAt' }]
});
```

#### Response

```json
{
  "results": [
    {
      "assetCode": "quux",
      "bonusAssetCode": "quux",
      "createdAt": "2019-03-20T14:30:37.483Z",
      "fulfilledAt": "2019-03-20T14:35:37.483Z",
      "fulfilledQuantity": 3,
      "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
      "orderId": "776e099e-e7c5-4fe9-8509-79c4a74f43f1",
      "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
      "quantity": 3,
      "status": "fulfilled",
      "unitBonus": "5.00000000",
      "unitNetPrice": "21.00000000",
      "unitPrice": "7.00000000",
      "unitTax": "0.00000000",
      "updatedAt": "2019-03-20T14:35:37.483Z"
    },
    {
      "assetCode": "quux",
      "bonusAssetCode": "quux",
      "createdAt": "2019-04-20T14:30:37.483Z",
      "fulfilledAt": "2019-04-20T14:35:37.483Z",
      "fulfilledQuantity": 3,
      "id": "33319f26-6311-4f2e-89e5-05cf96e9bddd",
      "orderId": "123e099e-e7c5-4fe9-8509-79c4a74f4abc",
      "productId": "345c43c2-99ab-4f35-9f76-38f482e6bpoi",
      "quantity": 3,
      "status": "partially_fulfilled",
      "unitBonus": "1.00000000",
      "unitNetPrice": "3.00000000",
      "unitPrice": "1.00000000",
      "unitTax": "0.00000000",
      "updatedAt": "2019-04-20T14:35:37.483Z"
    }
  ],
  "total": 6
}
```

### `orderLine.unfulfill`

Unfulfills the `orderLine` of the given `id`.

**Example:**

#### Request

```js
await slyk.orderLine.unfulfill('22419f26-6311-4f2e-89e5-05cf96e9bc57', { quantity: 2 });
```

#### Response

```json
{
  "assetCode": "quux",
  "bonusAssetCode": "quux",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "fulfilledAt": "2019-03-20T14:35:37.483Z",
  "fulfilledQuantity": 1,
  "id": "22419f26-6311-4f2e-89e5-05cf96e9bc57",
  "orderId": "776e099e-e7c5-4fe9-8509-79c4a74f43f1",
  "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "quantity": 3,
  "status": "partially_fulfilled",
  "unitBonus": "5.00000000",
  "unitNetPrice": "21.00000000",
  "unitPrice": "7.00000000",
  "unitTax": "0.00000000",
  "updatedAt": "2019-03-20T14:35:37.483Z"
}
```

## paymentMethod

### `paymentMethod.get`

Returns the `paymentMethod` of the given `slug`.

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

## product

The result of each one of the following `product` methods return one or an array of `Product` objects that include the following methods:
- `createQuestion`: Links a question to the `product`.
- `delete`: Deletes the `product`.
- `deleteQuestion`: Unlinks a question from the `product`.
- `patch`: Patches the `product`.
- `reorder`: Reorders the `product`.
- `reorderQuestion`: Reorders a `product` question.

### `product.create`

Creates a `product`.

**Example:**

#### Request

```js
await slyk.product.create({
  allowChoosingQuantity: true,
  available: true,
  categoryId: '794b19cd-e24e-4ae0-abf9-6bc29b36e351',
  customData: { qux: 'quux' },
  description: 'waldo fred',
  image: "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
  name: 'corge',
  price: '10',
  thumbnail: 'garply',
  visible: true,
  video: "fbd474c9-9d52-4efd-bf87-95983f874665"
});
```

#### Response

```json
{
  "allowChoosingQuantity": true,
  "assetCode": "quux",
  "available": true,
  "bonus": "0.00000000",
  "categoryId": "794b19cd-e24e-4ae0-abf9-6bc29b36e351",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "description": "waldo fred",
  "featured": true,
  "gallery": [
    {
      "image": {
        "external": false,
        "path": "/waldo/fred.png",
        "type": "image",
        "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
        "url": "http://foobar.com/waldo/fred.png"
      }
    }
  ],
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "metadata": { "allowChoosingQuantity": true },
  "name": "corge",
  "price": "10.00000000",
  "requiresIdentity": true,
  "taxRateId": null,
  "thumbnail": {
    "duration": "123",
    "external": false,
    "fileFormat": "video/mp4",
    "path": "foo/qux.mp4",
    "playbackId": "quux",
    "previewUrl": "http://stream/foo",
    "thumbnailUrl": "http://image/foo",
    "type": "video",
    "uploadId": "9f5cf87c-d026-4d9b-9e89-693b6babd954",
    "url": "http://stream/quux"
  },
  "typeCode": "digital",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "video": {
    "duration": "123",
    "external": false,
    "fileFormat": "video/mp4",
    "path": "foo/qux.mp4",
    "playbackId": "quux",
    "previewUrl": "http://stream/foo",
    "thumbnailUrl": "http://image/foo",
    "type": "video",
    "uploadId": "9f5cf87c-d026-4d9b-9e89-693b6babd954",
    "url": "http://stream/quux"
  },
  "visible": true
}
```

### `product.createQuestion`

Links a question to the `product` of the given `id`.

**Example:**

#### Request

```js
await slyk.product.createQuestion('eb9c43c2-99ab-4f35-9f76-38f482e6b724', { questionId: '666b19cd-e24e-4ae0-abf9-6bc29b36ebbb' });
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "questionId": "333c43c2-99ab-4f35-9f76-38f482e6babc",
  "updatedAt": "2019-03-20T14:30:37.483Z",
}
```

### `product.delete`

Deletes the `product` of the given `id`.

**Example:**

#### Request

```js
await slyk.product.delete('eb9c43c2-99ab-4f35-9f76-38f482e6b724');
```

#### Response

```json
true
```

### `product.deleteQuestion`

Unlinks the `question` of the given `questionId` from the `product` of the given `productId`.

**Example:**

#### Request

```js
const productId = 'eb9c43c2-99ab-4f35-9f76-38f482e6b724';
const questionId = '333c43c2-99ab-4f35-9f76-38f482e6babc';
await slyk.product.deleteQuestion(productId, questionId);
```

#### Response

```json
true
```

### `product.get`

Retrieves the `product` of the given `id`.

**Example:**

#### Request

```js
await slyk.product.get('eb9c43c2-99ab-4f35-9f76-38f482e6b724');
```

#### Response

```json
{
  "allowChoosingQuantity": true,
  "assetCode": "quux",
  "available": true,
  "bonus": "0.00000000",
  "categoryId": "794b19cd-e24e-4ae0-abf9-6bc29b36e351",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "description": "waldo fred",
  "featured": true,
  "gallery": [
    {
      "image": {
        "external": false,
        "path": "/waldo/fred.png",
        "type": "image",
        "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
        "url": "http://foobar.com/waldo/fred.png"
      }
    }
  ],
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "metadata": { "allowChoosingQuantity": true },
  "name": "corge",
  "price": "10.00000000",
  "requiresIdentity": true,
  "taxRateId": null,
  "thumbnail": {
    "external": false,
    "path": "/quux/qux.png",
    "type": "image",
    "uploadId": "123bf8d0-c070-492d-92d1-be1dbfcb8ddd",
    "url": "http://foobar.com/quux/qux.png"
  },
  "typeCode": "digital",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "video": {
    "duration": "123",
    "external": false,
    "fileFormat": "video/mp4",
    "path": "foo/qux.mp4",
    "playbackId": "quux",
    "previewUrl": "http://stream/foo",
    "thumbnailUrl": "http://image/foo",
    "type": "video",
    "uploadId": "9f5cf87c-d026-4d9b-9e89-693b6babd954",
    "url": "http://stream/quux"
  },
  "visible": true
}
```

### `product.list`

Retrieves a list of `product`.

**Example:**

#### Request

```js
await slyk.product.list({
  filter: { available: 'true' },
  page: { number: 3, size: 2 },
  sort: [{ name: 'createdAt' }]
});
```

#### Response

```json
{
  "results": [
    {
      "allowChoosingQuantity": true,
      "assetCode": "quux",
      "available": true,
      "bonus": "0.00000000",
      "categoryId": "794b19cd-e24e-4ae0-abf9-6bc29b36e351",
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": { "qux": "quux" },
      "description": "waldo fred",
      "featured": true,
      "gallery": [
        {
          "image": {
            "external": false,
            "path": "/waldo/fred.png",
            "type": "image",
            "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
            "url": "http://foobar.com/waldo/fred.png"
          }
        }
      ],
      "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
      "metadata": { "allowChoosingQuantity": true },
      "name": "corge",
      "price": "10.00000000",
      "requiresIdentity": true,
      "taxRateId": null,
      "thumbnail": {
        "external": false,
        "path": "/waldo/fred.png",
        "type": "image",
        "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
        "url": "http://foobar.com/waldo/fred.png"
      },
      "typeCode": "digital",
      "updatedAt": "2019-03-20T14:30:37.483Z",
      "visible": true
    }
    {
      "allowChoosingQuantity": true,
      "assetCode": "bar",
      "available": true,
      "bonus": "0.00000000",
      "categoryId": "794b19cd-e24e-4ae0-abf9-6bc29b36e351",
      "createdAt": "2019-03-22T14:30:37.483Z",
      "customData": {},
      "description": null,
      "featured": true,
      "id": "123443c2-99ab-4f35-9f76-38f482e6trgc",
      "metadata": { "allowChoosingQuantity": true },
      "name": "garply",
      "price": "10.00000000",
      "requiresIdentity": true,
      "taxRateId": null,
      "thumbnail": {
        "duration": "123",
        "external": false,
        "fileFormat": "video/mp4",
        "path": "foo/qux.mp4",
        "playbackId": "quux",
        "previewUrl": "http://stream/foo",
        "thumbnailUrl": "http://image/foo",
        "type": "video",
        "uploadId": "9f5cf87c-d026-4d9b-9e89-693b6babd954",
        "url": "http://stream/quux"
      },
      "typeCode": "digital",
      "updatedAt": "2019-03-22T14:30:37.483Z",
      "video": {
        "duration": "123",
        "external": false,
        "fileFormat": "video/mp4",
        "path": "foo/qux.mp4",
        "playbackId": "quux",
        "previewUrl": "http://stream/foo",
        "thumbnailUrl": "http://image/foo",
        "type": "video",
        "uploadId": "9f5cf87c-d026-4d9b-9e89-693b6babd954",
        "url": "http://stream/quux"
      },
      "visible": true
    }
  ]
```
### `product.patch`

Patches the `product` of the given `id`.

**Example:**

#### Request

```js
await slyk.product.patch('eb9c43c2-99ab-4f35-9f76-38f482e6b724', {
  allowChoosingQuantity: false,
  available: true,
  customData: { plugh: 'thud' },
  description: 'xyzzy'
});
```

#### Response

```json
{
  "allowChoosingQuantity": false,
  "assetCode": "quux",
  "available": true,
  "bonus": "0.00000000",
  "categoryId": "794b19cd-e24e-4ae0-abf9-6bc29b36e351",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "plugh": "thud" },
  "description": "xyzzy",
  "featured": true,
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "metadata": { "allowChoosingQuantity": true },
  "name": "corge",
  "price": "10.00000000",
  "requiresIdentity": true,
  "taxRateId": null,
  "typeCode": "digital",
  "updatedAt": "2019-03-20T14:30:37.483Z",
  "visible": true
}
```

### `product.reorder`

Reorders the `product` of the given `id`.

**Example:**

#### Request

```js
await slyk.product.reorder('eb9c43c2-99ab-4f35-9f76-38f482e6b724', { subsequentId: '111b19cd-e24e-4ae0-abf9-6bc29b36epoi' });
```

#### Response

```json
true
```

### `product.reorderQuestion`

Reorders the `question` of the given `questionId` linked to the `product` of the given `productId`.

**Example:**

#### Request

```js
const productId = 'eb9c43c2-99ab-4f35-9f76-38f482e6b724';
const questionId = '111b19cd-e24e-4ae0-abf9-6bc29b36epoi';
await slyk.product.reorderQuestion(productId, questionId, { subsequentId: '794b19cd-e24e-4ae0-abf9-6bc29b36e351' });
```

#### Response

```json
true
```

## productCategory

The result of each one of the following `productCategory` methods return one or an array of `ProductCategory` objects that include the following methods:
- `delete`: Deletes the `productCategory`.
- `patch`: Patches the `productCategory`.
- `reorder`: Reorders the `productCategory`.

### `productCategory.create`

Creates a `productCategory`.

**Example:**

#### Request

```js
await slyk.productCategory.create({
  customData: { qux: 'quux' },
  description: 'waldo',
  image: "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
  title: 'garply'
});
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "description": "waldo",
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "image": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
    "url": "http://foobar.com/waldo/fred.png"
  },
  "metadata": {},
  "title": "garply",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `productCategory.delete`

Deletes the `productCategory` of the given `id`.

**Example:**

#### Request

```js
await slyk.productCategory.delete('eb9c43c2-99ab-4f35-9f76-38f482e6b724');
```

#### Response

```json
true
```

### `productCategory.get`

Retrieves the `productCategory` of the given `id`.

**Example:**

#### Request

```js
await slyk.productCategory.get('eb9c43c2-99ab-4f35-9f76-38f482e6b724');
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "description": "waldo",
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "image": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
    "url": "http://foobar.com/waldo/fred.png"
  },
  "metadata": {},
  "title": "garply",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `productCategory.list`

Retrieves a list of `productCategory`.

**Example:**

#### Request

```js
await slyk.productCategory.list({ filter: { title: 'foo' } });
```

#### Response

```json
{
  "results": [
    {
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": { "qux": "quux" },
      "description": "waldo",
      "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
      "image": {
        "external": false,
        "path": "/waldo/fred.png",
        "type": "image",
        "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
        "url": "http://foobar.com/waldo/fred.png"
      },
      "metadata": {},
      "title": "foobar",
      "updatedAt": "2019-03-20T14:30:37.483Z"
    },
    {
      "createdAt": "2019-03-21T14:30:37.483Z",
      "customData": {},
      "description": null,
      "id": "123c43c2-99ab-4f35-9f76-38f482e6bqwe",
      "image": {
        "external": false,
        "path": "/quux/qux.png",
        "type": "image",
        "uploadId": "123bf8d0-c070-492d-92d1-be1dbfcb8ddd",
        "url": "http://foobar.com/quux/qux.png"
      },
      "metadata": {},
      "title": "foobiz",
      "updatedAt": "2019-03-21T14:30:37.483Z"
    }
  ],
  "total": 6
}
```

### `productCategory.patch`

Patches the `productCategory` of the given `id`.

**Example:**

#### Request

```js
await slyk.productCategory.patch('eb9c43c2-99ab-4f35-9f76-38f482e6b724', {
  customData: { foo: 'bar' },
  description: 'foobar',
  image: 'a8dbf8d0-c070-492d-92d1-be1dbfcb859d',
  title: 'foobiz'
});
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "foo": "bar" },
  "description": "foobar",
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "image": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
    "url": "http://foobar.com/waldo/fred.png"
  },
  "metadata": {},
  "title": "foobiz",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `productCategory.reorder`

Reorders the `productCategory` of the given `id`.

**Example:**

#### Request

```js
await slyk.productCategory.reorder('eb9c43c2-99ab-4f35-9f76-38f482e6b724', { subsequentId: '44v543c2-99ab-4f35-9f76-38f482e6babc' });
```

#### Response

```json
true
```

## productImage

The result of each one of the following `productImage` methods return one or an array of `ProductImage` objects that include the following methods:
- `delete`: Deletes the `productImage`.
- `reorder`: Reorders the `productImage`.

### `productImage.create`

Creates a `productImage` for the given `id` product.

**Example:**

#### Request

```js
await slyk.productImage.create('eb9c43c2-99ab-4f35-9f76-38f482e6b724', {
  customData: {},
  image: 'a8dbf8d0-c070-492d-92d1-be1dbfcb859d'
});
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b725",
  "image": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
    "url": "http://foobar.com/waldo/fred.png"
  },
  "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `productImage.delete`

Deletes the `productImage` with the given `id` that belongs to the given `productId`.

**Example:**

#### Request

```js
await slyk.productImage.delete('eb9c43c2-99ab-4f35-9f76-38f482e6b725', 'eb9c43c2-99ab-4f35-9f76-38f482e6b724');
```

#### Response

```json
true
```

### `productImage.get`

Retrieves the `productImage` with the given `id` that belongs to the given `productId`.

**Example:**

#### Request

```js
await slyk.productImage.get('eb9c43c2-99ab-4f35-9f76-38f482e6b725', 'eb9c43c2-99ab-4f35-9f76-38f482e6b724');
```

#### Response

```json
{
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": { "qux": "quux" },
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b725",
  "image": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
    "url": "http://foobar.com/waldo/fred.png"
  },
  "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `productImage.list`

Retrieves a list of `productImage` of the given `productId`.

**Example:**

#### Request

```js
await slyk.productImage.list('eb9c43c2-99ab-4f35-9f76-38f482e6b724', { include: { product: true } });
```

#### Response

```json
{
  "results": [
    {
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": { "qux": "quux" },
      "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b725",
      "image": {
        "external": false,
        "path": "/waldo/fred.png",
        "type": "image",
        "uploadId": "a8dbf8d0-c070-492d-92d1-be1dbfcb859d",
        "url": "http://foobar.com/waldo/fred.png"
      },
      "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
      "updatedAt": "2019-03-20T14:30:37.483Z",
      "product": { ... }
    },
    {
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": { "qux": "quux" },
      "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b726",
      "image": {
        "external": false,
        "path": "/quux/qux.png",
        "type": "image",
        "uploadId": "123bf8d0-c070-492d-92d1-be1dbfcb8ddd",
        "url": "http://foobar.com/quux/qux.png"
      },
      "productId": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
      "updatedAt": "2019-03-20T14:30:37.483Z",
      "product": { ... }
    }
  ],
  "total": 2
}
```

### `productImage.reorder`

Reorders the `productImage` with the given `id` that belongs to the given `productId`.

**Example:**

#### Request

```js
await slyk.productImage.reorder('eb9c43c2-99ab-4f35-9f76-38f482e6b725', 'eb9c43c2-99ab-4f35-9f76-38f482e6b724', { subsequentId: 'eb9c43c2-99ab-4f35-9f76-38f482e6b726' });
```

#### Response

```json
true
```

## question

The result of each one of the following `question` methods return one or an array of `Question` objects that include the following methods:
- `delete`: Deletes the `question`.
- `patch`: Patches the `question`.

### `question.create`

Creates a `question`.

**Example:**

#### Request

```js
await slyk.question.create({
  configurations: { values: ['bar'] },
  customData: {},
  description: '',
  productTypeCode: 'digital',
  title: 'foo',
  typeCode: 'multiple'
})
```

#### Response

```json
{
  "configurations": { "values": ["bar"] },
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": "",
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "jsonSchema": {
    "items": {
      "enum": ["bar"],
      "type": "string"
    },
    "minItems": 1,
    "type": "array"
  },
  "metadata": {},
  "productTypeCode": "digital",
  "required": false,
  "title": "foo",
  "typeCode": "multiple",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `question.delete`

Deletes the `question` of the given `id`.

**Example:**

#### Request

```js
await slyk.question.delete('eb9c43c2-99ab-4f35-9f76-38f482e6b724');
```

#### Response

```json
true
```

### `question.get`

Retrieves the `question` of the given `id`.

**Example:**

#### Request

```js
await slyk.question.get('eb9c43c2-99ab-4f35-9f76-38f482e6b724');
```

#### Response

```json
{
  "configurations": { "values": ["bar"] },
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": "",
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "jsonSchema": {
    "items": {
      "enum": ["bar"],
      "type": "string"
    },
    "minItems": 1,
    "type": "array"
  },
  "metadata": {},
  "productTypeCode": "digital",
  "required": false,
  "title": "foo",
  "typeCode": "multiple",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `question.list`

Retrieves a list of `question`.

**Example:**

#### Request

```js
await slyk.question.list({
  filter: { typeCode: 'single' },
  include: { questionType: true }
});
```

#### Response

```json
{
  "results": [
    {
      "configurations": { "values": ["bar"] },
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": {},
      "description": "",
      "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
      "jsonSchema": {
        "items": {
          "enum": ["bar"],
          "type": "string"
        },
        "minItems": 1,
        "type": "array"
      },
      "metadata": {},
      "productTypeCode": "digital",
      "questionType": {
        "createdAt": "2019-02-20T14:30:37.483Z",
        "code": "single",
        "updatedAt": "2019-02-20T14:30:37.483Z"
      },
      "required": false,
      "title": "foo",
      "typeCode": "single",
      "updatedAt": "2019-03-20T14:30:37.483Z"
    },
    {
      "configurations": { "values": ["foo"] },
      "createdAt": "2019-04-20T14:30:37.483Z",
      "customData": {},
      "description": "",
      "id": "123443c2-99ab-4f35-9f76-38f482e6bdvd",
      "jsonSchema": {
        "items": {
          "enum": ["foo"],
          "type": "string"
        },
        "minItems": 1,
        "type": "array"
      },
      "metadata": {},
      "productTypeCode": "digital",
      "questionType": {
        "createdAt": "2019-02-20T14:30:37.483Z",
        "code": "single",
        "updatedAt": "2019-02-20T14:30:37.483Z"
      },
      "required": false,
      "title": "bar",
      "typeCode": "single",
      "updatedAt": "2019-04-20T14:30:37.483Z"
    }
  ],
  "total": 2
}
```

### `question.patch`

Patches the `question` of the given `id`.

**Example:**

#### Request

```js
await slyk.question.patch('eb9c43c2-99ab-4f35-9f76-38f482e6b724', {
  productTypeCode: 'digital',
  title: 'foo',
  typeCode: 'multiple'
})
```

#### Response

```json
{
  "configurations": { "values": ["bar"] },
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": "",
  "id": "eb9c43c2-99ab-4f35-9f76-38f482e6b724",
  "jsonSchema": {
    "items": {
      "enum": ["bar"],
      "type": "string"
    },
    "minItems": 1,
    "type": "array"
  },
  "metadata": {},
  "productTypeCode": "digital",
  "required": false,
  "title": "foo",
  "typeCode": "multiple",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

## questionType

The result of each one of the following `questionType` methods return one or an array of `QuestionType` objects.

### `question.list`

Retrieves a list of `questionType`.

**Example:**

#### Request


```js
await slyk.questionType.list({
  filter: { code: 'in:quux,waldo' },
  sort: [{ direction: 'desc', name: 'code' }]
});
```

#### Response


```json
{
  "results": [
    {
      "code": "waldo",
      "dashboardJsonSchema": { "foo": "waldo" },
      "jsonSchemaTemplate": {}
    },
    {
      "code": "quux",
      "dashboardJsonSchema": { "foo": "quux" },
      "jsonSchemaTemplate": {}
    }
  ],
  "total": 2
}
```

## rate

The result of each one of the following `rate` methods return one or an array of `Rate` objects that include the following methods:
- `getBaseAsset`: Returns the `asset` of the `rate` `baseAssetCode`.
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
await slyk.rate.list({ filter: { assetCode: 'garply' } });
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

### setting

### `setting.get`

Retrieves the `setting` of the given `code`.

**Example:**

#### Request

```js
await slyk.setting.get('garply');
```

#### Response

```json
{
    "code": "garply",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "description": "corge",
    "public": true,
    "scope": ["qux"],
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "type": "string",
    "value": "grault",
}
```

### `setting.list`

Retrieves a list of `settings`.

**Example:**

#### Request

```js
await slyk.setting.list({
  filter: { code: 'in:foo,garply' },
  sort: [{ name: 'createdAt' }]
});
```

#### Response

```json
{
  "results": [{
    "code": "foo",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "description": "corge",
    "public": true,
    "scope": ["qux"],
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "type": "string",
    "value": "grault",
  }, {
    "code": "garply",
    "createdAt": "2019-03-20T14:30:37.483Z",
    "description": "corge",
    "public": true,
    "scope": ["qux"],
    "updatedAt": "2019-03-20T14:30:37.483Z",
    "type": "string",
    "value": "bar",
  }]
}
```

## task

The result of each one of the following `task` methods return one or an array of `Task` objects that include the following methods:
- `complete`: Completes the `task`.
- `completeSurvey`: Completes a `task` of `type: survey`.
- `delete`: Deletes the `task`.
- `listAnswers`: Retrieves a list of related `taskStepQuestionAnswers`.
- `listSteps`: Retrieves a list of related `taskSteps`.
- `patch`: Patches the `task`.
- `reorder`: Reorders the `task`.

### `task.complete`

Completes the `task` of the given `id`.

**Example:**

#### Request

```js
await slyk.task.complete('deaaee6f-e329-42e0-b85c-e07cd20c0ec5', { userId: 'f02a1bf2-bcc6-49e5-ab8b-895319423aee' });
```

#### Response

```json
true
```

### `task.completeSurvey`

Completes the `task` of the given `id` and `type: survey`.

**Example:**

#### Request

```js
await slyk.task.completeSurvey('deaaee6f-e329-42e0-b85c-e07cd20c0ec5', {
  answers: [
    {
      answer: { description: 'foobar' },
      questionId: '60e76e78-ae00-4a0c-b161-36edc92458df',
      stepId: '2e674dea-c1ea-44cf-8ef6-5927add798bcs'
    }
  ],
  userId: '54e65ef2-6252-43f1-8866-48d26dee63cf'
});
```

#### Response

```json
true
```

### `task.create`

Creates a `task`.

**Example:**

#### Request

```js
await slyk.task.create({
  amount: '2.00000000',
  buttonLabel: 'waldo',
  description: 'biz',
  enabled: true,
  featured: true,
  image: '123bf8d0-c070-492d-92d1-be1dbfcb8ddd',
  name: 'foobar',
  surveyUrl: 'http://qux.com',
  thumbnail: '75e80c1d-1845-4534-af04-f5a2081476b9',
  type: 'manual'
});
```

#### Response

```json
{
  "amount": "2.00000000",
  "buttonLabel": "waldo",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "deletedAt": null,
  "description": "biz",
  "enabled": true,
  "featured": true,
  "id": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
  "image": {
    "external": false,
    "path": "/quux/qux.png",
    "type": "image",
    "uploadId": "123bf8d0-c070-492d-92d1-be1dbfcb8ddd",
    "url": "http://foobar.com/quux/qux.png"
  },
  "name": "foo",
  "surveyUrl": "http://qux.com",
  "thumbnail": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
    "url": "http://foobar.com/waldo/fred.png"
  },
  "type": "manual",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `task.get`

Retrieves the `task` of the given `id`.

**Example:**

#### Request

```js
await slyk.task.get('deaaee6f-e329-42e0-b85c-e07cd20c0ec5');
```

#### Response

```json
{
  "amount": "2.00000000",
  "buttonLabel": "waldo",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "deletedAt": null,
  "description": "biz",
  "enabled": true,
  "featured": true,
  "id": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
  "image": {
    "external": false,
    "path": "/quux/qux.png",
    "type": "image",
    "uploadId": "123bf8d0-c070-492d-92d1-be1dbfcb8ddd",
    "url": "http://foobar.com/quux/qux.png"
  },
  "name": "foo",
  "surveyUrl": "http://qux.com",
  "thumbnail": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
    "url": "http://foobar.com/waldo/fred.png"
  },
  "type": "manual",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `task.getStatistics`

Retrieves the `tasks` statistics for the `user` of the given `id`.

**Example:**

#### Request

```js
const userId = '97404926-0068-4cd2-b27f-c95a442d0328';

await slyk.task.getStatistics(userId, { sort: [{ direction: 'asc', name: 'name' }] });
```

#### Response

```json
{
  "available": {
    "data": [
      {
        "amount": "5.50000000",
        "buttonLabel": "quux",
        "createdAt": "2019-03-20T14:30:37.483Z",
        "customData": {},
        "deletedAt": null,
        "description": "bar",
        "enabled": true,
        "featured": true,
        "id": "123aee6f-e329-42e0-b85c-e07cd20c0bbb",
        "name": "foobar",
        "surveyUrl": null,
        "type": "manual",
        "updatedAt": "2019-03-20T14:30:37.483Z"
      }
    ],
    "gauge": "5.50000000",
    "total": 1
  },
  "completed": {
    "data": [
      {
        "amount": "2.50000000",
        "buttonLabel": "fred",
        "createdAt": "2019-03-20T14:30:37.483Z",
        "customData": {},
        "deletedAt": null,
        "description": null,
        "enabled": true,
        "featured": true,
        "id": "fffaee6f-e329-42e0-b85c-e07cd20c0456",
        "name": "fred",
        "surveyUrl": "http://qux.com",
        "type": "manual",
        "updatedAt": "2019-03-20T14:30:37.483Z"
      },
      {
        "amount": "2.00000000",
        "buttonLabel": "waldo",
        "createdAt": "2019-03-20T14:30:37.483Z",
        "customData": {},
        "deletedAt": null,
        "description": "biz",
        "enabled": true,
        "featured": true,
        "id": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
        "name": "waldo",
        "surveyUrl": null,
        "type": "manual",
        "updatedAt": "2019-03-20T14:30:37.483Z"
      }
    ],
    "gauge": "4.50000000",
    "total": 2
  }
}
```

### `task.list`

Retrieves a list of `task`.

**Example:**

#### Request

```js
await slyk.task.list({
  filter: { enabled: true },
  sort: [{ direction: 'desc', name: 'amount' }],
  page: { number: 3, size: 2 }
});
```

#### Response

```json
{
  "results": [
    {
      "amount": "5.50000000",
      "buttonLabel": "quux",
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": {},
      "deletedAt": null,
      "description": "bar",
      "enabled": true,
      "featured": true,
      "id": "123aee6f-e329-42e0-b85c-e07cd20c0bbb",
      "image": {
        "external": false,
        "path": "/quux/qux.png",
        "type": "image",
        "uploadId": "123bf8d0-c070-492d-92d1-be1dbfcb8ddd",
        "url": "http://foobar.com/quux/qux.png"
      },
      "name": "qux",
      "surveyUrl": "http://qux.com",
      "thumbnail": {
        "external": false,
        "path": "/waldo/fred.png",
        "type": "image",
        "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
        "url": "http://foobar.com/waldo/fred.png"
      },
      "type": "manual",
      "updatedAt": "2019-03-20T14:30:37.483Z"
    },
    {
      "amount": "2.00000000",
      "buttonLabel": "waldo",
      "createdAt": "2019-03-20T14:30:37.483Z",
      "customData": {},
      "deletedAt": null,
      "description": "biz",
      "enabled": true,
      "featured": true,
      "id": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
      "name": "foo",
      "surveyUrl": "http://biz.com",
      "type": "manual",
      "updatedAt": "2019-03-20T14:30:37.483Z"
    }
  ],
  "total": 6
}
```

### `task.listAnswers`

Retrieves a list of `taskStepQuestionAnswers` related with the `task` of the given `id`.

**Example:**

#### Request

```js
const id = 'c6b2ee3c-a2ba-4710-9644-df0c04e4963b';

await slyk.task.list({
  filter: { userId: '813226b3-39d0-4ae9-a050-fd8b66922465' },
  sort: [{ direction: 'desc', name: 'createdAt' }],
  page: { number: 3, size: 2 }
});
```

#### Response

```json
{
  "results": [
    {
      "answer": {
        "answerDescription": "waldo",
        "questionDescription": "waldo"
      },
      "createdAt": "2020-03-10T11:30:00.000Z",
      "description": "qux",
      "id": "5b2e0879-471b-4808-b7f0-bc5a267852d4",
      "questionId": "cb62db48-61ed-4159-a9b4-d7d2bccd4560",
      "updatedAt": "2020-03-10T11:30:00.000Z",
      "userId": "813226b3-39d0-4ae9-a050-fd8b66922465"
    },
    {
      "answer": {
        "answerDescription": "qux",
        "questionDescription": "qux"
      },
      "createdAt": "2020-03-10T11:30:00.000Z",
      "description": "foo",
      "id": "94fe6313-1734-4456-85ab-5a4c5c1a8899",
      "questionId": "633146a0-74be-4f31-b03f-4345858ddc92",
      "updatedAt": "2020-03-10T11:30:00.000Z",
      "userId": "813226b3-39d0-4ae9-a050-fd8b66922465"
    }
  ],
  "total": 6
}
```

### `task.patch`

Patches the `task` of the given `id`.

**Example:**

#### Request

```js
await slyk.task.patch('deaaee6f-e329-42e0-b85c-e07cd20c0ec5', {
  amount: '2.00000000',
  enabled: true,
  name: 'foo'
});
```

#### Response

```json
{
  "amount": "2.00000000",
  "buttonLabel": "waldo",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "deletedAt": null,
  "description": "biz",
  "enabled": true,
  "featured": true,
  "id": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
  "name": "foo",
  "surveyUrl": "http://qux.com",
  "type": "manual",
  "updatedAt": "2019-03-20T14:30:37.483Z"
}
```

### `task.reorder`

Reorders the `task` of the given `id`.

**Example:**

#### Request

```js
await slyk.task.reorder('deaaee6f-e329-42e0-b85c-e07cd20c0ec5', { subsequentId: '123aee6f-e329-42e0-b85c-e07cd20c0bbb' });
```

#### Response

```json
true
```

## taskStep

The result of each one of the following `taskStep` methods return one or an array of `TaskStep` objects that include the following methods:
- `questions`: Gets a list of related `taskStepQuestions`;
- `patch`: Patches the `taskStep`.

### `taskStep.get`

Retrieves the `taskStep` of the given `id`.

**Example:**

#### Request

```js
await slyk.taskStep.get('fc78d28f-a8dd-49de-a22f-722fe3bd26c7', 'deaaee6f-e329-42e0-b85c-e07cd20c0ec5', { include: 'questions' });
```

#### Response

```json
{
  "createdAt": "2020-03-10T11:30:00.000Z",
  "customData": {},
  "description": "qux",
  "id": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
  "questions": [{
    "createdAt": "2020-03-10T11:30:00.000Z",
    "customData": {},
    "description": "quux",
    "id": "waldo",
    "optional": false,
    "options": ["foo", "bar"],
    "stepId": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
    "type": "radio_button",
    "updatedAt": "2020-03-10T11:30:00.000Z",
    "video": {
      "playbackId": "plugh",
      "status": "completed",
      "type": "video",
      "uploadId": "plugh",
      "url": "http://plugh.url"
    }
  }],
  "taskId": "fc78d28f-a8dd-49de-a22f-722fe3bd26c7",
  "title": "foobar",
  "updatedAt": "2020-03-10T11:30:00.000Z"
}
```

### `taskStep.list`

Retrieves a list of `taskStep`.

**Example:**

#### Request

```js
await slyk.taskStep.list('fc78d28f-a8dd-49de-a22f-722fe3bd26c7', {
  filter: { description: 'foo' },
  include: 'questions',
  sort: [{ direction: 'desc', name: 'createdAt' }],
  page: { number: 3, size: 2 }
});
```

#### Response

```json
{
  "results": [
    {
      "createdAt": "2020-03-10T11:30:00.000Z",
      "customData": {},
      "description": "qux",
      "id": "ppp8d28f-a8dd-49de-a22f-722fe3bd2456",
      "questions": [{
        "createdAt": "2020-03-10T11:30:00.000Z",
        "customData": {},
        "description": "quux",
        "id": "waldo",
        "optional": false,
        "options": ["foo", "bar"],
        "stepId": "po08d28f-a8dd-49de-a22f-722fe3bd26o9",
        "type": "radio_button",
        "updatedAt": "2020-03-10T11:30:00.000Z",
        "video": {
          "playbackId": "plugh",
          "status": "completed",
          "type": "video",
          "uploadId": "plugh",
          "url": "http://plugh.url"
        }
      }],
      "taskId": "fc78d28f-a8dd-49de-a22f-722fe3bd26c7",
      "title": "foobar",
      "updatedAt": "2020-03-10T11:30:00.000Z"
    },
    {
      "createdAt": "2020-03-10T11:30:00.000Z",
      "customData": {},
      "description": "foo",
      "id": "1238d28f-a8dd-49de-a22f-722fe3bd26c7",
      "questions": [{
        "createdAt": "2020-03-10T11:30:00.000Z",
        "customData": {},
        "description": "quux",
        "id": "der8d28f-a8dd-49de-a22f-722fe3bd2901",
        "optional": true,
        "options": null,
        "stepId": "1238d28f-a8dd-49de-a22f-722fe3bd2456",
        "type": "open_text",
        "updatedAt": "2020-03-10T11:30:00.000Z",
        "video": { "url": "http://foo.com" }
      }],
      "taskId": "fc78d28f-a8dd-49de-a22f-722fe3bd26c7",
      "title": "foobiz",
      "updatedAt": "2020-03-10T11:30:00.000Z"
    }
  ],
  "total": 6
}
```

### `taskStep.patch`

Patches the `taskStep` of the given `id`.

**Example:**

#### Request

```js
await slyk.taskStep.patch('fc78d28f-a8dd-49de-a22f-722fe3bd26c7', 'deaaee6f-e329-42e0-b85c-e07cd20c0ec5', {
  description: 'foobar',
  title: 'foobar'
});
```

#### Response

```json
{
  "createdAt": "2020-03-10T11:30:00.000Z",
  "customData": {},
  "description": "qux",
  "id": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
  "questions": [{
    "createdAt": "2020-03-10T11:30:00.000Z",
    "customData": {},
    "description": "quux",
    "id": "waldo",
    "optional": false,
    "options": ["foo", "bar"],
    "stepId": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
    "type": "radio_button",
    "updatedAt": "2020-03-10T11:30:00.000Z",
    "video": {
      "playbackId": "plugh",
      "status": "completed",
      "type": "video",
      "uploadId": "plugh",
      "url": "http://plugh.url"
    }
  }],
  "taskId": "fc78d28f-a8dd-49de-a22f-722fe3bd26c7",
  "title": "foobar",
  "updatedAt": "2020-03-10T11:30:00.000Z"
}
```

## taskStepQuestion

The result of each one of the following `taskStepQuestion` methods return one or an array of `TaxStepQuestion` objects.

### `taskStepQuestion.list`

Retrieves a list of `taskStepQuestion`.

**Example:**

#### Request

```js
await slyk.taskStepQuestion.list('fc78d28f-a8dd-49de-a22f-722fe3bd26c7', 'deaaee6f-e329-42e0-b85c-e07cd20c0ec5', {
  filter: { type: 'in:open_text,radio_button' },
  sort: [{ direction: 'desc', name: 'createdAt' }],
  page: { number: 3, size: 2 }
});
```

#### Response

```json
{
  "results": [
    {
      "createdAt": "2020-03-10T11:30:00.000Z",
      "customData": {},
      "description": "quux",
      "id": "1238d28f-a8dd-49de-a22f-722fe3bd2ddd",
      "optional": false,
      "options": null,
      "stepId": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
      "type": "open_text",
      "updatedAt": "2020-03-10T11:30:00.000Z",
      "video": {
        "playbackId": "plugh",
        "status": "completed",
        "type": "video",
        "uploadId": "plugh",
        "url": "http://plugh.url"
      }
    },
    {
      "createdAt": "2020-03-10T11:30:00.000Z",
      "customData": {},
      "description": "quux",
      "id": "3d3aa210-2d22-4072-ab57-5d9be3fd15d8",
      "optional": false,
      "options": ["foo", "bar"],
      "stepId": "deaaee6f-e329-42e0-b85c-e07cd20c0ec5",
      "type": "radio_button",
      "updatedAt": "2020-03-10T11:30:00.000Z",
      "video": {
        "playbackId": "plugh",
        "status": "completed",
        "type": "video",
        "uploadId": "plugh",
        "url": "http://plugh.url"
      }
    }
  ],
  "total": 2
}
```

## taxRate

The result of each one of the following `taxRate` methods return one or an array of `TaxRate` objects that include the following methods:
- `delete`: Deletes the `taxRate`.
- `patch`: Patches the `taxRate`.

### `taxRate.create`

Creates a `taxRate`.

**Example:**

#### Request

```js
await slyk.taxRate.create({ name: 'bar', rate: '5.00000000' });
```

#### Response

```json
{
  "id": "foo",
  "name": "bar",
  "rate": "5.00000000"
}
```

### `taxRate.delete`

Deletes the `taxRate` of the given `id`.

**Example:**

#### Request

```js
await slyk.taxRate.delete('d30eacc4-8896-4376-b171-c374cbdb7681');
```

#### Response

```json
true
```

### `taxRate.get`

Retrieves the `taxRate` of the given `id`.

**Example:**

#### Request

```js
await slyk.taxRate.get('d30eacc4-8896-4376-b171-c374cbdb7681');
```

#### Response

```json
{
  "id": "d30eacc4-8896-4376-b171-c374cbdb7681",
  "name": "bar",
  "rate": "5.00000000"
}
```

### `taxRate.list`

Retrieves a list of `taxRate`.

**Example:**

#### Request

```js
await slyk.taxRate.list({
  page: { number: 2, size: 2 },
  sort: [{ name: 'name' }]
});
```

#### Response

```json
{
  "results": [
    {
      "id": "d30eacc4-8896-4376-b171-c374cbdb7681",
      "name": "bar",
      "rate": "5.00000000"
    },
    {
      "id": "fffeacc4-8896-4376-b171-c374cbdb7333",
      "name": "foo",
      "rate": "1.50000000"
    }
  ],
  "total": 4
}
```

### `taxRate.patch`

Patches the `taxRate` of the given `id`.

**Example:**

#### Request

```js
await slyk.taxRate.patch('d30eacc4-8896-4376-b171-c374cbdb7681', { name: 'foo', rate: '5.00000000' });
```

#### Response

```json
{
  "id": "d30eacc4-8896-4376-b171-c374cbdb7681",
  "name": "foo",
  "rate": "5.00000000"
}
```
## transaction

The result of each one of the following `transaction` methods return one or an array of `Transaction` objects that include the following methods:
- `approve`: Approves the `transaction`.
- `confirm`: Confirms the `transaction`.
- `fail`: Fails the `transaction`.
- `getAsset`: Returns the `asset` of the `transaction` `assetCode`.
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

### `transaction.request`

Creates a new `request` `transaction` that accepts either an `originWalletId` an `originEmail` an `originPhone` or none.

**Example:**

#### Request

```js
await slyk.transaction.request({
  amount: '1',
  assetCode: 'garply',
  destinationWalletId: 'rtr0452a-062c-45ce-aaf5-dd19e38c7999',
  originWalletId: '1ef0452a-062c-45ce-aaf5-dd19e38c7711'
});
```

#### Response

```json
{
  "amount": "1.00000000",
  "assetCode": "garply",
  "code": "request",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "rtr0452a-062c-45ce-aaf5-dd19e38c7999",
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

### `transaction.send`

Creates a new `send` `transaction` that accepts either a `destinationWalletId` a `destinationEmail` a `destinationPhone` or none.

**Example:**

#### Request

```js
await slyk.transaction.send({
  amount: '1',
  assetCode: 'garply',
  destinationWalletId: 'rtr0452a-062c-45ce-aaf5-dd19e38c7999',
  originWalletId: '1ef0452a-062c-45ce-aaf5-dd19e38c7711'
});
```

#### Response

```json
{
  "amount": "1.00000000",
  "assetCode": "garply",
  "code": "send",
  "createdAt": "2019-03-20T14:30:37.483Z",
  "customData": {},
  "description": null,
  "destinationAddress": null,
  "destinationWalletId": "rtr0452a-062c-45ce-aaf5-dd19e38c7999",
  "externalId": null,
  "externalReference": null,
  "id": "43563311-ab16-4499-95d2-30d9e06ba159",
  "metadata": {},
  "originAddress": null,
  "originWalletId": "1ef0452a-062c-45ce-aaf5-dd19e38c7711",
  "processedAt": null,
  "reference": null,
  "status": "confirmed",
  "type": "transfer",
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
- `changeEmail`: Initializes a change email process of the `user`.
- `changePassword`: Changes the `user` the password.
- `changePhone`: Initializes a change phone process of the `user`.
- `getInvites`: Returns the `invites` of the `user`.
- `getWallets`: Returns the `wallets` of the `user`.
- `getPrimaryWallet`: Returns the `wallet` of the `user` `primaryWalletId`.
- `getReferralProgram`: Returns the provided referral program from the `user` of the given `id`.
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

### `user.changeEmail`

Initializes `user` change email process.

**Example:**

#### Request

```js
await slyk.user.changeEmail('5e101529-fa30-4415-9945-6540e70c4483', { email: 'foo@bar.com' });
```

#### Response

```json
{
  "token": "foobar"
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

### `user.changePhone`

Initializes `user` change phone process.

**Example:**

#### Request

```js
await slyk.user.changePhone('5e101529-fa30-4415-9945-6540e70c4483', { countryCode: 'PT', phone: '+123456789' });
```

#### Response

```json
{
  "token": "123456"
}
```

### `user.confirmEmail`

Confirms the `user` email.

**Example:**

#### Request

```js
await slyk.user.confirmEmail({ token: 'foobar' });
```

#### Responses

```json
{
  "refreshToken": "waldo",
  "token": "fred"
}
```

```json
true
```

### `user.confirmPhone`

Confirms the `user` phone.

**Example:**

#### Request

```js
await slyk.user.confirmPhone({ code: '123456', phone: '+123456789' });
```

#### Responses

```json
{
  "refreshToken": "waldo",
  "token": "fred"
}
```

```json
true
```

### `user.create`

Creates a new `user`.

**Example:**

#### Request

```js
await slyk.user.create({
  email: 'foo@bar.com',
  image: '75e80c1d-1845-4534-af04-f5a2081476b9',
  password: 'waldo'
});
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
  "image": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
    "url": "http://foobar.com/waldo/fred.png"
  },
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

### `user.forgotPassword`

Sends a reset password token to the provided `email` or `phone`.

**Example:**

#### Request

```js
await slyk.user.forgotPassword({ email: 'foo@bar.com' });
```

#### Response

```json
{
  "token": "foobar"
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
  "image": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
    "url": "http://foobar.com/waldo/fred.png"
  },
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

### `user.getReferralProgram`

Returns the referral program of the given `program` from the `user` of the given `id`.

**Example:**

#### Request

```js
const id = '5e101529-fa30-4415-9945-6540e70c4483';
const program = 'foobar';

await slyk.user.getReferralProgram(id, program, { page: { size: 2 } });
```

#### Response

```json
{
  "data": [
    {
      "approved": true,
      "blocked": false,
      "createdAt": "2019-07-17T11:39:26.732Z",
      "customData": {},
      "email": "qux@quux.com",
      "id": "8d31a884-7fa3-469a-a7cb-12f95895c487",
      "image": {
        "external": false,
        "path": "/waldo/fred.png",
        "type": "image",
        "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
        "url": "http://foobar.com/waldo/fred.png"
      },
      "locale": "pt",
      "name": "qux",
      "participated": true,
      "phone": "+35191333333333",
      "primaryWalletId": "f90b0f21-e0a8-43ff-81c2-da42a5a6ca6e",
      "referralCode": "R87654321",
      "referralEarn": [{ "amount": "1.00000000", "assetCode": "eth" }],
      "referralUserId": "fbae3912-eb42-4359-b100-e64fa9ad4f16",
      "roles": ["user"],
      "updatedAt": "2019-07-17T11:39:26.732Z",
      "verified": true
    },
    {
      "approved": true,
      "blocked": false,
      "createdAt": "2019-07-17T11:39:26.732Z",
      "customData": {},
      "email": "waldo@fred.com",
      "id": "6a033189-7228-4ce9-b507-598e140de131",
      "image": {
        "external": false,
        "path": "/quux/qux.png",
        "type": "image",
        "uploadId": "12380c1d-1845-4534-af04-f5a208147ddd",
        "url": "http://foobar.com/quux/qux.png"
      },
      "locale": "pt",
      "name": "waldo",
      "participated": false,
      "phone": "+351911111111",
      "primaryWalletId": "32daa33f-1ee3-464b-be9e-10c2ab85e4bd",
      "referralCode": "R18273645",
      "referralEarn": [],
      "referralUserId": "fbae3912-eb42-4359-b100-e64fa9ad4f16",
      "roles": ["user"],
      "updatedAt": "2019-07-17T11:39:26.732Z",
      "verified": true,
    },
    {
      "approved": true,
      "blocked": false,
      "createdAt": "2019-07-17T11:39:26.732Z",
      "customData": {},
      "email": "quux@qux.com",
      "id": "12333189-7228-4ce9-b507-598e140deddd",
      "locale": "pt",
      "name": "qux",
      "participated": false,
      "phone": "+35192222222",
      "primaryWalletId": "987aa33f-1ee3-464b-be9e-10c2ab85ezxc",
      "referralCode": "R555443322",
      "referralEarn": [
        { "amount": "3.00000000", "assetCode": "btc" },
        { "amount": "1.50000000", "assetCode": "eth" }
      ],
      "referralUserId": "fbae3912-eb42-4359-b100-e64fa9ad4f16",
      "roles": ["user"],
      "updatedAt": "2019-07-17T11:39:26.732Z",
      "verified": true,
    },
  ],
  "total": 3,
  "totalEarned": [
    { "amount": "3.00000000", "assetCode": "btc" },
    { "amount": "2.50000000", "assetCode": "eth" },
  ]
}
```

### `user.delete`

Deletes the `user` of the given `id`.

**Example:**

#### Request

```js
await slyk.user.delete('5e101529-fa30-4415-9945-6540e70c4483');
```

#### Response

```json
true
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
    "image": {
      "external": false,
      "path": "/waldo/fred.png",
      "type": "image",
      "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
      "url": "http://foobar.com/waldo/fred.png"
    },
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
    "image": {
      "external": false,
      "path": "/quux/qux.png",
      "type": "image",
      "uploadId": "12380c1d-1845-4534-af04-f5a208147ddd",
      "url": "http://foobar.com/quux/qux.png"
    },
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
  "image": {
    "external": false,
    "path": "/waldo/fred.png",
    "type": "image",
    "uploadId": "75e80c1d-1845-4534-af04-f5a2081476b9",
    "url": "http://foobar.com/waldo/fred.png"
  },
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

### `user.resendConfirmation`

Returns a confirmation token for the provided `email` or `phone`.

**Example:**

#### Request

```js
await slyk.user.resendConfirmation({ phone: '+123456789' });
```

#### Response

```json
{
  "token": "123456"
}
```


### `user.resetPassword`

Resets user password.

**Example:**

#### Request

```js
await slyk.user.resetPassword({ password: 'Foobar123', token: '123456' });
```

#### Response

```json
true
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

## webhook

The result of each one of the following `webhook` methods return one or an array of `Webhook` objects that include the following methods:
- `delete`: Deletes the `webhook`.
- `patch`: Patches the `webhook`.

### `webhook.create`

Subscribes a list of `webhook` events.

**Example:**

#### Request

```js
await slyk.webhook.create({
  description: 'waldo',
  enabled: true,
  events: ['transaction.deposit.confirmed'],
  url: 'https://foo.bar/qux'
});
```

#### Response

```json
{
  "createdAt": "2021-04-29T12:00:00.000Z",
  "description": "waldo",
  "enabled": true,
  "id": "25d81706-b15f-49a5-a4e3-c301cb3dc50a",
  "events": ["transaction.deposit.confirmed"],
  "url": "https://foo.bar/qux"
}
```

### `webhook.delete`

Deletes the `webhook` of the given `id`.

**Example:**

#### Request

```js
await slyk.webhook.delete('4b1a22bf-642c-4c4f-bfb4-678e59121e74');
```

#### Response

```json
true
```

### `webhook.get`

Returns the `webhook` of the given `id`.

**Example:**

#### Request

```js
await slyk.webhook.get('4b1a22bf-642c-4c4f-bfb4-678e59121e74');
```

#### Response

```json
{
  "createdAt": "2021-04-29T12:00:00.000Z",
  "description": "waldo",
  "enabled": true,
  "id": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
  "events": ["transaction.deposit.confirmed"],
  "url": "https://foo.bar/qux"
}
```

### `webhook.list`

Returns a list of `webhook`.

**Example:**

#### Request

```js
await slyk.webhook.list({ filter: { enabled: true } });
```

#### Response

```json
{
  "results": [
    {
      "createdAt": "2021-04-29T12:00:00.000Z",
      "description": "waldo",
      "enabled": true,
      "id": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
      "events": ["transaction.deposit.confirmed"],
      "url": "https://foo.bar/qux"
    },
    {
      "createdAt": "2021-04-29T12:00:00.000Z",
      "description": "fred",
      "enabled": true,
      "id": "331a22bf-642c-4c4f-bfb4-678e59121ebb",
      "events": ["transaction.deposit.created"],
      "url": "https://foo.bar/thud"
    }
  ],
  "total": 2
}
```

### `webhook.patch`

Patches the `webhook` of the given `id`.

**Example:**

#### Request

```js
await slyk.webhook.patch('4b1a22bf-642c-4c4f-bfb4-678e59121e74', { enabled: false });
```

#### Response

```json
{
  "createdAt": "2021-04-29T12:00:00.000Z",
  "description": "waldo",
  "enabled": false,
  "id": "4b1a22bf-642c-4c4f-bfb4-678e59121e74",
  "events": ["transaction.deposit.confirmed"],
  "url": "https://foo.bar/qux"
}
```
