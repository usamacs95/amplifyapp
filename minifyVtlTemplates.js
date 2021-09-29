const fs = require("fs");

const folder = "./amplify/backend/api/amplifyappTestGraphql/build/resolvers";
const folder2 =
  "./amplify/#current-cloud-backend/api/amplifyappTestGraphql/build/resolvers";

fs.readdirSync(folder).forEach((file) => {
  let vtl = fs.readFileSync(folder + "/" + file, { encoding: "utf8" });

  vtl = vtl.replace(/ +/g, " ");
  // Remove comments
  vtl = vtl.replace(/##.*/g, "");
  // Remove double newlines
  vtl = vtl.replace(/\n+/g, "\n");

  fs.writeFileSync(folder + "/" + file, vtl);
});

fs.readdirSync(folder2).forEach((file) => {
  let vtl = fs.readFileSync(folder2 + "/" + file, { encoding: "utf8" });

  vtl = vtl.replace(/ +/g, " ");
  // Remove comments
  vtl = vtl.replace(/##.*/g, "");
  // Remove double newlines
  vtl = vtl.replace(/\n+/g, "\n");

  fs.writeFileSync(folder + "/" + file, vtl);
});
