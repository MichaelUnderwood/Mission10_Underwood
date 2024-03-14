using Microsoft.AspNetCore.Mvc;
using BowlingBackend.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace BowlingBackend.Models
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlerContext _bowlerContext;

        public EFBowlerRepository(BowlerContext temp)
        {
            _bowlerContext = temp;
        }
        public IEnumerable<Bowler> GetBowlersForMarlinsAndSharks()
        {
            return _bowlerContext.Bowlers
                .Include(b => b.Team) // Include the Team navigation property
                .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .ToList(); // Execute query and return as list
        }


    }
}
