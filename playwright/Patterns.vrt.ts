import { runVisualRegressionTest } from './helpers/helper';

runVisualRegressionTest('patterns/Cards/LinkCardGrid/LinkCardGrid', {
  fileNamePrefix: 'LinkCardGrid-',
  testConfiguration: { normal: { skipWebkit: true } }, // @TODO: fix in webkit
});
runVisualRegressionTest(
  'patterns/Cards/LinkCardResponsive/LinkCardResponsive',
  {
    fileNamePrefix: 'LinkCardResponsive-',
  }
);
runVisualRegressionTest('patterns/Forms/FormLibraries/FormLibrariesFormik', {
  fileNamePrefix: 'FormLibrariesFormik-',
});
runVisualRegressionTest(
  'patterns/Forms/FormLibraries/FormLibrariesReactHookForm',
  { fileNamePrefix: 'FormLibrariesReactHookForm-' }
);
runVisualRegressionTest('patterns/Forms/Layout/FormLayout', {
  fileNamePrefix: 'FormLayout-',
});
runVisualRegressionTest('patterns/Header/BrandAddOn/HeaderPatternBrandAddOn', {
  fileNamePrefix: 'HeaderPatternBrandAddOn-',
});
runVisualRegressionTest('patterns/Header/Complete/HeaderPatternComplete', {
  fileNamePrefix: 'HeaderPatternComplete-',
});
runVisualRegressionTest('patterns/Header/MegaMenu/HeaderPatternMegaMenu', {
  fileNamePrefix: 'HeaderPatternMegaMenu-',
});
runVisualRegressionTest(
  'patterns/Header/PrimaryArea/HeaderPatternPrimaryArea',
  { fileNamePrefix: 'HeaderPatternPrimaryArea-' }
);
