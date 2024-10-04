import fileFormats from "./fileFormats.js";
import fs from "fs/promises";

await fs.mkdir(`./Test`);
let allFormats = [] ;
for(let key of Object.keys(fileFormats)) {
    allFormats = allFormats.concat(fileFormats[key]);
}

allFormats.map(format => fs.writeFile(`./Test/index.${format}`, ''));

await fs.mkdir(`./Test/Settingsdfasd`);
await fs.mkdir(`./Test/Setting`);
await fs.writeFile(`./Test/Setting/test.set`, '')
await fs.mkdir(`./Test/Setting/testrun`);
await fs.writeFile(`./Test/Setting/testrun/check.set`, '')
await fs.mkdir(`./Test/Setting/testrun/checkrun`);
await fs.writeFile(`./Test/Setting/testrun/checkrun/work.hat`, '')
await fs.writeFile(`./Test/Setting/testrun/checkrun/running.js`, '')