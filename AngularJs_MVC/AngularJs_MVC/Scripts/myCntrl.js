var app = angular.module("Control", []);
app.controller('myCntrl', function ($scope, myService) {
    $scope.divEmployee = false;
    getallstudents();
    //To Get All Records 
    function getallstudents() {
        debugger;
        var getData = myService.getstudents();
        debugger;
        getData.then(function (s) {
            $scope.student = s.data;
        }, function () {
            alert('Error in getting records');
        });
    }

     $scope.editEmployee = function (student) {
        debugger;
        var getData = myService.getstudentbyid(student.Id);
         getData.then(function (stu) {
             $scope.student = stu.data;
            $scope.studentId = student.Id;
            $scope.FirstName = student.fname;
            $scope.LastName = student.lname;
            $scope.EnrollmentDate = student.ed;
            $scope.Action = "Update";
            $scope.divEmployee = true;
        },
        function () {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateEmployee = function ()
    {
        debugger;
        var Student = {
            Name: $scope.studentId,
            FirstName: $scope.fname,
            LastName: $scope.lname
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Employee.Id = $scope.employeeId;
            var getData = myService.updateEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            var getData = myService.AddEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }
    function ClearFields() {
        $scope.studentId = "";
        $scope.FirstName = "";
        $scope.LastName = ""; }

    $scope.AddEmployeeDiv = function()
    {
        ClearFields();
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.deleteEmployee = function (employee)
    {
        var getData = myService.DeleteEmp(employee.Id);
        getData.then(function (msg) {
            GetAllEmployee();
            alert('Employee Deleted');
        },function(){
            alert('Error in Deleting Record');
        });
    }


});
