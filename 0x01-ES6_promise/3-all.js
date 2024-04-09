import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  createUser()
    .then((user) => {
      uploadPhoto()
        .then((photoID) => {
          console.log(photoID.body, `${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
          console.log('Signup system offline');
        });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
