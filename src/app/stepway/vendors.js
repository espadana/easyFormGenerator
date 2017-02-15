import 'api-check'; // NOTE: always imported before angular-formly!
import 'angular-formly';

// Disable Api-check in the production
// TODO: Fix issues with api-check when it's active
var apiCheck = require('api-check');
apiCheck.globalConfig.disabled = true;
// End 
import 'angular-formly-templates-foundation';
import 'angular-wizard';
