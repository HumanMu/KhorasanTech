

namespace API.Entities.DTOs
{
    public class AddCommentActivityDto
    {
        public int Id { get; set; }
        public Guid ActivityId { get; set; }
        public DateTime Date { get; set; }
        public string Comment { get; set; }
        public int Likes { get; set; }
        public int DisLikes { get; set; }
    }
}