export const STEP_TWO_COMMAND_PANEL_COMPONENT_NAME = 'stepTwoCommandPanel';

export const StepTwoCommandPanelComponent = {
  template: `
  <div id="commandPanel">
    <div  class="card">
      <div class="card-divider">
        <h3>
          <i class="fa fa-keyboard-o"></i>
          &nbsp;
          {{'COMMAND_PANEL' | translate}}
        </h3>
      </div>
      <div class="card-section">
        <div class="row">
          <div class="columns medium-12">
            <h4 class="numberOfcolumsText text-center">
              - {{'APPLY_CTRL2COL' | translate}} -
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="columns large-12" >
            <hr/>
            <blockquote>
              <p class="numberOfcolumsText">
                <i class="fa fa-minus"></i>
                &nbsp;
                {{'CLIC_TAP_2_OPEN' | translate}}.
              </p>
              <p class="numberOfcolumsText">
                <i class="fa fa-minus"></i>
                &nbsp;
                {{'SELECT_2_APPLY_COL' | translate}}.
              </p>
          </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  bindings: {

  },
  controller:
  class StepTwoCommandPanelController {
    static $inject = [];

    constructor() {
      //
    }
  }
};
