using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ProjectTest
{
    [TestClass]
    public class UsersTest
    {
        [TestMethod]
        public void Password_ValidateTest()
        {
            string working1 = "CQR4QF!3";
            string working2 = "1HO%APU81H";
            string working3 = "#BSSPW4CBQX#";

            string nonworking1 = "8wb7nsx";
            string nonworking2 = "3P#RH5";
            string nonworking3 = "7baj8*8h1k";

            Assert.IsTrue(System.Text.RegularExpressions.Regex.IsMatch(working1, (@"[A-Z]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(working1, (@"[0-9]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(working1, (@"(!|#|%|\*)+")));
            Assert.IsTrue(System.Text.RegularExpressions.Regex.IsMatch(working2, (@"[A-Z]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(working2, (@"[0-9]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(working2, (@"(!|#|%|\*)+")));
            Assert.IsTrue(System.Text.RegularExpressions.Regex.IsMatch(working3, (@"[A-Z]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(working3, (@"[0-9]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(working3, (@"(!|#|%|\*)+")));

            Assert.IsTrue((working1.Length >= 8 && working1.Length <= 12));
            Assert.IsTrue((working2.Length >= 8 && working2.Length <= 12));
            Assert.IsTrue((working3.Length >= 8 && working3.Length <= 12));

            Assert.IsFalse(System.Text.RegularExpressions.Regex.IsMatch(nonworking1, (@"[A-Z]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(nonworking1, (@"[0-9]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(nonworking1, (@"(!|#|%|\*)+")));
            Assert.IsFalse(nonworking2.Length >= 8 );
            Assert.IsFalse(System.Text.RegularExpressions.Regex.IsMatch(nonworking3, (@"[A-Z]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(nonworking3, (@"[0-9]+")) &&
                            System.Text.RegularExpressions.Regex.IsMatch(nonworking3, (@"(!|#|%|\*)+")));
        }
    }
}
