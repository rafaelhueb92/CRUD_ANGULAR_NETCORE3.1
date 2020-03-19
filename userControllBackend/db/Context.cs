using Microsoft.EntityFrameworkCore;
using Models;

namespace db
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<User> User { get; set; }
    }
}