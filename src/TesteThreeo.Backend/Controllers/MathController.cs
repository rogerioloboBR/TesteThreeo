using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TesteThreeo.Backend.Models;

namespace TesteThreeo.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MathController : ControllerBase
    {
        [Authorize]
        [HttpPost("calculate")]
        public IActionResult Calculate([FromBody] MathOperation operation)
        {
            try
            {
                var result = operation.Operation switch
                {
                    "add" => operation.Value1 + operation.Value2,
                    "subtract" => operation.Value1 - operation.Value2,
                    "multiply" => operation.Value1 * operation.Value2,
                    "divide" => operation.Value2 != 0 ? operation.Value1 / operation.Value2 : throw new DivideByZeroException(),
                    _ => throw new InvalidOperationException("Operation not supported")
                };

                return Ok(new { Result = result });
            }
            catch (DivideByZeroException)
            {
                return BadRequest("Division by zero is not allowed.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}