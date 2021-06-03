
/** Add your GitHub token below, rename this file to 'configAPI.js'. **/
/** Then you are good to go! **/

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rfp';

const auth = {
  headers: {
    Authorization: 'YOUR_TOKEN_HERE'
  }
};

export default { url, auth };