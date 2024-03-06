import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(([photoValues, userValues]) => {
    console.log(`${photoValues.body} ${userValues.firstName} ${userValues.lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
