export const EDIT_HEADER_CONTROL_COMPONENT = 'editHeaderControl';

export const editHeaderControlComponent = {
  template: `
  <div class="card">
    <div class="card-section">
      <div class="row">
        <div class="columns medium-12">
          <h5 class="greyText"><i class="fa fa-eye"></i>
            &nbsp;
            {{'PREVIEW_TAB' | translate}} :
          </h5>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="columns medium-12">
          <div class="form-group">
            <div class="">
              <h2 class="text-center">
                {{$ctrl.nyaSelect.temporyConfig.formlyPlaceholder}}
              </h2>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-section">
      <div class="row">
        <div class="columns medium-12">
          <h5 class="greyText">
            <i class="fa fa-pencil-square-o"></i>
            &nbsp;
            {{'EDIT_PROPERTIES' | translate}} :
            </h5>
        </div>
      </div>
      <hr/>
      <div class="marginTopFivepixels"></div>
      <div class="row">
        <div class="form-group">
          <label
            for="inputHeaderTextUpdate"
            class="columns medium-3 control-label greyText editPropertiesLabel">
            {{'HEADER_TEXT' | translate}} :
          </label>
          <div class="columns medium-9">
            <input
              type="text"
              class="form-control"
              ng-model="$ctrl.nyaSelect.temporyConfig.formlyPlaceholder"
              id="inputHeaderTextUpdate"
              placeholder="{{'ADD_EDIT_HEADER_HERE' | translate}}">
          </div>
        </div>
      </div>
      <div class="marginTopFivepixels"></div>
      <div class="row">
        <div class="form-group">
          <label
            for="inputTextDescriptionUpdate"
            class="columns medium-3 control-label greyText editPropertiesLabel">
            {{'DESCRIPTION' | translate}} :
          </label>
          <div class="columns medium-3">
            <input
              type="text"
              class="form-control"
              ng-model="$ctrl.nyaSelect.temporyConfig.formlyDescription"
              id="inputTextDescriptionUpdate"
              placeholder="{{'ADDEDIT_DESCRIPTION' | translate}}">
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  bindings: {
    nyaSelect: '='
  },
  controller:
  class editHeaderControlController {
    static $inject = [];

    constructor() {
      //
    }
  }
};

const editHeaderControlModuleName = 'stepway.editHeaderControl.module';

export default angular
                .module(editHeaderControlModuleName, [])
                .component(EDIT_HEADER_CONTROL_COMPONENT, editHeaderControlComponent);