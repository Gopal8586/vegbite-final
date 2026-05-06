/**
 * VegBites Production Build Script
 * Copies only the files needed to run the server into a `dist/` folder.
 * Excludes: node_modules, devDependencies, .py scripts, .md files, .rar archives, etc.
 */

const fs   = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");

// ─── Helpers ────────────────────────────────────────────────────────────────

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src,  entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function log(msg) {
  console.log(`\x1b[36m[build]\x1b[0m ${msg}`);
}

// ─── Clean dist ─────────────────────────────────────────────────────────────

log("Cleaning old dist/...");
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

// ─── Copy source folders ────────────────────────────────────────────────────

const folders = ["src", "public", "templates"];
for (const folder of folders) {
  const srcFolder = path.join(ROOT, folder);
  if (fs.existsSync(srcFolder)) {
    log(`Copying ${folder}/...`);
    copyDir(srcFolder, path.join(DIST, folder));
  } else {
    console.warn(`\x1b[33m[warn]\x1b[0m  Folder not found, skipping: ${folder}/`);
  }
}

// ─── Write slim package.json (production only) ─────────────────────────────

log("Writing production package.json...");
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));

const prodPkg = {
  name:         pkg.name,
  version:      pkg.version,
  main:         pkg.main,
  scripts: {
    start: pkg.scripts.start,
  },
  dependencies: pkg.dependencies,
};

// Remove blank entries that slipped in
if (prodPkg.dependencies) {
  for (const [k, v] of Object.entries(prodPkg.dependencies)) {
    if (!v) delete prodPkg.dependencies[k];
  }
}

fs.writeFileSync(
  path.join(DIST, "package.json"),
  JSON.stringify(prodPkg, null, 2)
);

// ─── Install production dependencies ───────────────────────────────────────

log("Installing production dependencies (npm install --omit=dev)...");
execSync("npm install --omit=dev", { cwd: DIST, stdio: "inherit" });

// ─── Done ───────────────────────────────────────────────────────────────────

console.log("\n\x1b[32m✔ Production build ready!\x1b[0m  → dist/");
console.log("   Run with:  node dist/src/VegBites.js\n");
