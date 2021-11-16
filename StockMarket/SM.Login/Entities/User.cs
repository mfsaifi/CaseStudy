using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SM.Login.Entities
{
    [Table("User")]
    public class User
    {
        [Key]
        [StringLength(30)]
        public String UserId { get; set; }
        [Required]
        [StringLength(30)]
        public string Name { get; set; }
        [Required]
        [StringLength(30)]
        public string Type { get; set; }

        [Required]
        [StringLength(30)]
        public string Password { get; set; }

    }
}
