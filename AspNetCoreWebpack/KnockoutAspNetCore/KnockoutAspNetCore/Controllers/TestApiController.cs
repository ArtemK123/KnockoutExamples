using System;
using System.Text.Json;
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

        [HttpPost]
        public ActionResult SendForm(FormModel formModel)
        {
            Console.WriteLine($"Received form: {JsonSerializer.Serialize(formModel)}");
            return Ok();
        }
    }
}