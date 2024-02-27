import fs from "fs";

const dir = "./src/elements/icons";

const files = fs.readdirSync(dir, "utf8");
console.log({ files });
