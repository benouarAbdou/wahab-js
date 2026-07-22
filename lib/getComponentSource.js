import fs from "fs";
import path from "path";

// Reads the real source of a library component so the "Code" tab always
// matches the file on disk instead of a hand-duplicated string.
export function getComponentSource(relativePath) {
  const fullPath = path.join(process.cwd(), "components", "library", relativePath);
  return fs.readFileSync(fullPath, "utf8");
}
