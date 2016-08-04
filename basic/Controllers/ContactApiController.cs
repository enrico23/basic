using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace basic.Controllers
{
    public class ContactApiController : ApiController
    {
        [System.Web.Http.HttpGet]
        public IEnumerable Test()
        {
            return new[] { "Home", "About" };
        }

    }
}
