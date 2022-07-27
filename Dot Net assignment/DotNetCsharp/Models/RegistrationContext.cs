using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace DotNetCsharp.Models
{
    public class RegistrationContext: DbContext
    {
        public RegistrationContext(DbContextOptions<RegistrationContext> options): base(options)
        {

        }
        public DbSet<Registration> Registration { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Registration>().HasData(
                new Registration() { Id = 1, Username = "John", Email="john21@gmail.com", Password="john@123" },
                new Registration() { Id = 2, Username = "Chris", Email = "christk@gmail.com", Password = "chris@220" },
                new Registration() { Id = 3, Username = "Mukesh", Email = "mukesh@gmail.com", Password = "muk@123" });
        }
    }
}
