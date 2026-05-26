import '@testing-library/jest-dom';

if (typeof globalThis.Request === 'undefined') {
  class RequestMock {
    constructor(input, init = {}) {
      this.url = typeof input === 'string' ? input : input.url;
      this.method = init.method || 'GET';
      this.headers = init.headers || {};
      this.body = init.body || null;
      this.bodyUsed = false;
    }

    async json() {
      if (this.bodyUsed) {
        throw new Error('Body already used');
      }

      this.bodyUsed = true;

      if (!this.body) {
        return {};
      }

      return JSON.parse(this.body);
    }

    async text() {
      if (this.bodyUsed) {
        throw new Error('Body already used');
      }

      this.bodyUsed = true;
      return this.body;
    }
  }

  globalThis.Request = RequestMock;
  global.Request = RequestMock;
}
