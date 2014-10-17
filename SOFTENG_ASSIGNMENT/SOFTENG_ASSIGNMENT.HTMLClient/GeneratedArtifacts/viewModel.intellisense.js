/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.BrowseUsersSet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUsersSet
        },
        UsersList: {
            _$class: msls.ContentItem,
            _$name: "UsersList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseUsersSet,
            data: lightSwitchApplication.BrowseUsersSet,
            value: lightSwitchApplication.BrowseUsersSet
        },
        UsersSet: {
            _$class: msls.ContentItem,
            _$name: "UsersSet",
            _$parentName: "UsersList",
            screen: lightSwitchApplication.BrowseUsersSet,
            data: lightSwitchApplication.BrowseUsersSet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUsersSet,
                _$entry: {
                    elementType: lightSwitchApplication.Users
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "UsersSet",
            screen: lightSwitchApplication.BrowseUsersSet,
            data: lightSwitchApplication.Users,
            value: lightSwitchApplication.Users
        },
        Username: {
            _$class: msls.ContentItem,
            _$name: "Username",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsersSet,
            data: lightSwitchApplication.Users,
            value: String
        },
        EmailAddress: {
            _$class: msls.ContentItem,
            _$name: "EmailAddress",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsersSet,
            data: lightSwitchApplication.Users,
            value: String
        },
        Password: {
            _$class: msls.ContentItem,
            _$name: "Password",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsersSet,
            data: lightSwitchApplication.Users,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUsersSet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseUsersSet, {
        /// <field>
        /// Called when a new BrowseUsersSet screen is created.
        /// <br/>created(msls.application.BrowseUsersSet screen)
        /// </field>
        created: [lightSwitchApplication.BrowseUsersSet],
        /// <field>
        /// Called before changes on an active BrowseUsersSet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseUsersSet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseUsersSet],
        /// <field>
        /// Called after the UsersList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UsersList_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsersSet().findContentItem("UsersList"); }],
        /// <field>
        /// Called after the UsersSet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UsersSet_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsersSet().findContentItem("UsersSet"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsersSet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Username content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Username_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsersSet().findContentItem("Username"); }],
        /// <field>
        /// Called after the EmailAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailAddress_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsersSet().findContentItem("EmailAddress"); }],
        /// <field>
        /// Called after the Password content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Password_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsersSet().findContentItem("Password"); }]
    });

    lightSwitchApplication.LoginPage.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.LoginPage
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.LoginPage,
            data: lightSwitchApplication.LoginPage,
            value: lightSwitchApplication.LoginPage
        },
        Username: {
            _$class: msls.ContentItem,
            _$name: "Username",
            _$parentName: "Group",
            screen: lightSwitchApplication.LoginPage,
            data: lightSwitchApplication.LoginPage,
            value: String
        },
        Password: {
            _$class: msls.ContentItem,
            _$name: "Password",
            _$parentName: "Group",
            screen: lightSwitchApplication.LoginPage,
            data: lightSwitchApplication.LoginPage,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.LoginPage,
            data: lightSwitchApplication.LoginPage,
            value: lightSwitchApplication.LoginPage
        },
        Submit: {
            _$class: msls.ContentItem,
            _$name: "Submit",
            _$parentName: "Group1",
            screen: lightSwitchApplication.LoginPage
        },
        ForgotPassword: {
            _$class: msls.ContentItem,
            _$name: "ForgotPassword",
            _$parentName: "Group1",
            screen: lightSwitchApplication.LoginPage
        },
        Register: {
            _$class: msls.ContentItem,
            _$name: "Register",
            _$parentName: "Group1",
            screen: lightSwitchApplication.LoginPage
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.LoginPage
        }
    };

    msls._addEntryPoints(lightSwitchApplication.LoginPage, {
        /// <field>
        /// Called when a new LoginPage screen is created.
        /// <br/>created(msls.application.LoginPage screen)
        /// </field>
        created: [lightSwitchApplication.LoginPage],
        /// <field>
        /// Called before changes on an active LoginPage screen are applied.
        /// <br/>beforeApplyChanges(msls.application.LoginPage screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.LoginPage],
        /// <field>
        /// Called to determine if the Submit method can be executed.
        /// <br/>canExecute(msls.application.LoginPage screen)
        /// </field>
        Submit_canExecute: [lightSwitchApplication.LoginPage],
        /// <field>
        /// Called to execute the Submit method.
        /// <br/>execute(msls.application.LoginPage screen)
        /// </field>
        Submit_execute: [lightSwitchApplication.LoginPage],
        /// <field>
        /// Called to determine if the ForgotPassword method can be executed.
        /// <br/>canExecute(msls.application.LoginPage screen)
        /// </field>
        ForgotPassword_canExecute: [lightSwitchApplication.LoginPage],
        /// <field>
        /// Called to execute the ForgotPassword method.
        /// <br/>execute(msls.application.LoginPage screen)
        /// </field>
        ForgotPassword_execute: [lightSwitchApplication.LoginPage],
        /// <field>
        /// Called to determine if the Register method can be executed.
        /// <br/>canExecute(msls.application.LoginPage screen)
        /// </field>
        Register_canExecute: [lightSwitchApplication.LoginPage],
        /// <field>
        /// Called to execute the Register method.
        /// <br/>execute(msls.application.LoginPage screen)
        /// </field>
        Register_execute: [lightSwitchApplication.LoginPage],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.LoginPage().findContentItem("Group"); }],
        /// <field>
        /// Called after the Username content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Username_postRender: [$element, function () { return new lightSwitchApplication.LoginPage().findContentItem("Username"); }],
        /// <field>
        /// Called after the Password content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Password_postRender: [$element, function () { return new lightSwitchApplication.LoginPage().findContentItem("Password"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.LoginPage().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Submit content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Submit_postRender: [$element, function () { return new lightSwitchApplication.LoginPage().findContentItem("Submit"); }],
        /// <field>
        /// Called after the ForgotPassword content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ForgotPassword_postRender: [$element, function () { return new lightSwitchApplication.LoginPage().findContentItem("ForgotPassword"); }],
        /// <field>
        /// Called after the Register content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Register_postRender: [$element, function () { return new lightSwitchApplication.LoginPage().findContentItem("Register"); }]
    });

    lightSwitchApplication.RegisterPage.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RegisterPage
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.RegisterPage,
            value: lightSwitchApplication.RegisterPage
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.RegisterPage,
            value: lightSwitchApplication.Users
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.Users,
            value: lightSwitchApplication.Users
        },
        Username: {
            _$class: msls.ContentItem,
            _$name: "Username",
            _$parentName: "left",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.Users,
            value: String
        },
        EmailAddress: {
            _$class: msls.ContentItem,
            _$name: "EmailAddress",
            _$parentName: "left",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.Users,
            value: String
        },
        Password: {
            _$class: msls.ContentItem,
            _$name: "Password",
            _$parentName: "left",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.Users,
            value: String
        },
        ConfirmPassword: {
            _$class: msls.ContentItem,
            _$name: "ConfirmPassword",
            _$parentName: "left",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.Users,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.Users,
            value: lightSwitchApplication.Users
        },
        Admin: {
            _$class: msls.ContentItem,
            _$name: "Admin",
            _$parentName: "right",
            screen: lightSwitchApplication.RegisterPage,
            data: lightSwitchApplication.Users,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RegisterPage
        }
    };

    msls._addEntryPoints(lightSwitchApplication.RegisterPage, {
        /// <field>
        /// Called when a new RegisterPage screen is created.
        /// <br/>created(msls.application.RegisterPage screen)
        /// </field>
        created: [lightSwitchApplication.RegisterPage],
        /// <field>
        /// Called before changes on an active RegisterPage screen are applied.
        /// <br/>beforeApplyChanges(msls.application.RegisterPage screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.RegisterPage],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("left"); }],
        /// <field>
        /// Called after the Username content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Username_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("Username"); }],
        /// <field>
        /// Called after the EmailAddress content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailAddress_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("EmailAddress"); }],
        /// <field>
        /// Called after the Password content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Password_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("Password"); }],
        /// <field>
        /// Called after the ConfirmPassword content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConfirmPassword_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("ConfirmPassword"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("right"); }],
        /// <field>
        /// Called after the Admin content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Admin_postRender: [$element, function () { return new lightSwitchApplication.RegisterPage().findContentItem("Admin"); }]
    });

}(msls.application));