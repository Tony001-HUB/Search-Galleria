// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const rootPath = 'https://www.flickr.com/services/rest/'
export const environment = {
  production: false,
  apiKey: 'b7f8807915c4584cfa2fef940ecc7533',
  getImgUrl: `${rootPath}`,
  oauth_verifier: `47fecc7b7274c597`,
  fbDbUrl: 'https://news-portal-3b3d9-default-rtdb.firebaseio.com/',
  auth_token: `72157719477522847-4b1a6ae54592a13b`,
  oauth_token_secret: `37c595e5c876f011`,
  apiKeyFireBaseAuth: "AIzaSyCLmxLsuUid3YmplX7AE9uAqsLyh2MR8gc"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
