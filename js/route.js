var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/noticeBoard", {
            templateUrl: "views/noticeBoard.html"
        })
        .when("/vechicleLog", {
            templateUrl: "views/vechicleLog.html"
        })
        .when("/familyMembers", {
            templateUrl: "views/familyMembers.html"
        })
        .when("/residentDirectory", {
            templateUrl: "views/residentDirectory.html"
        })
        .when("/dailyHelps", {
            templateUrl: "views/dailyHelps.html"
        })
        .when("/hireNewHelp", {
            templateUrl: "views/hireNewHelp.html"
        })
        .when("/sos", {
            templateUrl: "views/sos.html"
        })
        
        .when("/registerVehicle", {
            templateUrl: "views/registerVehicle.html"
        })
        .when("/communicate", {
            templateUrl: "views/communicate.html"
        })
        .when("/blockResident", {
            templateUrl: "views/blockResident.html"
        })
        .when("/registerFamilyMember", {
            templateUrl: "views/registerFamilyMember.html"
        });
});