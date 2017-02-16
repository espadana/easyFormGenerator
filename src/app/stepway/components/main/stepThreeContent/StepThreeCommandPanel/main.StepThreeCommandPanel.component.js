export const STEP_THREE_COMMAND_PANEL_COMPONENT_NAME = 'stepThreeCommandPanel';

export const StepThreeCommandPanelComponent = {
  template: `
  <div id="commandPanel" ng-if="!$ctrl.configuration.isWizard">
    <div  class="card">
      <div class="card-divider">
        <h3>
          <i class="fa fa-keyboard-o"></i>
          &nbsp;
          {{'COMMAND_PANEL' | translate}}
        </h3>
      </div>
      <div class="card-section">
        <div class="row">
          <div class="column small-12">
            <div class="form-group">
              <label
                for="inputSubmitButtontext"
                class="greyText ">
                {{'CUSTOM_SUBMIT_BTN' | translate}} :
                <input
                  type="text"
                  id="inputSubmitButtontext"
                  placeholder=""
                  ng-model="$ctrl.configuration.submitButtonText">
              </label>
            </div>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="columns small-12">
            <div class="form-group">
              <label
                for="inputCancelButtontext"
                class=" greyText ">
                {{'CUSTOM_CANCEL_BTN' | translate}} :
                <input
                  type="text"
                  class="form-control"
                  id="inputCancelButtontext"
                  placeholder=""
                  ng-model="$ctrl.configuration.cancelButtonText">
              </label>
            </div>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="columns small-12">
            <div class="form-group">
              <label
                for="inputNameFormtext"
                class=" greyText ">
                {{'NAME_THIS_FORM' | translate}} :
                <input
                  type="text"
                  class="form-control"
                  id="inputNameFormtext"
                  placeholder=""
                  ng-model="$ctrl.configuration.formName">
              </label>
            </div>
          </div>
        </div>
        <button
          class="button expanded large primary"
          ng-click="$ctrl.saveThisForm()">
          {{'SAVE_THIS_FORM' | translate}}
        </button>
      </div>
    </div>
  </div>
  `,
  bindings: {
    configuration:  '=',
    saveThisForm:   '&'
  },
  controller:
  class StepThreeCommandPanelController {
    static $inject = [];

    constructor() {
      //
    }
  }
};
