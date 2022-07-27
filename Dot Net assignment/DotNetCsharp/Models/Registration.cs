using System.ComponentModel.DataAnnotations;

namespace DotNetCsharp.Models
{
    public class Registration
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
