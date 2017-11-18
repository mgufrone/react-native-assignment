const BASE_URL = 'http://hapi.sm8t.com/api/v1';
const FORGOT_PASSWORD = `${BASE_URL}/password/forgot`;

const post = (url, body, config) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  ...config,
})
  .then(response => Promise.all([Promise.resolve(response), response.json()]))
  .then(([response, body]) => {
  if (response.ok) {
    return body;
  }
  throw new Error(body.message);
});

export default {
  forgot: (email) => post(FORGOT_PASSWORD, { email })
}