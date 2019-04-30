import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/schematics', 'lib', {
      name: schema.name,
      framework: 'angular',
      lazy: false,
      style: 'scss',
      routing: false,
      prefix: 'fxy',
      unitTestRunner: 'jest'
    })
  ]);
}
