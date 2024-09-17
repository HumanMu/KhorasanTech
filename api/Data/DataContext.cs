
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityComment> ActivityComments { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Activity>()
                .HasMany(a => a.Comments)
                .WithOne(ac => ac.Activity)
                .HasForeignKey(ac => ac.ActivityId)
                .OnDelete(DeleteBehavior.Cascade); // Cascade delete

            base.OnModelCreating(modelBuilder);
        }
    }
}