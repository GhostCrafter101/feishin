const fs = require("fs");

const template = fs.readFileSync("settings.js.template", "utf8");

const settings = template.replace(/\$\{([A-Z0-9_]+)\}/g, (_, key) => {
  return process.env[key] ?? "";
});

fs.writeFileSync("out/web/settings.js", settings);

console.log("Generated out/web/settings.js");
console.log("SERVER_URL:", process.env.SERVER_URL);
console.log("SERVER_TYPE:", process.env.SERVER_TYPE);
console.log("SERVER_NAME:", process.env.SERVER_NAME);
console.log("SERVER_LOCK:", process.env.SERVER_LOCK);
