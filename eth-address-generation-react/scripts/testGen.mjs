import * as path from "path";
import * as url from "url";
import * as fs from "fs";

import {
  getPrivateKey,
  getPublicKey,
  getEthAddress,
} from "../src/lib/tools.mjs";

const main = async () => {
  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

  const output = [];
  const outputPath = path.join(__dirname, "keys.txt");
  const numEthAddress = 3;

  for (let i = 0; i < numEthAddress; ++i) {
    const { privateKey, privateKeyHex } = getPrivateKey();
    const { publicKey, publicKeyHex } = getPublicKey(privateKey);
    const ethAddress = getEthAddress(publicKey);

    output.push({
      privateKey: privateKeyHex,
      publicKey: publicKeyHex,
      ethAddress: ethAddress,
    });
  }

  console.log(output);

  await fs.promises.writeFile(outputPath, JSON.stringify(output));

  console.log(`Written to ${outputPath} successfully`);
};

main();
