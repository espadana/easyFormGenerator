export const EDIT_GROUPED_SELECT_COMPONENT = 'editGroupedSelectControl';

export const editGroupedSelectControlComponent = {
  template: `
    <div class="card">
    <div class="card-section">
      <div class="row">
        <div class="columns medium-12">
          <h5
            class="greyText">
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
              for="select"
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
                ng-model="modelGroupedSelect"
                data-live-search="true"
                disabled="$ctrl.groupedSelectRowCollection.rows.length === 0">
                <li
                  nya-bs-option="groupedSelectRow in $ctrl.groupedSelectRowCollection.rows group by groupedSelectRow.group"
                  value="$index">
                  <span class="dropdown-header">
                    {{groupedSelectRow.group}}
                  </span>
                  <a>
                    <span>
                      {{groupedSelectRow.option}}
                    </span>
                    <span class="glyphicon glyphicon-ok check-mark">
                    </span>
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
            for="groupedSelectRowCollection"
            class=" control-label greyText editPropertiesLabel">
            {{'ADD_NEW_OPTIONS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="form-group">
            <div class="columns medium-9">
              <input
                type="text"
                class="form-control"
                id="inputAddNewGroupedOption"
                placeholder="{{'ADD_A_NEW_OPTION' | translate}}"
                ng-model="$ctrl.newOptionGroupedSelect.saisie">
            </div>
            <div class="columns medium-3">
              <button
                class="button primary"
                ng-click="$ctrl.addNewOptionGroupedSelect()">
                {{'ADD' | translate}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns medium-3">
          <label
            for="groupedSelectRowCollection"
            class=" control-label greyText editPropertiesLabel">
            {{'ADD_NEW_GROUPS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="form-group">
            <div class="columns medium-9">
              <input
                id="inputAddNewGroupGroupedOption"
                type="text"
                class="form-control"
                ng-model="$ctrl.newGroupGroupedSelect.saisie" id="inputTextLabelUpdateGroupedSelect"
                placeholder="{{'ADD_A_NEW_GROUP' | translate}}">
            </div>
            <div class="columns small-3">
              <button
                class="button primary"
                ng-click="$ctrl.addNewGroupToGroupedSelect()">
                {{'ADD' | translate}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns medium-3">
          <label  class=" control-label greyText editPropertiesLabel">
            {{'EDIT_GROUPS_OPTIONS' | translate}} :
          </label>
        </div>
      </div>
      <div class="row">
        <div class="form-group">
          <div class="columns small-3">
            <div class="container">
              <div ng-if="$ctrl.groupedSelectRowCollection.rows.length === 0">
                <h5 class="text-center greyText">
                  <em>
                    - {{'NO_OPTION_ADD_NEW' | translate}} -
                  </em>
                </h5>
              </div>
              <table
                ng-if="$ctrl.groupedSelectRowCollection.rows.length > 0"
                class="table-scroll stack hover">
                <thead>
                  <tr>
                    <th st-ratio="20">
                      {{'ORDER' | translate}}
                    </th>
                    <th st-ratio="25">
                      {{'GROUP' | translate}}
                    </th>
                    <th st-ratio="30">
                      {{'OPTION' | translate}}
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                  <tr>
                    <th st-ratio="20">
                    </th>
                    <th st-ratio="25">
                    </th>
                    <th st-ratio="30">
                      <input
                        ng-model="$ctrl.groupedSelectFilter"
                        placeholder="{{'SEARCH_4_OPTION' | translate}}"
                        type="search"
                      />
                    </th>
                    <th st-ratio="25">
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr ng-repeat="groupedSelectRow in $ctrl.groupedSelectRowCollection.rows | filter:$ctrl.groupedSelectFilter as groupedSelectRow">
                    <td st-ratio="20">
                      {{$index}}
                    </td>
                    <td st-ratio="25">
                      <div ng-if="$ctrl.groupSelectGroupClick.showList === true">
                        <div ng-if="$ctrl.groupedSelectGroups.list.length === 0">
                          <p class="text-left noGroupText">- {{'NO_GROUP_ADD_NEW' | translate}} -</p>
                        </div>
                        <div ng-if="$ctrl.groupedSelectGroups.list.length > 0">
                          <ol
                            class="nya-bs-select columns medium-12 editGroupedSelectnyaSelect"
                            ng-model="groupedSelectRow.group"
                            id="modelGroupedOptionGroupedChoose"
                            disabled="$ctrl.groupedSelectGroups.list.length === 0">
                            <li
                              class="nya-bs-option"
                              nya-bs-option="GroupedSelectGroup in $ctrl.groupedSelectGroups.list"
                              value="GroupedSelectGroup">
                              <a>{{GroupedSelectGroup}}</a>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div ng-if="$ctrl.groupSelectGroupClick.showList === false">
                        {{groupedSelectRow.group}}
                      </div>
                    </td>
                    <td st-ratio="30">
                      {{groupedSelectRow.option}}
                    </td>
                    <td st-ratio="25">
                      <div class="float-right">
                        <button
                          class="button primary"
                          ng-click="$ctrl.upThisGroupedSelectRow({index: $index})">
                          <i class="fa fa-arrow-up"></i>
                        </button>
                        <button
                          class="button primary"
                          ng-click="$ctrl.downThisGroupedSelectRow({index: $index})">
                          <i class="fa fa-arrow-down"></i>
                        </button>
                        <button
                          class="button warning"
                          ng-click="$ctrl.showGroupListToChoose()">
                          <i class="fa fa-pencil-square-o"></i>
                        </button>
                        <button
                          class="button alert"
                          ng-click="$ctrl.removeGroupedSelectRow({index: $index})">
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
  `,
  bindings: {
    nyaSelect:                  '=',
    groupedSelectRowCollection: '=',
    newOptionGroupedSelect:     '=',
    newGroupGroupedSelect:      '=',
    groupSelectGroupClick:      '=',
    groupedSelectGroups:        '=',

    addNewOptionGroupedSelect:  '&',
    addNewGroupToGroupedSelect: '&',
    upThisGroupedSelectRow:     '&',
    downThisGroupedSelectRow:   '&',
    showGroupListToChoose:      '&',
    removeGroupedSelectRow:     '&'
  },
  controller    :
  class editGroupedSelectControlController {
    static $inject = [];

    constructor() {

    }
  }
};

const editGroupedSelectModuleName = 'stepway.editGroupedSelect.module';

export default angular
                .module(editGroupedSelectModuleName, [])
                .component(EDIT_GROUPED_SELECT_COMPONENT, editGroupedSelectControlComponent);
