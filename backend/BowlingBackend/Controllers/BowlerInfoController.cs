using BowlingBackend.Models;
using Microsoft.AspNetCore.Mvc;

namespace BowlingBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerInfoController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;

        public BowlerInfoController(IBowlerRepository bowlerRepository)
        {
            _bowlerRepository = bowlerRepository;
        }

        //[HttpGet]
        //public IEnumerable<BowlerData> GetBowlers()
        //{
        //    var bowlers = _bowlerRepository.Bowlers; 

        //    return bowlers;
        //}


        //[HttpGet]
        //public IEnumerable<TeamData> GetTeams()
        //{
        //    var teams = _bowlerRepository.Teams;

        //    return teams;
        //}

        [HttpGet("marlins-sharks")]
        public IActionResult GetBowlersForMarlinsAndSharks()
        {
            var bowlers = _bowlerRepository.GetBowlersForMarlinsAndSharks();
            return Ok(bowlers);
        }
    }
}
