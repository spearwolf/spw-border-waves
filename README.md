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
- [ ] read color from (custom) css properties
- [ ] add signals/properties for
  - [ ] wave-frequency
  - [ ] wave-speed
  - [x] align-border {top|bottom}
- [ ] remove/deactivate-by-default console debug logs
- [ ] add console ascii art banner :wink:
- [ ] npm package output, for _no-install-usage_ by using e.g. https://skypack.dev
- [ ] cheat-sheet documentation
  - [ ] add to README
