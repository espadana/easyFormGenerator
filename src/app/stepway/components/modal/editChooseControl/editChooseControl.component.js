export const EDIT_CHOOSE_CONTROL_COMPONENT = 'editChooseControl';

export const editChooseControlComponent = {
  template: `
  <div
    class="nya-bs-select columns small-12"
    ng-model="$ctrl.modelNyaSelect"
    data-live-search="false">
    <select ng-model="$ctrl.selectedControll" ng-change="$ctrl.change();" ng-options="option.name group by option.group for option in $ctrl.nyaSelectFiltered.controls">
    </select>
  </div
  `,
  bindings: {
    modelNyaSelect: '=',
    nyaSelectFiltered: '=',
    selectThisControl: '&'
  },
  controller:
  class editChooseControlController {
    
    static $inject = [];

    constructor() {
      var vm = this;
      vm.change = change;

      function change() {
        vm.selectThisControl({optionId: vm.selectedControll.id});
      }
    }
  }
};
