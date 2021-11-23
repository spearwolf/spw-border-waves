# spw-border-waves

## Usage

1. Build

```sh
$ npm run build
$ copy build/spw-border-waves.js $TO_YOUR_PUBLIC_STATIC_ASSETS_DIRECTORY
```

2. Integrate as web component

```html
<script type="module" src="spw-border-waves.js"></script>

<spw-border-waves color="#666"></spw-border-waves>
```

## Development

```sh
$ npm run start
```

## TODO

### Roadmap v1.0

- [ ] add pause-offset to now/delta-time.. (switch browser tab and come back _issue_)
- [ ] set initial seed (random-as-default? time?)
- [ ] read from custom styles/css properties
  - [ ] color
  - [ ] align-border {top|bottom}
- [x] add signals/properties for
  - [x] wave-frequency
  - [x] wave-speed
  - [x] align-border {top|bottom}
- [ ] remove/deactivate-by-default console debug logs
- [ ] add console ascii art banner :wink:
  - [ ] add check and warning when script is loaded multiple times
- [ ] npm package output, for _no-install-usage_ by using e.g. https://skypack.dev
- [ ] cheat-sheet documentation
  - [ ] add to README
- [ ] check/verify cleanup on dispose, disconnect ..
- [ ] do not render if element is outside of viewport
