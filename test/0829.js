class Api {
  constructor () {
    this.user = { id: 1, name: 'test' }
    this.friends = [ this.user, this.user, this.user ]
    this.photo = 'not a real photo'
  }
  getUser () {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.user), 200)
    })
  }
  getFriends (userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.friends.slice()), 200)
    })
  }
  getPhoto (userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.photo), 200)
    })
  }
  throwError () {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Intentional Error')), 200)
    })
  }
}

function callback() {
  const api = new Api();
  api.getUser().then(function (user) {
      console.log(user);
  });
  api.getFriends().then(function (friend) {
    console.log(friend);
  })
}

//callback();


function callbackErrorHell () {
  const api = new Api()
  let user, friends
  api.getUser().then(function (returnedUser) {
    user = returnedUser
    api.getFriends(user.id).then(function (returnedFriends) {
      friends = returnedFriends
      api.throwError().then(function () {
        console.log('Error was not thrown')
        api.getPhoto(user.id).then(function (photo) {
          console.log('callbackErrorHell', { user, friends, photo })
        }, function (err) {
          console.error(err)
        })
      }, function (err) {
        console.error(err)
      })
    }, function (err) {
      console.error(err)
    })
  }, function (err) {
    console.error(err)
  })
}

function callbackErrorPromiseChain () {
  const api = new Api()
  let user, friends
  api.getUser()
    .then((returnedUser) => {
      user = returnedUser
      return api.getFriends(user.id)
    })
    .then((returnedFriends) => {
      friends = returnedFriends
      console.log(11);
      return api.throwError()
    })
    .then(() => {
      console.log('Error was not thrown')
      console.log(22);
      return api.getPhoto(user.id)
    })
    .then((photo) => {
      console.log('callbackErrorPromiseChain', { user, friends, photo })
    })
    .catch((err) => {
      console.error(err)
    })
}

// callbackErrorPromiseChain()
async function aa() {
  try{
    const api = new Api();
    const user = await api.getUser();
    const friends = await api.getFriends();
    console.log('error not11');
    await api.throwError();
    console.log('error not');
    const photo = await api.getPhoto();
    console.log('await',{user,photo,friends});
  }catch(err) {
    console.log(err)
  }
}

var bb = Array(10).fill('1');

