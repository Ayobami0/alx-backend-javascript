import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const resp = await Promise.all([uploadPhoto(), createUser()]);
    return { photo: resp[0], user: resp[1] };
  } catch (e) {
    return { photo: null, user: null };
  }
}
