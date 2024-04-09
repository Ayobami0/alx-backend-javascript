export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const gotData = true;

    if (gotData) {
      resolve(true);
    } else {
      reject(new Error('No Data Gotten'));
    }
  });
}
