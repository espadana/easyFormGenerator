export const STEP_ZERO_COMMAND_PANEL_COMPONENT_NAME = 'stepZeroCommandPanel';

export const StepZeroCommandPanelComponent = {
  template: `
  <div id="commandPanel">
    <div  class="card">
      <div class="card-divider">
        <h3 >
          <i class="fa fa-keyboard-o"></i>
          &nbsp;
          {{'COMMAND_PANEL' | translate}}
        </h3>
      </div>
      <div class="card-section">
        <div class="row">
          <div class="columns medium-12">
            <span class="addNewLine">
              {{'ADD_NEW_LINE' | translate}} :
            </span>
            &nbsp;
            <button
              class="button"
              ng-click="$ctrl.addNewline()">
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  bindings: {
    addNewline: '&'
  },
  controller:
  class StepZeroCommandPanelController {
    static $inject = [];

    constructor() {
      //
    }
  }
};
