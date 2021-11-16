using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SM.Login.Entities
{
    public class DB : DbContext
    {
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source = SOCDOTNET16\SQLEXPRESS; Initial Catalog = stockmarket; Integrated Security = True");
        }
    }
}
