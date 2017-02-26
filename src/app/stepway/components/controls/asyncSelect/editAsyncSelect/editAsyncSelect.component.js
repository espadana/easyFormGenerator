import endPointModel, {
  ENDPOINTMODEL_SERVICE
}                       from './endPointsModel';

export const EDIT_ASYNC_SELECT_COMPONENT = 'editAsyncSelectControl';
export const editAsyncSelectControlComponent = {
  template: `<div class='card'>
  <div class='card-section'>
    <div class='row'>
      <div class='columns medium-12'>
        <h5 class='greyText'>&nbsp; {{'PREVIEW_TAB' | translate}} :</h5>
      </div>
    </div>
    <hr />
    <div class='row'>
      <div class='columns medium-12'>
        <div><label class=' textControlLabel' for='AsyncSelect'> {{$ctrl.nyaSelect.temporyConfig.formlyLabel}} <span class='textControlLabel' ng-if='$ctrl.nyaSelect.temporyConfig.formlyRequired'> * </span> </label>
          <div class='row'>
            <select  id='asyncSelect' class='columns small-12'> 
            </select></div>
          <p class='help-text'>{{$ctrl.nyaSelect.temporyConfig.formlyDescription}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class='card'>
  <div class='card-section'>
    <div class='row'>
      <div class='columns medium-12'>
        <h5 class='greyText'>&nbsp; {{'EDIT_PROPERTIES' | translate}} :</h5>
      </div>
    </div>
    <br />
    <hr />
    <div class='row'>
      <div class=''><label class='columns medium-3 greyText editPropertiesLabel' for='inputTextLabelUpdate'> {{'LABEL_TEXT' | translate}} : </label>
        <div class='columns medium-9'><input id='inputTextLabelUpdate' type='text' placeholder='{{'ADD_EDIT_LABEL_HERE' | translate}}' ng-model='$ctrl.nyaSelect.temporyConfig.formlyLabel'
          /></div>
      </div>
    </div>
    <div class='marginTopFivepixels'>&nbsp;</div>
    <div class='row'>
      <div class=''><label class='columns medium-3  greyText editPropertiesLabel' for='inputTextRequiredUpdate'> Required : </label>
        <div class='columns large-9'>
          <div class='checkboxCssCorrection'>&nbsp;</div>
          <input id='inputTextRequiredUpdate' type='checkbox' ng-model='$ctrl.nyaSelect.temporyConfig.formlyRequired' /></div>
      </div>
    </div>
    <div class='marginTopFivepixels'>&nbsp;</div>
    <div class='row'>
      <div class=''><label class='columns medium-3  greyText editPropertiesLabel' for='inputTextDescriptionUpdate'> {{'DESCRIPTION' | translate}} : </label>
        <div class='columns medium-9'><input ng-model='$ctrl.nyaSelect.temporyConfig.formlyDescription' id='inputTextDescriptionUpdate' class='' type='text'
            placeholder='{{'ADDEDIT_DESCRIPTION' | translate}}' /></div>
        <div class='columns medium-9'>&nbsp;</div>
      </div>
    </div>

    <div class='row'>
      <div class=''><label class='columns medium-3  greyText editPropertiesLabel' for='inputTextDescriptionUpdate'> {{'SOURCE_TEXT' | translate}} : </label>
        <div class='columns medium-9'><select ng-options='item as item.linkTitle for item in $ctrl.endPointList track by item.link' ng-model='$ctrl.selectedAPI' id='inputTextDescriptionUpdate' class='' type='text' placeholder='{{'SOURCE_TEXT' | translate}}' ng-change='$ctrl.changeSource()'> </select></div>
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
  class editAsyncSelectController {
    static $inject = ['$http','endPointModel' ];

    constructor($http,) {
      var vm = this;
debugger;
      const hostName = window.location.hostname;
      const protocol = window.location.protocol + '//';
      const port = 'http://localhost:5000/api/';
      //window.location.port.length > 0 ? ':'+window.location.port : '' 
      getSource();
      vm.endPointModel = endPointModel;
      vm.endPointList ;
      vm.changeSource = changeSource;

      function getSource(){
        $http.get("http://localhost:5000/api/wffield").then(
          (data)=>{
            let list = [];
            data.data.entity.data.forEach(function(item) {
              list.push({linkTitle: item.name, link: item.routeAddress});
            }, this);
            vm.endPointList = list;
          }
        );
      }
      
      function changeSource() {
        /* eslint-disable no-console */
        // console.log(vm.endPointModel);
        // console.log(protocol + hostName + ':' + port + '/api' + vm.selectedAPI.link);
        $http.get(port + vm.selectedAPI.link ).then(
          function(data) {
            asyncSelectModel = data;
          }
        );
        /* eslint-enable no-console */
      }

    }
  }
};

const editAsyncSelectModuleName = 'stepway.editAsyncSelect.module';
export default angular
                .module(editAsyncSelectModuleName, [])
                .component(EDIT_ASYNC_SELECT_COMPONENT, editAsyncSelectControlComponent)
                .service(ENDPOINTMODEL_SERVICE, endPointModel);
