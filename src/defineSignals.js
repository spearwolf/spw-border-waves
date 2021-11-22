import { createSignal } from "@spearwolf/signalize";

export function defineSignals(host, ...names) {
  for (const name of names) {
    const [getter, setter] = createSignal();
    host[`get${name}`] = getter;
    host[`set${name}`] = setter;
  }
}
