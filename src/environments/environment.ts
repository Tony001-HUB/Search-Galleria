// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const rootPath = 'https://www.flickr.com/services/rest/'
export const environment = {
  production: false,
  apiKey: 'b7f8807915c4584cfa2fef940ecc7533',
  getImgUrl: `${rootPath}`,
  imgSharkAPIKey: `KPOA0Z4D6f3c6589ea7b576ed49fa935bb5486a7`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
