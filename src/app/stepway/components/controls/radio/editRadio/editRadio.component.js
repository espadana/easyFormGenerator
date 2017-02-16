export const EDIT_RADIO_CONTROL_COMPONENT = 'editRadioControl';

export const editRadioControlComponent = {
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
              for="basicSelect"
              class=" textControlLabel">
              {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
              <span
                ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                class="textControlLabel">
                *
              </span>
            </label>
            <div class="">
              <div
                class="radio"
                ng-repeat="radioRow in $ctrl.radioRowCollection.rows">
                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="{{'optionsRadio-' + $index}}"
                    value="$index"
                    checked="">
                    {{radioRow.option}}
                </label>
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
          <h5
            class="greyText">
            <i class="fa fa-pencil-square-o"></i>
            &nbsp;
            {{'EDIT_PROPERTIES' | translate}} :
          </h5>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="columns medium-3">
          <label
            for="radioRowCollection"
            class="  greyText editPropertiesLabel">
            {{'ADD_NEW_RADIO' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="form-group">
            <div class="columns medium-9">
              <input
                type="text"
                id="inputAddNewRadioOption"
                placeholder="{{'ADD_RADIO_PLACEHOLD' | translate}}"
                ng-model="$ctrl.newOptionRadio.saisie">
            </div>
            <div class="columns medium-3">
              <button
                class="button primary"
                ng-click="$ctrl.addNewOptionRadio()">
                {{'ADD' | translate}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns medium-3">
          <label
            for="radioRowCollection"
            class="greyText editPropertiesLabel">
            {{'EDIT_REMOVE_RADIO' | translate}} :
          </label>
        </div>
      </div>
        <div class="row">
          <div class="form-group">
            <div class-"columns medium-12">
              <div class="container">
                <div ng-show="$ctrl.radioRowCollection.rows.length === 0">
                  <h5 class="text-center greyText">
                    <em>
                      - {{'NO_RADIO_ADD_NEW' | translate}} -
                    </em>
                  </h5>
                </div>
                <table
                  ng-if="$ctrl.radioRowCollection.rows.length > 0"
                  class="hover table-scroll">
                  <thead>
                  <tr>
                    <th st-ratio="20">
                      {{'ORDER' | translate}}
                    </th>
                    <th st-ratio="55">
                      {{'OPTION' | translate}}
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                  <tr>
                    <th st-ratio="20">
                    </th>
                    <th st-ratio="55">
                      <input
                        ng-model="$ctrl.radioFilter"
                        placeholder="{{'SEARCH_4_OPTION' | translate}}"
                        type="search"
                      />
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr ng-repeat="radioRow in $ctrl.radioRowCollection.rows | filter:radioFilter as radioRow">
                      <td st-ratio="20">
                        {{$index}}
                      </td>
                      <td st-ratio="55">
                        {{radioRow.option}}
                      </td>
                      <td st-ratio="25">
                        <div class="float-right">
                          <button
                            class="button primary"
                            ng-click="$ctrl.upThisRadioRow({index: $index})">
                            <i class="fa fa-arrow-up"></i>
                          </button>
                          <button
                            class="button primary"
                            ng-click="$ctrl.downThisRadioRow({index: $index})">
                            <i class="fa fa-arrow-down"></i>
                          </button>
                          <button
                            class="button alert"
                            ng-click="$ctrl.removeRadioRow({index: $index})">
                            <i class="fa fa-trash-o"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div class="marginTopFivepixels"></div>
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextLabelUpdate"
              class="columns medium-3  greyText editPropertiesLabel">{{'LABEL_TEXT' | translate}} :
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
              class="columns medium-3  greyText editPropertiesLabel">{{'REQUIRED' | translate}} :
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
              class="columns medium-3  greyText editPropertiesLabel">{{'DESCRIPTION' | translate}} :
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
  </div>
  `,
  bindings: {
    nyaSelect:          '=',
    radioRowCollection: '=',
    newOptionRadio:     '=',
    addNewOptionRadio:  '&',
    upThisRadioRow:     '&',
    downThisRadioRow:   '&',
    removeRadioRow:     '&'
  },
  controller:
  class editRadioControlController {
    static $inject = [];

    constructor() {
      //
    }
  }
};

const editRadioControlModuleName = 'stepway.editRadioControl.module';

export default angular
                .module(editRadioControlModuleName, [])
                .component(EDIT_RADIO_CONTROL_COMPONENT, editRadioControlComponent);

