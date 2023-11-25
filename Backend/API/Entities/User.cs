

using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public required string UserName { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public string Email { get; set; }
        public string ImageUrl { get; set; }


    }
}