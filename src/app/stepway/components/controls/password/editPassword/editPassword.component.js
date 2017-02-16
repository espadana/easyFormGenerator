export const EDIT_PASSWORD_CONTROL_COMPONENT = 'editPasswordControl';

export const editPasswordControlComponent = {
  template: `
    <div class="panel panel-default">
    <div class="panel-body">
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
              for="inputPassword"
              class="textControlLabel">
              {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
              <span
                ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                class="textControlLabel">
                *
              </span>
            </label>
            <div class="">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="{{$ctrl.nyaSelect.temporyConfig.formlyPlaceholder}}">
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
  class editPasswordControlController {
    static $inject = [];
    constructor() {
      //
    }
  }
};

const editeditPasswordModuleName = 'stepway.editPasswordControl.module';

export default angular
                .module(editeditPasswordModuleName, [])
                .component(EDIT_PASSWORD_CONTROL_COMPONENT, editPasswordControlComponent);
