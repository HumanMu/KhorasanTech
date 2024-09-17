
namespace API.Entities
{
    public class Activity
    {
        public Guid Id { get; set; }
        //public Guid UserId { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        public string ImageUrl { get; set; }
        public int Likes { get; set; }
        public ICollection<ActivityComment> Comments { get; set; }

    }
}