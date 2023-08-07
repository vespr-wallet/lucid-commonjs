<p align="center">
  <img width="100px" src="./logo/lucid.svg" align="center"/>
  <h1 align="center">Lucid</h1>
  <p align="center">
This is a fork of <a href="https://github.com/spacebudz/lucid">lucid-cardano</a> compiled into CommonJS.
</p>
<p align="center">
For details about documentation go to the original repo and check the documentation.
</p>

### Disclaimer
 This package may not work on Deno or Browser in contrast with the original repo.
 This fork arises from the need of having a CJS build of lucid. 

### Get started

#### NPM

```
npm install @vespr-wallet/lucid-cardano
```

#### Deno 🦕

For JavaScript and TypeScript

```js
import { Lucid } from "https://deno.land/x/lucid@0.10.7/mod.ts";
```

#### Web

```html
<script type="module">
import { Lucid } from "https://unpkg.com/lucid-cardano@0.10.7/web/mod.js"
// ...
</script>
```

### 

### Build from source

Build NPM and Web target

```
deno task build
```

Outputs a `dist` folder

### Examples

- [Basic examples](./src/examples/)
- [Next.js Blockfrost Proxy API Example](https://github.com/GGAlanSmithee/cardano-lucid-blockfrost-proxy-example)

### Basic usage

```js
// import { Blockfrost, Lucid } from "https://deno.land/x/lucid@0.10.7/mod.ts"; Deno
import { Blockfrost, Lucid } from "lucid-cardano"; // NPM

const lucid = await Lucid.new(
  new Blockfrost("https://cardano-preview.blockfrost.io/api/v0", "<projectId>"),
  "Preview",
);

// Assumes you are in a browser environment
const api = await window.cardano.nami.enable();
lucid.selectWallet(api);

const tx = await lucid.newTx()
  .payToAddress("addr...", { lovelace: 5000000n })
  .complete();

 Contributions are welcomed



### Get started

#### NPM

```
npm install @vespr-wallet/lucid-cardano
```
