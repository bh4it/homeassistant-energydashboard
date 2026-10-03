# Modern Energy Card

Dark-glassmorphism energy cards for Home Assistant: a responsive energy flow with PV, storage,
grid, climate and freely configurable consumers, a PV design variant with forecast, a battery
status card and a helper that keeps wall tablets awake.

Vanilla Web Components, no build step.

## Cards

| Card | Type | Purpose |
|---|---|---|
| Modern Energy Card – Energy Flow | `custom:modern-energy-card` | Energy flow with PV, storage, grid, climate and consumers |
| Modern Energy Card – PV Design | `custom:modern-energy-pv-card` | Energy flow in the PV design, with forecast (today / remaining / tomorrow) |
| Modern Energy Card – Battery Status | `custom:modern-energy-battery-card` | Battery with state of charge, power and metrics |
| Modern Energy Card – Bildschirm wachhalten | `custom:modern-energy-keep-awake-card` | Keeps Fire OS devices (Echo Show, Fire tablets) from switching to the photo frame |

All cards come with a visual editor: add them via **Edit dashboard → Add card** and search for
"Modern Energy Card".

## Installation

### HACS (recommended)

1. Open **HACS → ⋮ → Custom repositories**.
2. Repository: `https://github.com/bh4it/modern-energy-card`, type: **Dashboard**
   (HACS' category for dashboard cards).
3. Search for **Modern Energy Card** in HACS and download it.
4. Reload the browser (clear the cache if the cards do not show up).

HACS registers the resource `/hacsfiles/modern-energy-card/modern-energy-card.js`
automatically; it loads all cards.

### Manual

1. Copy all files from `dist/` to `<config>/www/modern-energy-card/`.
2. **Settings → Dashboards → ⋮ → Resources → Add resource**:
   `/local/modern-energy-card/modern-energy-card.js`, type **JavaScript module**.
3. Reload the browser.

## Examples

`examples/` contains card configurations taken from a live installation. Replace the entity IDs
with your own.

## Keep-awake card

The card keeps Fire OS browsers awake with a looping muted video, a silent audio session and the
Wake Lock API (HTTPS only). Optionally it reports diagnostics per device to
`sensor.modern_energy_card_keep_awake_<device>`.

URL parameters for testing:
- `?keepawake=force` – run on any device, not only Fire OS
- `?keepawake=<px>,<opacity>` – size and opacity of the parked video

## Migrating from the Scout cards

The cards were previously called `scout-*`. Replace the types in your dashboards:

| Old | New |
|---|---|
| `custom:scout-energy-flow-card` | `custom:modern-energy-card` |
| `custom:scout-energy-flow-pv-card` | `custom:modern-energy-pv-card` |
| `custom:scout-battery-status-card` | `custom:modern-energy-battery-card` |
| `custom:scout-keep-awake-card` | `custom:modern-energy-keep-awake-card` |

Then remove the old `scout-*.js` resources. The keep-awake diagnostics sensor moves from
`sensor.scout_keep_awake_*` to `sensor.modern_energy_card_keep_awake_*`; adjust automations
that use it.
