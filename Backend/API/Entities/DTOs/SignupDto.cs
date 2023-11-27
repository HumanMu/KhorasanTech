
namespace API.Entities.DTOs
{
    public class SignupDto
    {
        public required string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}