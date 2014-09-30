/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Users(entitySet) {
        /// <summary>
        /// Represents the Users entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this users.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this users.
        /// </field>
        /// <field name="Username" type="String">
        /// Gets or sets the username for this users.
        /// </field>
        /// <field name="EmailAddress" type="String">
        /// Gets or sets the emailAddress for this users.
        /// </field>
        /// <field name="Password" type="String">
        /// Gets or sets the password for this users.
        /// </field>
        /// <field name="ConfirmPassword" type="String">
        /// Gets or sets the confirmPassword for this users.
        /// </field>
        /// <field name="Admin" type="Boolean">
        /// Gets or sets the admin for this users.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this users.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this users.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this users.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this users.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this users.
        /// </field>
        /// <field name="details" type="msls.application.Users.Details">
        /// Gets the details for this users.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="UsersSet" type="msls.EntitySet">
        /// Gets the UsersSet entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Users: $defineEntity(Users, [
            { name: "Id", type: Number },
            { name: "Username", type: String },
            { name: "EmailAddress", type: String },
            { name: "Password", type: String },
            { name: "ConfirmPassword", type: String },
            { name: "Admin", type: Boolean },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "UsersSet", elementType: Users }
        ], [
            {
                name: "UsersSet_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.UsersSet },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/UsersSet(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
