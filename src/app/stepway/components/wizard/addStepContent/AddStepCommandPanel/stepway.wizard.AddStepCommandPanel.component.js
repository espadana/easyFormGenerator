export const ADD_STEP_COMMAND_PANEL_COMPONENT_NAME = 'addStepCommandPanel';

export const AddStepCommandPanelComponent = {
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
          <div class="columns small-12">
            <span class="addNewLine">
              {{'ADD_NEW_STEP' | translate}} :
            </span>
            &nbsp;
            <button
              class="button primary"
              ng-click="$ctrl.addNewstep()">
              <i class="fa fa-plus fa-1x"></i>
            </button>
          </div>          
        </div>
        <button
          class="button primary expanded large"
          ng-click="$ctrl.saveThisForm({event: $event})">
          {{'SAVE_THIS_FORM' | translate}}
        </button>
      </div>
    </div>
  </div>
  `,
  bindings: {
    addNewstep: '&',
    saveThisForm: '&'
  },
  controller: class AddStepCommandPanelController {
    constructor() {

    }

    static get $inject() {
      return [];
    }
  }
};