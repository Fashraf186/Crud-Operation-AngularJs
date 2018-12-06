var rootapp = angular.module('rootApp', ['Services', 'Control']);

var app = angular.module("Services", []);

app.service('myService', function ($http) {

    this.getstudents = function () {
        return $http.get("/Students/Index")
    };

    this.getstudentbyid = function (studentID) {
        var response = $http({
            method: "post",
            url: "/Students/Details",
            params: { id: JSON.stringify.studentID }
        });
        return response;
    }

    this.getupdate = function (student) {
        var response = $http({
            method: "post",
            url: "/Students/Edit",
            Data: JSON.stringify(student),
            DataType: "json"
        });
        return response;
    }

    this.add = function (student) {
        var response = $http({
            method: "post",
            url: "/Students/Create",
            Data: JSON.stringify(student),
            DataType: "json"
        });
        return response;
    }
    this.delete = function (studentid) {
        var response = $http({
            method: "post",
            url: "Students/Delete",
            params: {
                studentid: JSON.stringify(studentid)
            }
        });
        return response;
    }
});