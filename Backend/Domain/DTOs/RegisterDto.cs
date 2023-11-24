

using System.ComponentModel.DataAnnotations;

namespace Backend.Domain.DTOs
{
    public class RegisterDto
    {
        [Key]
        [Required]
        public string Email { get; set; }
        [Required]
        [StringLength(12, MinimumLength = 8)]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

    }
}