export const STEP_ONE_COMMAND_PANEL_COMPONENT_NAME = 'stepOneCommandPanel';

export const StepOneCommandPanelComponent = {
  template: `
  <div id="commandPanel">
    <div class="card">
      <div class="card-divider">
        <h3 class="panel-title">
          <i class="fa fa-keyboard-o"></i>
          &nbsp;
          {{'COMMAND_PANEL' | translate}}
        </h3>
      </div>
      <div class="card-section">
        <div class="row">
          <div class="columns medium-12">
            <h4 class="numberOfcolumsText text-center">
              <i>
                - {{'SELECTED_LINE' | translate}} -
              </i>
            </h4>
            <h4 class="numberOfcolumsText text-center">
              {{'NUMBER_OF_COLUMN' | translate}} :
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="columns small-2">
            <button
              class="button primary float-right btnMinusColumns"
              ng-click="$ctrl.decreaseNumberOfColumns()">
              <i class="fa fa-minus fa-1x"></i>
            </button>
          </div>
          <div class="columns small-2 small-offset-3 text-center">
            <span class="numberOfColumnsLabel ">
              {{$ctrl.configuration.lines[$ctrl.configuration.activeLine -1].columns.length}}
            </span>
          </div>
          <div class="columns small-2">
            <button
              class="button float-left btnAddColumns"
              ng-click="$ctrl.increaseNumberOfColumns()">
              <i class="fa fa-plus fa-1x"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  bindings: {
    configuration:            '=',
    increaseNumberOfColumns:  '&',
    decreaseNumberOfColumns:  '&'
  },
  controller:
  class StepOneCommandPanelController {
    static $inject = [];

    constructor() {

    }
  }
};
