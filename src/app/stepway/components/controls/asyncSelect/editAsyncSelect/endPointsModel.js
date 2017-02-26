const ENDPOINTMODEL_SERVICE = 'endPointModel';

function endPointModel($http) {
 return function () {alert(1);
    return [1];
  };
}


const TO_INJECT = [
  '$http'
];


endPointModel.$inject = TO_INJECT;

export default endPointModel;

export {
  ENDPOINTMODEL_SERVICE
};
