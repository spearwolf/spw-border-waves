const NS = "[spw-border-waves]";

export const debug = (...args) =>
  console.debug(`%c${NS}`, "color:#935", ...args);

export const warn = (...args) => console.warn(NS, ...args);
