using System.Web;
using System.Web.Optimization;

namespace Bestco
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Assets/js/jquery-{version}.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Assets/js/jquery.validate*"
            ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Assets/js/modernizr-*"
            ));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Assets/js/bootstrap.js",
                "~/Assets/js/app_init.min.js",
                "~/Assets/js/plugins/datepicker/bootstrap-datepicker.js",
                "~/Assets/js/plugins/validator/validator.js",
                "~/Assets/js/plugins/chartjs/Chart.js",
               "~/Assets/js/app.js",
                "~/Assets/js/demo.js",
                "~/Assets/js/respond.js"
            ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Assets/css/bootstrap.css",
                "~/Assets/css/AdminLTE.min.css",
                "~/Assets/css/skin-bestco.min.css",
                "~/Assets/css/site.css",
                "~/Assets/js/plugins/datepicker/datepicker3.css"
            ));
        }
    }
}
