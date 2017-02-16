export const STEP_INDICATOR_COMPONENT_NAME = 'stepIndicator';

export const stepIndicatorComponent = {
  template: `
  <div class="row stepwizardTopmargin">
    <div class="columns large-8 large-offset-2 medium-8 medium-offset-2">
      <div class="stepwizard">
        <div class="row stepwizard-row">
          <div class="stepwizard-step medium-3 columns">
            <button
              type="button"
              class="button circle"
              ng-click="$ctrl.goToStep({index:0})"
              ng-class="{'button primary': $ctrl.configuration.stepIndicators[0], 'button': !$ctrl.configuration.stepIndicators[0]}" >
              0
            </button>
            <p>
              {{'WIZARD_LINES' | translate}}
            </p>
          </div>
          <div class="stepwizard-step columns medium-3">
            <button
              type="button"
              class="button circle"
              ng-click="$ctrl.goToStep({index:1})"
              ng-class="{'button primary': $ctrl.configuration.stepIndicators[1], 'button': !$ctrl.configuration.stepIndicators[1], 'disabled': ($ctrl.configuration.configStepCounter < 1)}"  >
              1
            </button>
            <p>
              {{'WIZARD_LAYOUT' | translate}}
            </p>
          </div>
          <div class="stepwizard-step columns medium-3">
            <button
              type="button"
              class="button circle"
              ng-click="$ctrl.goToStep({index:2})"
              ng-class="{'button primary': $ctrl.configuration.stepIndicators[2], 'button': !$ctrl.configuration.stepIndicators[2], 'disabled': ($ctrl.configuration.configStepCounter < 2)}" >
              2
            </button>
            <p>
              {{'WIZARD_CONTROLS' | translate}}
            </p>
          </div>
          <div class="stepwizard-step columns medium-3" ng-if="!$ctrl.configuration.isWizard">
            <button
              type="button"
              class="button circle"
              ng-click="$ctrl.goToStep({index:3})"
              ng-class="{'button primary': $ctrl.configuration.stepIndicators[3], 'button': !$ctrl.configuration.stepIndicators[3], 'disabled': ($ctrl.configuration.configStepCounter < 3)}" >
              3
            </button>
            <p>
              {{'WIZARD_SAVE' | translate}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  bindings: {
    configuration: '<',
    goToStep: '&'
  },
  controller:
  class stepIndicatorComponent {
    static $inject = [];

    constructor() {

    }
  }
};

const STEP_INDICATOR_COMPONENT_MODULE = 'stepway.stepIndicator.module';

export default angular
                .module(STEP_INDICATOR_COMPONENT_MODULE, [])
                .component(STEP_INDICATOR_COMPONENT_NAME, stepIndicatorComponent);
