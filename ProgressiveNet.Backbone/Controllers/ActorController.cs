using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProgressiveNet.Backbone.Controllers
{
    public class ActorController : Controller
    {
        //
        // GET: /Actor/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult List()
        {
            var data = new string[]
                              {
                                  "Sam Worthington", "Mandy Gonzalez", "William Sadler", "Barbara Marineau", "J. Smith-Cameron", "Anthony Mackie", "Patrick Collins", "Jamie Bell", "Genesis Rodriguez", "Afton Williamson", "Robert Clohessy", "Joe Lisi", "Candice McKoy", "Edward Burns", "Johnny Solo"
                              };
            return
                Json(
                    data, JsonRequestBehavior.AllowGet);
        }
    }
}
