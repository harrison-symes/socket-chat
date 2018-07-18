const localstorage = global.window.localStorage

export function set(key, value) {
  localstorage.setItem(key, value)
}

export function get(key) {
  return localstorage.getItem(key)
}
