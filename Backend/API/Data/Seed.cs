


using API.Entities;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new() {
                    Title = "Past Activity 1",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "My Activity from 1 month ago",
                    Category = "Summer",
                    City = "Aarhus",
                    Venue = "Aarhus C"
                },
                new() {
                    Title = "Past Activity 2",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "My Activity from 2 month ago",
                    Category = "Summer",
                    City = "Copenhagen",
                    Venue = "Banegaard"
                },
                new() {
                    Title = "Past Activity 3",
                    Date = DateTime.UtcNow.AddMonths(-3),
                    Description = "My Activity from 3 month ago",
                    Category = "Summer",
                    City = "Kabul",
                    Venue = "Zafran Hotel"
                },
                new() {
                    Title = "Past Activity 4",
                    Date = DateTime.UtcNow.AddMonths(-4),
                    Description = "My sunny day from 4 month ago",
                    Category = "Vinter",
                    City = "Shirdagh",
                    Venue = "Bazar Shirdagh"
                }
            };
            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }

    }
}