using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Bestco.Startup))]
namespace Bestco
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
