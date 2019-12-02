// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi: 'https://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyDdiQyHd8igk-h0yv5F3xaTSNUCoOFk17c',
    authDomain: 'platzi-store-d7569.firebaseapp.com',
    databaseURL: 'https://platzi-store-d7569.firebaseio.com',
    projectId: 'platzi-store-d7569',
    storageBucket: 'platzi-store-d7569.appspot.com',
    messagingSenderId: '398154353632',
    appId: '1:398154353632:web:5c1fb7c8820912f90d7985'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
