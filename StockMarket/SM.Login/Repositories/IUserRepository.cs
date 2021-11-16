using SM.Login.Entities;
using SM.Login.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SM.Login.Repositories
{
    interface IUserRepository
    {
        void Adduser(User user);
        User Validate(LoginDetails login);
    }
}
