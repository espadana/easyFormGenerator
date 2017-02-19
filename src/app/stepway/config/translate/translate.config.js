import localEn   from '../../i18n/local-en.json';
import localFa from '../../i18n/local-fa.json';

export const TRANSLATE_CONFIG = 'easyFormTranslateConfig';

function translateConfig($translateProvider) {
  $translateProvider.translations('en', localEn);
  $translateProvider.translations('fa', localFa);
}
translateConfig.$inject = ['$translateProvider'];


export const TRANSLATE_MODULE = 'eda.easyFormGenerator.translate';
export default angular
                .module(TRANSLATE_MODULE, [])
                .config(translateConfig);
