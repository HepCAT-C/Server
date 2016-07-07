var mainApp = angular.module("mainApp", ['ngRoute','mainApp.controller']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/signIn', {
            templateUrl: 'templates/AdminLogin.html',
            controller: 'AdminController'
        })		
	    .when('/home',{
			templateUrl : 'templates/RegisterAdminOrPatient.html',
			controller: 'AdminPatientRegContrller'
		})
		.when('/patientRegister',{
			templateUrl : 'templates/PatientRegistration.html',
			controller: 'PatientController'
		})
		.when('/doctorRegister',{
			templateUrl : 'templates/DoctorRegistration.html',
			controller : 'DoctorController'
		})
		.when('/adminRegister',{
			templateUrl: 'templates/AdminRegistration.html',
			controller: 'AdminRegController'
		})
		.when('/viewExistingPatients',{
			templateUrl : 'templates/ViewPatients.html',
			controller : 'ViewPatientsController'
		})
		.when('/viewExistingAdmins',{
			templateUrl : 'templates/ViewAdmin.html',
			controller : 'ViewAdminController'
		})
		.when('/viewExistingDoctors',{
			templateUrl : 'templates/ViewDoctors.html',
			controller : 'ViewDoctorsController'
		})
		.when('/bookGroupAppointment',{
			templateUrl : 'templates/BookGroupAppointment.html',
			controller : 'BookGrpAppntController'
		})
        .otherwise({
            redirectTo: '/signIn'
        });
});
