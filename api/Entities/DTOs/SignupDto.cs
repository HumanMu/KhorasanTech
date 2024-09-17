
using System.ComponentModel.DataAnnotations;

namespace API.Entities.DTOs
{
    public class SignupDto
    {
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        [Required]
        [MinLength(6), MaxLength(30)]
        public string Password { get; set; }

    }
}