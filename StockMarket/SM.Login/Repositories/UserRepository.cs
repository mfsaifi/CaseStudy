using SM.Login.Entities;
using SM.Login.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SM.Login.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DB db = new DB();
        public void Adduser(User user)
        {

            db.Users.Add(user);
            db.SaveChanges();

            
        }

        public User Validate(LoginDetails login)
        {

            User user = db.Users.SingleOrDefault(u => u.UserId == login.UserId && u.Password == login.Pass);
            return user;
        }
    }
}
