class LocalStorage {
  #config;
  constructor(key, config) {
    this.key = key;
    this.#config = config;
    this.initialize();
  }

  initialize() {
    if (this.#config.initialValue && !this.get()) {
      this.set(this.#config.initialValue);
    }
  }

  set(value) {
    if (typeof value === 'object' || Array.isArray(value)) {
      return localStorage.setItem(this.key, JSON.stringify(value));
    }
    localStorage.setItem(this.key, value);
  }

  get() {
    const valueString = localStorage.getItem(this.key);
    try {
      return JSON.parse(valueString);
    } catch (error) {
      return valueString;
    }
  }
}

export default LocalStorage;
