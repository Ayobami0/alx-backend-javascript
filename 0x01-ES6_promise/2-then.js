export default function handleResponseFromAPI(promise) {
  promise.then(
    () => ({
      status: 200,
      body: 'success',
    }),
    () => new Error(),
  );
}
