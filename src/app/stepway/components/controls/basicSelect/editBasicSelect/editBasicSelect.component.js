export const EDIT_BASIC_SELECT_COMPONENT = 'editBasicSelectControl';

export const editBasicSelectControlComponent = {
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
              class="control-label textControlLabel">
              {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
              <span
                ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                class="textControlLabel">
                *
              </span>
            </label>
            <div class="">
              <ol
                class="nya-bs-select columns small-12"
                ng-model="$ctrl.modelbasicSelect"
                id="basicSelect"
                disabled="$ctrl.basicSelectRowCollection.rows.length === 0">
                <li
                  class="nya-bs-option"
                  nya-bs-option="basicSelectRow in $ctrl.basicSelectRowCollection.rows"
                  value="$index">
                  <a>
                    {{basicSelectRow.option}}
                  </a>
                </li>
              </ol>
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
        <div class="columns small-3">
          <label
            for="basicSelectRowCollection"
            class=" control-label greyText editPropertiesLabel">
            {{'ADD_NEW_OPTIONS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="form-group">
            <div class="columns small-9">
            <input
              type="text"
              class="form-control"
              id="inputAddNewBasicOption"
              placeholder="{{'ADD_A_NEW_OPTION' | translate}}"
              ng-model="$ctrl.newOptionBasicSelect.saisie">
            </div>
            <div class="columns small-3">
              <button
                class="btn btn-primary"
                ng-click="$ctrl.addNewOptionBasicSelect()">
                {{'ADD' | translate}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns medium-3">
          <label class=" control-label greyText editPropertiesLabel">
            {{'EDIT_REMOVE_OPTIONS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <div class-"columns small-12">
            <div class="container">
              <div ng-if="$ctrl.basicSelectRowCollection.rows.length === 0">
                <h5 class="text-center greyText">
                  <em>
                    - {{'NO_OPTION_ADD_NEW' | translate}} -
                  </em>
                </h5>
              </div>
              <table
                ng-if="$ctrl.basicSelectRowCollection.rows.length > 0"
                class="table-scroll stack hover">
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
                        ng-model="$ctrl.basicSelectFilter"
                        placeholder="{{'SEARCH_4_OPTION' | translate}}"
                        type="search"
                      />
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr ng-repeat="basicSelectRow in $ctrl.basicSelectRowCollection.rows | filter:$ctrl.basicSelectFilter as basicSelectRow">
                      <td st-ratio="20">
                        {{$index}}
                      </td>
                      <td st-ratio="55">
                        {{basicSelectRow.option}}
                      </td>
                      <td st-ratio="25">
                        <div class="float-right">
                          <button
                            class="button primary"
                            ng-click="$ctrl.upThisRow({index: $index})">
                            <i class="fa fa-arrow-up"></i>
                          </button>
                          <button
                            class="button primary"
                            ng-click="$ctrl.downThisRow({index: $index})">
                            <i class="fa fa-arrow-down"></i>
                          </button>
                          <button
                            class="button primary"
                            ng-click="$ctrl.removeRow({index: $index})">
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
        <div class="row">
          <div class="form-group">
            <label
              for="inputTextLabelUpdate"
              class="columns medium-3 greyText editPropertiesLabel">
              {{'LABEL_TEXT' | translate}} :
            </label>
            <div class="columns medium-3">
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
              Required :
            </label>
            <div class="columns large-3">
              <div class="checkboxCssCorrection">
                &nbsp;
              </div>
              <input
                type="checkbox"
                ng-model="nyaSelect.temporyConfig.formlyRequired"
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
  </div>
  `,
  bindings: {
    nyaSelect: '=',
    basicSelectRowCollection: '=',
    newOptionBasicSelect: '=',
    addNewOptionBasicSelect: '&',
    upThisRow: '&',
    downThisRow: '&',
    removeRow: '&'
  },
  controller:
  class editBasicSelectController {
    static $inject = [];

    constructor() {

    }
  }
};

const editBasicSelectModuleName = 'stepway.editBasicSelect.module';
export default angular
                .module(editBasicSelectModuleName, [])
                .component(EDIT_BASIC_SELECT_COMPONENT, editBasicSelectControlComponent);
