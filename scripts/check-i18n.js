const fs = require("fs");
const path = require("path");

const pairs = [
  ["README.md", "README.en.md"],
  ["content/README.md", "en/content/README.md"],
  ["glossary/README.md", "en/glossary/README.md"],
  ["guides/投资入门指南.md", "en/guides/investing-for-beginners.md"],
];

for (const category of ["stocks", "options", "crypto"]) {
  const dir = path.join("content", category);
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith(".md")).sort()) {
    pairs.push([
      path.join("content", category, file),
      path.join("en", "content", category, file),
    ]);
  }
}

let missing = [];

for (const [source, target] of pairs) {
  if (!fs.existsSync(source)) {
    console.error(`Missing source: ${source}`);
    process.exitCode = 1;
    continue;
  }
  if (!fs.existsSync(target)) {
    missing.push([source, target]);
  }
}

const completed = pairs.length - missing.length;

console.log(`i18n pairs: ${completed}/${pairs.length} completed`);

if (missing.length) {
  console.log(`missing English counterparts: ${missing.length}`);
  for (const [source, target] of missing.slice(0, 80)) {
    console.log(`${source} -> ${target}`);
  }
  if (missing.length > 80) {
    console.log(`... ${missing.length - 80} more`);
  }
  process.exitCode = 1;
} else {
  console.log("all English counterparts exist");
}
