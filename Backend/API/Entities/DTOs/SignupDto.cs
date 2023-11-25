
namespace API.Entities.DTOs
{
    public class SignupDto
    {
        public required string UserName { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
    }
}