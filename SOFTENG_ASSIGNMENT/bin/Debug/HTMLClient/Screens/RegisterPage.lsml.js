/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.RegisterPage.Password_postRender = function (element, contentItem) {
    $(element).find("input").get(0).type = "password";
};
myapp.RegisterPage.ConfirmPassword_postRender = function (element, contentItem) {
    $(element).find("input").get(0).type = "password";
};
myapp.RegisterPage.beforeApplyChanges = function (screen) {
    // Write code here.
    if (screen.Users.Admin == undefined) {
        screen.Users.Admin = false;
    }
};
myapp.RegisterPage.created = function (screen) {
    // Write code here.
    if (screen.Users.Admin == undefined) {
        screen.Users.Admin = false;
    }
};