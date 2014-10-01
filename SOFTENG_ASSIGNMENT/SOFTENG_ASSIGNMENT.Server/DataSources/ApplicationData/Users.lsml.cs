using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication
{
    public partial class Users
    {
        partial void Password_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.Password.Length < 8 || this.Password.Length > 12)
            {
                results.AddPropertyError("Password must be between 8 and 12 characters");
            }
            if (!(System.Text.RegularExpressions.Regex.IsMatch(this.Password, (@"[A-Z]+")) &&
                System.Text.RegularExpressions.Regex.IsMatch(this.Password, (@"[0-9]+")) &&
                System.Text.RegularExpressions.Regex.IsMatch(this.Password, (@"(!|#|%|\*)+"))))
            {
                results.AddPropertyError("Password must contain at least one uppercase character, one digit, and one special character (!, #, %, *)");
            }
        }

        partial void ConfirmPassword_Validate(EntityValidationResultsBuilder results)
        {
            // results.AddPropertyError("<Error-Message>");
            if (this.ConfirmPassword != this.Password)
            {
                results.AddPropertyError("Passwords must match!");
            }
        }
    }
}
