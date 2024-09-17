
namespace API.Entities
{
    public class ActivityComment
    {
        public int Id { get; set; }
        //public Guid UserId { get; set; }
        public Guid ActivityId { get; set; }
        public DateTime Date { get; set; }
        public string Comment { get; set; }
        public int Likes { get; set; }
        public int DisLikes { get; set; }
        public Activity Activity { get; set; }
    }
}