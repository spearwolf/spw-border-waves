import { createSignal } from "@spearwolf/signalize";

export function defineSignals(host, ...props) {
  for (const name of props) {
    if (Array.isArray(name)) {
      const [getter, setter] = createSignal(name[1]);
      host[`get${name[0]}`] = getter;
      host[`set${name[0]}`] = setter;
    } else {
      const [getter, setter] = createSignal();
      host[`get${name}`] = getter;
      host[`set${name}`] = setter;
    }
  }
}
