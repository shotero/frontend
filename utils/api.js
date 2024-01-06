class Api {
  constructor(basepath) {
    this.basepath = basepath;
  }

  get(path, params) {
    return fetch(`${this.basepath}/${path}?${new URLSearchParams(params)}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  post(path, data) {
    return fetch(`${this.basepath}/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }
}

const api = new Api('http://localhost:8000');

export { api };
