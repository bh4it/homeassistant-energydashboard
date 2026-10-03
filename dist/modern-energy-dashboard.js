/**
 * Modern Energy Dashboard
 * Entry point loaded by HACS; registers all cards of this repository.
 * https://github.com/bh4it/modern-energy-dashboard
 */
// The version query busts the browser cache of the imported files on updates,
// because HACS only adds its own cache-busting tag to this entry file.
const VERSION = "1.0.0";

await Promise.all([
  import(`./modern-energy-dashboard-flow-card.js?v=${VERSION}`),
  import(`./modern-energy-dashboard-pv-card.js?v=${VERSION}`),
  import(`./modern-energy-dashboard-keep-awake.js?v=${VERSION}`),
]);
