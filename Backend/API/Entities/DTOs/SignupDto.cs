
using System.ComponentModel.DataAnnotations;

namespace API.Entities.DTOs
{
    public class SignupDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [MinLength(6), MaxLength(30)]
        public string Password { get; set; }
    }
}