import './init';
import angular from 'angular';
import Schema from './schema';
import UISchema from './ui-schema';
import 'jsonforms';
import "bootstrap/dist/css/bootstrap.css";
import "angular-ui-bootstrap";
import 'angular-ui-bootstrap/src/rating';
import "./rating-control.js"

angular.module('jsonforms-seed').controller('MyController', ['$scope', function($scope) {
    $scope.schema = Schema;
    $scope.uiSchema = UISchema;
    $scope.data = {
        "name": "Send email to Adriana",
        "description": "Confirm if you have passed the subject",
        "done": true
    };
}]);
