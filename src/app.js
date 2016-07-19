import angular from 'angular';
import Schema from './schema';
import UISchema from './ui-schema';
import 'jsonforms';

const app = angular.module('jsonforms-seed', ['jsonforms']);
app.controller('MyController', ['$scope', function($scope) {
    $scope.schema = Schema;
    $scope.uiSchema = UISchema;
    $scope.data = {
        "name": 'John Doe',
        "age": 36,
        "height": 1.85,
        "gender": 'Male'
    };
}]);
