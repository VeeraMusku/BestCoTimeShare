using System.Web.Mvc;
using Bestco.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Bestco.Controllers
{
    public class HomeController : Controller
    {
        private object users;

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Bestco Information Technology";

            return View();
        }

        public ActionResult Documentation()
        {
            ViewBag.Message = "Documentation";

            return View();
        }
       
        public ActionResult Bagging()
        {
            ViewBag.Message = "Cook Lot Management";

            // string connectionString = @"Data Source=VM008D-DEV-SRV0;Initial Catalog=bestco_dev_20160329111125;Persist Security Info=True;User ID=sa;Password=XRSyXkX?7dk<H2Wu";
            // string connectionString = @"Data Source=(LocalDb)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\aspnet-Bestco-20160329111125.mdf;Initial Catalog=aspnet-Bestco-20160329111125;Integrated Security=True";
            string connectionString = @"Data Source=(LocalDb)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\bestco_dev_20160329111125.mdf;Initial Catalog=bestco_dev_20160329111125;Integrated Security=True";

            List<BaggingModel> data = new List<BaggingModel>();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (SqlCommand command = new SqlCommand("select * from dbo.Areas", conn))
                {
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        BaggingModel Area = new BaggingModel();
                        Area.Id = reader.GetInt32(0);
                        Area.Name = reader["Name"].ToString();
                        Area.Description = reader["Description"].ToString();
                        data.Add(Area);
                    }
                }
                //conn.Close();
            }

            ViewBag.Areas = data.AsEnumerable();

            List<BaggingModel> result = new List<BaggingModel>();

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                using (SqlCommand command = new SqlCommand("select * from dbo.Lines", conn))
                {
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        BaggingModel Line = new BaggingModel();
                        Line.Id = reader.GetInt32(0);
                        Line.Name = reader["Name"].ToString();
                        result.Add(Line);
                    }
                }
                conn.Close();
            }
            ViewBag.Lines = result.AsEnumerable();

            return View(data.AsEnumerable());
        }

        public ActionResult Entries()
        {
            return View();
        }
    }
}