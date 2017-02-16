export const PAGER_COMPONENT_NAME = 'edapager';

export const pagerComponent = {
  template: `
  <ul class="pager">
    <li ng-class="{'disabled':$ctrl.stepIndicators[0]}" ng-if="$ctrl.configuration.configStepCounter > 0">
      <button
          class="button primary customPagerButton"
          ng-click="$ctrl.previousConfigStep()" >
        <i class="fa fa-arrow-right fa-2x float-right"></i>
        <span class="float-left">
          {{'PAGER_PREVIOUS' | translate}}
        </span>
      </button>
    </li>
    <li
      ng-class="{'disabled':$ctrl.stepIndicators[3]}"
      ng-if="($ctrl.configuration.configStepCounter < 3 && !$ctrl.configuration.isWizard) || ($ctrl.configuration.configStepCounter < 2 && $ctrl.configuration.isWizard) ">
      <button
        class="button primary customPagerButton"
        ng-click="$ctrl.nextConfigStep()">
        <span class="float-right">
          {{'PAGER_NEXT' | translate}}
        </span>
        <i class="fa fa-arrow-left fa-2x float-left"></i>
      </button>
    </li>
  </ul>
  `,
  bindings: {
    stepIndicators:     '<',
    nextConfigStep:     '&',
    previousConfigStep: '&',
    configuration: '='
  },
  controller:
  class pagerComponent {
    static $inject = [];

    constructor() {

    }
  }
};

const PAGER_COMPONENT_MODULE = 'stepway.pager.module';

export default angular
                .module(PAGER_COMPONENT_MODULE, [])
                .component(PAGER_COMPONENT_NAME, pagerComponent);
