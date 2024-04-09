import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const promises = [];

  signUpUser(firstName, lastName).then(
    (val) => {
      promises.push({ status: 'resolved', value: val });
    },
    (err) => {
      promises.push({ result: 'rejected', value: err });
    },
  );
  uploadPhoto(fileName).then(
    (val) => {
      promises.push({ status: 'resolved', value: val });
    },
    (err) => {
      promises.push({ result: 'rejected', value: err });
    },
  );

  return promises;
}
