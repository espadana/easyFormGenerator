export const EDIT_SUBTITLE_CONTROL_COMPONENT = 'editSubTitleControl';

export const editSubTitleControlComponent = {
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
                  <div class="">
                    <h4 class="text-center">
                      {{$ctrl.nyaSelect.temporyConfig.formlyPlaceholder}}
                    </h4>
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
            <h5
              class="greyText">
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
              for="inputSubTitleTextUpdate"
              class="columns medium-3 greyText editPropertiesLabel">
              {{'SUBTITLE_TEXT' | translate}} :
            </label>
            <div class="columns medium-3">
              <input
                type="text"
                ng-model="$ctrl.nyaSelect.temporyConfig.formlyPlaceholder"
                id="inputSubTitleTextUpdate"
                placeholder="{{'ADD_EDIT_SUBTIL_HERE' | translate}}">
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
  class editSubTitleControlController {
    static $inject = [];

    constructor() {
      //
    }
  }
};


const editSubTitleModuleName = 'stepway.editSubTitleControl.module';

export default angular
                .module(editSubTitleModuleName, [])
                .component(EDIT_SUBTITLE_CONTROL_COMPONENT, editSubTitleControlComponent);
