export const EDIT_RICH_TEXT_EDITOR_COMPONENT = 'editRichTextEditorControl';

export const editRichTextEditorControlComponent = {
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
            <div >
              <label
                for="RichTextEditor"
                class="textControlLabel">
                {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
                <span
                  ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                  class="textControlLabel">
                  *
                </span>
              </label>
              <div class="">
                <text-angular
                  ng-model="$ctrl.model[options.key]">
                </text-angular>
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
    <!-- required can't be applied to rich text editor (textAngular) right now -->
    <!--<div class="row">
          <div >
            <label
              for="inputTextRequiredUpdate"
              class="columns medium-3  greyText editPropertiesLabel">Required :
            </label>
            <div class="columns medium-9">
              <div class="checkboxCssCorrection">
                &nbsp;
              </div>
              <input
                type="checkbox"
                ng-model="nyaSelect.temporyConfig.formlyRequired" id="inputTextRequiredUpdate">
            </div>
          </div>
        </div>
        <div class="marginTopFivepixels"></div>-->
        <div class="row">
          <div >
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
    nyaSelect: '='
  },
  controller:
  class editRichTextEditorControlController {
    static $inject = [];

    constructor() {
      //
    }
  }
};

const editRichTextEditorModuleName = 'stepway.editRichTextEditor.module';
export default angular
                .module(editRichTextEditorModuleName, [])
                .component(EDIT_RICH_TEXT_EDITOR_COMPONENT, editRichTextEditorControlComponent);
