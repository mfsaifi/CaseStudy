using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SM.Login.Models
{
    public class LoginDetails
    {
        private String userId;
        private String pass;

        public string UserId { get => userId; set => userId = value; }
        public string Pass { get => pass; set => pass = value; }
    }
}
