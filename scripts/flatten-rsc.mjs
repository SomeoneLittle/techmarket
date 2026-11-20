// Next 16 static export writes RSC segment payloads as nested folders
// (e.g. out/blog/__next.blog/__PAGE__.txt) while the client router requests the
// flattened name (out/blog/__next.blog.__PAGE__.txt). Missing segments make every
// <Link> fall back to a full page load, so copy each nested segment to its flat name.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
let copied = 0;

function walk(dir, visit) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, visit);
    else visit(p);
  }
}

function segmentRoots(dir, found = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) found.push(p);
    else segmentRoots(p, found);
  }
  return found;
}

if (!existsSync(OUT)) {
  console.error("flatten-rsc: no out/ directory, run next build first");
  process.exit(1);
}

for (const root of segmentRoots(OUT)) {
  const parent = join(root, "..");
  walk(root, (file) => {
    const flat = join(parent, relative(parent, file).split(sep).join("."));
    if (!existsSync(flat)) {
      copyFileSync(file, flat);
      copied++;
    }
  });
}

console.log(`flatten-rsc: wrote ${copied} flattened segment files`);
