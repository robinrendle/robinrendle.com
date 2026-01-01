const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

module.exports = function() {
  const cacheFile = path.join(__dirname, ".git-hashes-cache.json");

  // Try to load existing cache
  let cache = {};
  if (fs.existsSync(cacheFile)) {
    try {
      const cached = JSON.parse(fs.readFileSync(cacheFile, "utf-8"));

      // Check if cache is still valid by comparing git HEAD
      const currentHead = execSync("git rev-parse HEAD", {
        encoding: "utf-8",
        cwd: process.cwd(),
      }).trim();

      // If HEAD hasn't changed, use the entire cache as-is
      if (cached._head === currentHead) {
        return cached.hashes;
      }

      // HEAD changed, we'll regenerate but can still use cache as starting point
      cache = cached.hashes || {};
    } catch (e) {
      // Invalid cache, start fresh
    }
  }

  try {
    const newCache = {};

    // Get all tracked files
    const files = execSync("git ls-files", {
      encoding: "utf-8",
      cwd: process.cwd(),
    })
      .trim()
      .split("\n")
      .filter(f => f); // Remove empty strings

    // For each file, get its last commit hash and date
    files.forEach((file) => {
      try {
        // Use existing cache if available
        if (cache[file]) {
          newCache[file] = cache[file];
          newCache["./" + file] = cache[file];
        } else {
          // Get the hash and date for this file in one command
          const info = execSync(`git log -1 --format="%h|%aI" -- "${file}"`, {
            encoding: "utf-8",
            cwd: process.cwd(),
          }).trim();

          if (info) {
            const [hash, date] = info.split("|");
            const data = { hash, date };
            newCache[file] = data;
            newCache["./" + file] = data;
          }
        }
      } catch (e) {
        // Skip files that error
      }
    });

    // Get current HEAD for cache validation
    const currentHead = execSync("git rev-parse HEAD", {
      encoding: "utf-8",
      cwd: process.cwd(),
    }).trim();

    // Save cache to disk for next build
    fs.writeFileSync(cacheFile, JSON.stringify({
      _head: currentHead,
      hashes: newCache
    }, null, 2));

    return newCache;
  } catch (error) {
    console.error("Error loading git hashes:", error.message);
    return cache;
  }
};
