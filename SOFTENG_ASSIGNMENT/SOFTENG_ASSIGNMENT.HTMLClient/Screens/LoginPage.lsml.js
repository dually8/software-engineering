/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.LoginPage.Password_postRender = function (element, contentItem) {
    $(element).find("input").get(0).type = "password";
};
myapp.LoginPage.Submit_execute = function (screen) {
    screen.getUsersSet().then(function (result) {
        var user = result.data.filter(function (value) {
            console.log("Value: " + value.Username + "\tPassword: " + value.Password);
            console.log("Screen: " + screen.Username + "\tPassword: " + screen.Password);
            return ((value.Password == screen.Password) && (value.Username == screen.Username));
        });

        console.log("user: " + user[0].Username + "\tPassword" + user[0].Password);
      
        if (user[0] != undefined || user[0] != null) {
            //window.alert("Found user: " + user[0].Username);
            myapp.showRegisterPage(user[0]);
        }
    });
};