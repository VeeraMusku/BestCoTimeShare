using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Bestco.Controllers
{
    public class LineController : Controller
    {
        // GET: Line
        public ActionResult Index()
        {
            return View("LineStatus");
        }
    }
}