export async function verifyLogin({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'Sifat' && password === 'password') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
