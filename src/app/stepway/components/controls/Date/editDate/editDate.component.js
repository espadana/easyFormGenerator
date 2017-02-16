export const EDIT_DATE_COMPONENT = 'editDateControl';

export const editDateControlComponent = {
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
                for="inputDate"
                class=" textControlLabel">
                {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
                <span
                  ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                  class="textControlLabel">
                  *
                </span>
              </label>
              <div class="">
                <div class="input-group" >
                  <span class="input-group-label">
                    <i class="fa fa-calendar"></i>
                  </span>
                  <input
                    type="text"
                    class="input-group-field"
                    uib-datepicker-popup="{{$ctrl.nyaSelect.temporyConfig.datepickerOptions.format}}"
                    ng-model="$ctrl.demodt.dt"
                    is-open="$ctrl.demodt.opened"
                    datepicker-options="$ctrl.dateOptions"
                    close-text="Close"
                    ng-click="$ctrl.open({event : $event})"
                  />
                </div>
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
          <label class="columns medium-3  greyText editPropertiesLabel">
            {{'DATE_FORMAT' | translate}} :
          </label>
          <div class="columns medium-9">
            <ol
              class="nya-bs-select columns small-12"
              ng-model="$ctrl.nyaSelect.temporyConfig.datepickerOptions.format"
              id="dateformatSelect">
              <li
                class="nya-bs-option"
                nya-bs-option="dateformat in $ctrl.demodt.formats"
                value="dateformat">
                <a>
                  {{dateformat}}
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="marginTopFivepixels"></div>
      <div class="row">
        <div class="form-group">
          <label
            for="inputTextLabelUpdate"
            class="columns medium-3  greyText editPropertiesLabel">
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
              for="inputTextRequiredUpdate"
              class="columns medium-3  greyText editPropertiesLabel">
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
              class="columns medium-3  greyText editPropertiesLabel">
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
    nyaSelect: '=',
    demodt: '=',
    dateOptions: '=',
    open: '&'
  },
  controller:
  class editDateControlController {
    static $inject = [];

    constructor() {

    }
  }
};

const editDateControlModuleName = 'stepway.editDateControl.module';

export default angular
                .module(editDateControlModuleName, [])
                .component(EDIT_DATE_COMPONENT, editDateControlComponent);
