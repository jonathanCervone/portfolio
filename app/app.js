var app = angular.module('app', ['ngRoute'])

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        controller: "homeController",
        templateUrl: "/app/views/home.html",
        title: "Home",
        description: "Home page for Jonathan Cervone's software development portfolio."
    });

    $routeProvider.when("/projects", {
        controller: "projectsController",
        templateUrl: "/app/views/projects.html",
        title: "Projects", 
        description: "Summary of software development projects Jonathan Cervone contributed to."
    });

    $routeProvider.when("/code", {
        controller: "codeController",
        templateUrl: "/app/views/code.html",
        title: "Code", 
        description: "Summary of code samples by Jonathan Cervone."
    });

    $routeProvider.when("/experience", {
        controller: "experienceController",
        templateUrl: "/app/views/experience.html",
        title: "Code",
        description: "Summary of experience obtained by Jonathan Cervone."
    });

    $routeProvider.when("/hobbies", {
        controller: "hobbiesController",
        templateUrl: "/app/views/hobbies.html",
        title: "Hobbies",
        descripition: ""
    });

    $routeProvider.otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
})