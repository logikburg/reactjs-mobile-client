// store in local storage
// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

//setting preference
let setting = {preference: "M" };

// dummy items to load on client store
let items = [
              {
                name: "Aenean 1",
                headline: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                icon: "1",
                id: 1,
              },
              {
                name: "Lorem 2",
                headline: "Aenean massa. Cum sociis natoque penatibus et magnis",
                icon: "2",
                id: 2
              },
              {
                name: "Massa 3",
                headline: "Aenean massa.Aenean massa. Aenean massa.Aenean massa.",
                icon: "3",
                id: 3
              },
              {
                name: "Promenatibus 4",
                headline: "Cum sociis natoque penatib Cum sociis natoque penatib",
                icon: "4",
                id: 4
              },
              {
                name: "Adipiscing 5",
                headline: "Cum sociis natoque penatibus et magnis. Cum sociis natoque",
                icon: "5",
                id: 5
              },
            ] || [];

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let findUser = users.filter(user => {
                        return user.name === params.name;
                    });

                    if (findUser.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = findUser[0];
                        let responseJson = {
                            id: user.id,
                            name: user.name,
                            //fake token
                            token: 'Qmexhq2sBHnXQbvyP2GfUdbnY7HCagH2Mw5vUNSBn2nxip'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('no user name is found');
                    }

                    return;
                }

                // get items
                if (url.match(/\/setting\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer Qmexhq2sBHnXQbvyP2GfUdbnY7HCagH2Mw5vUNSBn2nxip') {

                        // find user id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);

                        // find if any user matches login credentials
                        let findUser = users.filter(user => {
                            return user.id === id;
                        });

                        let user = findUser[0];
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(user.sex))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get items
                if (url.endsWith('/storeitems') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer Qmexhq2sBHnXQbvyP2GfUdbnY7HCagH2Mw5vUNSBn2nxip') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(items))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get item detail by id
                if (url.match(/\/storeitemdetail\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer Qmexhq2sBHnXQbvyP2GfUdbnY7HCagH2Mw5vUNSBn2nxip') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);

                        // respond 200 OK with user
                        resolve({ ok: true, text: () => JSON.stringify({})});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => { return user.name === newUser.name; }).length;
                    if (duplicateUser) {
                        reject('Name "' + newUser.name + '" is already taken');
                        return;
                    }

                    // save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // pass through any requests not handled above
                //realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}
