export const EDIT_CHOOSE_CONTROL_COMPONENT = 'editChooseControl';

export const editChooseControlComponent = {
  template: `
  <ol
    class="nya-bs-select columns small-12"
    ng-model="$ctrl.modelNyaSelect"
    data-live-search="false">
    <li nya-bs-option="option in $ctrl.nyaSelectFiltered.controls group by option.group">
      <span class="dropdown-header greyText">
        {{ $group }}
      </span> <!-- group header cannot be searched -->
      <a ng-click="$ctrl.selectThisControl({optionId: option.id})">
        <span>
          {{ option.name }}
        </span>
        <span class="fa fa-check"></span>
      </a>
    </li>
  </ol>
  `,
  bindings: {
    modelNyaSelect:     '=',
    nyaSelectFiltered:  '=',
    selectThisControl:  '&'
  },
  controller:
  class editChooseControlController {
    static $inject = [];

    constructor() {
      //
    }
  }
};
