/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Users, {
        /// <field>
        /// Called when a new users is created.
        /// <br/>created(msls.application.Users entity)
        /// </field>
        created: [lightSwitchApplication.Users]
    });

}(msls.application));
