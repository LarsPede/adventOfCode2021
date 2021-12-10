(async () => {
  const pathname = `./src/${process.argv[2]}/index.js`;
    // import module for side effects
  await import(pathname);
})();
