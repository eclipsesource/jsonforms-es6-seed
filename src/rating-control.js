import {AbstractControl, Testers, schemaTypeIs, schemaPropertyName, PathResolver} from "jsonforms";

class RatingControlDirective {
    constructor(){
        this.template = `
            <jsonforms-control>
              <uib-rating
                id="{{vm.id}}"
                readonly="vm.uiSchema.readOnly"
                ng-model="vm.resolvedData[vm.fragment]"
                max="vm.max()"></uib-rating>
              </uib-rating>
            </jsonforms-control>`;

        this.controller = RatingControl;
        this.controllerAs = 'vm';
    }

}

class RatingControl extends AbstractControl {
    constructor(scope) {
        super(scope);
    }

    max() {
        const schemaElement = PathResolver.resolveSchema(this.schema, this.schemaPath);
        if (schemaElement['maximum'] !== undefined) {
            return schemaElement['maximum'];
        } else {
            return 5;
        }
    }
}
RatingControl.$inject = ['$scope'];

export default angular
    .module('jsonforms-seed')
    .directive('ratingControl', () => new RatingControlDirective())
    .run(['RendererService', RendererService =>
        RendererService.register('rating-control',
            Testers.and(
                schemaTypeIs('integer'),
                schemaPropertyName('rating')
            ), 101)
    ]).name;