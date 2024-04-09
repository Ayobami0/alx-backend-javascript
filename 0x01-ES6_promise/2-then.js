export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .then((val) => val);
}
