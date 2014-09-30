/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function LoginPage(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the LoginPage screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Username" type="String">
        /// Gets or sets the username for this screen.
        /// </field>
        /// <field name="Password" type="String">
        /// Gets or sets the password for this screen.
        /// </field>
        /// <field name="UsersSet" type="msls.VisualCollection" elementType="msls.application.Users">
        /// Gets the usersSet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.LoginPage.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "LoginPage", parameters);
    }

    function RegisterPage(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the RegisterPage screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Users" type="msls.application.Users">
        /// Gets or sets the users for this screen.
        /// </field>
        /// <field name="details" type="msls.application.RegisterPage.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "RegisterPage", parameters);
    }

    msls._addToNamespace("msls.application", {

        LoginPage: $defineScreen(LoginPage, [
            { name: "Username", kind: "local", type: String },
            { name: "Password", kind: "local", type: String },
            {
                name: "UsersSet", kind: "collection", elementType: lightSwitchApplication.Users,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.UsersSet;
                }
            }
        ], [
            { name: "Submit" },
            { name: "ForgotPassword" },
            { name: "Register" }
        ]),

        RegisterPage: $defineScreen(RegisterPage, [
            { name: "Users", kind: "local", type: lightSwitchApplication.Users }
        ], [
        ]),

        showLoginPage: $defineShowScreen(function showLoginPage(options) {
            /// <summary>
            /// Asynchronously navigates forward to the LoginPage screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("LoginPage", parameters, options);
        }),

        showRegisterPage: $defineShowScreen(function showRegisterPage(Users, options) {
            /// <summary>
            /// Asynchronously navigates forward to the RegisterPage screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("RegisterPage", parameters, options);
        })

    });

}(msls.application));
