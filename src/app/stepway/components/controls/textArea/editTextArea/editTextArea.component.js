export const EDIT_TEXTAREA_CONTROL_COMPONENT = 'editTextareaControl';

export const editTextareaControlComponent = {
  template: `
    <div class="card">
      <div class="card-section">
        <div class="row">
          <div class="columns medium-12">
            <h5 class="greyText">
              <i class="fa fa-eye"></i>
              &nbsp;
              {{'PREVIEW_TAB' | translate}} :
            </h5>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="columns medium-12">
            <div class="form-group">
              <label
                for="textArea"
                class="textControlLabel">
                {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
                <span
                  ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                  class="textControlLabel">
                  *
                </span>
              </label>
              <div class="">
                <textarea
                  ng-model="model[options.key]"
                  rows="3"
                  id="textArea">
                </textarea>
                <p class="help-text">
                  {{$ctrl.nyaSelect.temporyConfig.formlyDescription}}
                </p>
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
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextLabelUpdate"
              class="columns medium-12 greyText editPropertiesLabel">
              {{'LABEL_TEXT' | translate}} :
            </label>
            <div class="columns medium-9">
              <input
                type="text"
                ng-model="$ctrl.nyaSelect.temporyConfig.formlyLabel"
                id="inputTextLabelUpdate"
                placeholder="{{'ADD_EDIT_LABEL_HERE' | translate}}">
            </div>
          </div>
        </div>
        <div class="marginTopFivepixels"></div>
          <div class="row">
            <div class="form-group">
              <label
                for="inputTextRequiredUpdate"
                class="columns medium-3 control-label greyText editPropertiesLabel">
                {{'REQUIRED' | translate}} :
              </label>
              <div class="columns medium-3">
                <div class="checkboxCssCorrection">
                  &nbsp;
                </div>
                <input
                  type="checkbox"
                  ng-model="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                  id="inputTextRequiredUpdate">
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
              <div class="columns medium-9">
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
  class editTextareaControlController {
    static $inject = [];

    constructor() {
      //
    }
  }
};

const edittextareaControlModuleName = 'stepway.editTextAreaControl.module';

export default angular
                .module(edittextareaControlModuleName, [])
                .component(EDIT_TEXTAREA_CONTROL_COMPONENT, editTextareaControlComponent);
