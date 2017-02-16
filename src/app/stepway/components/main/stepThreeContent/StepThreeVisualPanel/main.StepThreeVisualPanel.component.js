export const STEP_THREE_VISUAL_PANEL_COMPONENT_NAME = 'stepThreeVisualPanel';

export const StepThreeVisualPanelComponent = {
  template: `
  <div id="visualPanel">
    <div class="card">
      <div class="card-divider">
        <h3>
          <i class="fa fa-thumbs-o-up"></i>
          &nbsp;
          {{'FINAL_STEP' | translate}}
        </h3>
      </div>
      <div class="card">
        <form ng-submit="vizPanel.onSubmit()">
          <formly-form
            id="saveFormlyFom"
            model="vizPanel.edaDataModel"
            fields="vizPanel.wfFormFields">
            <span class="float-right">
            <button
              class="button primary"
              type="submit">
              {{vizPanel.configuration.submitButtonText}}
            </button>
            <button
              class="button primary"
              type="cancel">
              {{vizPanel.configuration.cancelButtonText}}
            </button>
            </span>
          </formly-form>
        </form>
      </div>
    </div>
  </div>
  `,
  controllerAs: 'vizPanel',
  bindings: {
    configuration: '=',
    edaDataModel: '=',
    wfFormFields: '=',
    onSubmit: '&'
  },
  controller:
  class StepThreeVisualPanelController {
    static $inject = [];

    constructor() {
      //
    }

    $onInit() {
      // console.log('stepThreeVisualPanel init, edaDataModel: ', this.edaDataModel);
    }
  }
};
