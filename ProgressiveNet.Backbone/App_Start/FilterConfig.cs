using System.Web;
using System.Web.Mvc;

namespace ProgressiveNet.Backbone
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}