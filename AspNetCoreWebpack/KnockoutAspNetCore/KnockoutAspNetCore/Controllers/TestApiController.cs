using Microsoft.AspNetCore.Mvc;

namespace KnockoutAspNetCore.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class TestApiController : ControllerBase
    {
        [HttpGet]
        public string GetMessage()
        {
            return "Hello from backend!";
        }
    }
}