namespace BowlingBackend.Models
{
    public interface IBowlerRepository
    {
        IEnumerable<Bowler> GetBowlersForMarlinsAndSharks();
    }
}
