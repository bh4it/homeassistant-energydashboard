/**
 * Modern Energy Card
 * Entry point loaded by HACS; registers all cards of this repository.
 * https://github.com/bh4it/modern-energy-card
 */
// The version query busts the browser cache of the imported files on updates,
// because HACS only adds its own cache-busting tag to this entry file.
const VERSION = "1.0.0";

await Promise.all([
  import(`./modern-energy-card-flow.js?v=${VERSION}`),
  import(`./modern-energy-card-pv.js?v=${VERSION}`),
  import(`./modern-energy-card-keep-awake.js?v=${VERSION}`),
]);
