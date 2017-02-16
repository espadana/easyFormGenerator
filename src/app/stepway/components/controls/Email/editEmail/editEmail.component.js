export const EDIT_EMAIL_COMPONENT = 'editEmailControl';

export const editEmailControlComponent = {
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
              for="inputEmail"
              class="textControlLabel">
              {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
              <span
                ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                class="textControlLabel">
                *
              </span>
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                id="inputEmail"
                placeholder="{{$ctrl.nyaSelect.temporyConfig.formlyPlaceholder}}">
              <p class="help-block">
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
            class="columns medium-3 control-label greyText editPropertiesLabel">
            {{'LABEL_TEXT' | translate}} :
          </label>
          <div class="columns medium-9">
            <input
              type="text"
              class="form-control"
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
            for="inputTextplaceholderUpdate"
            class="columns medium-3 control-label greyText editPropertiesLabel">
            {{'PLACEHOLDER' | translate}} :
          </label>
          <div class="columns medium-9">
            <input
              type="text"
              class="form-control"
              ng-model="$ctrl.nyaSelect.temporyConfig.formlyPlaceholder"
              id="inputTextplaceholderUpdate"
              placeholder="{{'ADD_EDIT_PLACEHOLD' | translate}}">
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
          <div class="columns medium-9">
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
  class editEmailControlController {
    static $inject = [];
    constructor() {

    }
  }
};

const editEmailControlModuleName = 'stepway.editEmailControl.module';

export default angular
                .module(editEmailControlModuleName, [])
                .component(EDIT_EMAIL_COMPONENT, editEmailControlComponent);
