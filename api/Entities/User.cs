

using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public required string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Email { get; set; }
        public string ImageUrl { get; set; }


    }
}