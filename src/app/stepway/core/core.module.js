/* global angular */
const CORE_MODULES = [
  'textAngular',
  'textAngularSetup',
  'ngAnimate',
  'toaster',
  'formly',
  'formlyFoundation',
  'mm.foundation',
  'nya.bootstrap.select',
  'pascalprecht.translate'
];

export default angular
                .module('edaStepWayEasyFormGen.core', CORE_MODULES);
