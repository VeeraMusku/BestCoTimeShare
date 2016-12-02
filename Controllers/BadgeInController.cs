using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Bestco.Controllers
{
    public class BadgeInController : Controller
    {
        // GET: BadgeIn
        public ActionResult Index()
        {
            return View("UserBadgeIn");
        }
    }
}