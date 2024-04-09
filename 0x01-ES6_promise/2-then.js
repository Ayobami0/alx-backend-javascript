export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => () => new Error());
}
