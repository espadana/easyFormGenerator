export const  END_POINT_MODEL_ASYNC_SELECT = 'endPointModel';

export class endPointModel{
  getList(){
    return [{
      routeAddress: 'news',
      name: 'News'
    }]
  }
}

export const END_POINT_MODEL_ASYNC_SELECT_MODUlE = 'stepway.editAsyncSelect.module';

export default  angular
                .module(END_POINT_MODEL_ASYNC_SELECT_MODUlE,[])
                .service(END_POINT_MODEL_ASYNC_SELECT, endPointModel )