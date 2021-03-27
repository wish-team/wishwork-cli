/** Environment JS for getting env from process
 *
 * `make local` command will use .env.local
 * `make dev` command will use .env.development
 * `make production` command will use .env.production
 *
 * for more info, please read the README
 * **/

const ADDRESS = process.env.REACT_APP_WEBSITE_ADDRESS;

const Environment = {
    ADDRESS: ADDRESS
};

export default Environment
