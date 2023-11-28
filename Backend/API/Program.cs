
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container - Rækkefølgen IKKE vigtigt
builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("KhorasanTechDatabase"));
});

builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline - Rækkefølgen ER vigtigt
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173"));
app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();
    await context.Database.MigrateAsync();
    await Seed.SeedActivity(context);
    //await Seed.SeedUsers(context);

}
catch (Exception e)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(e, "An error while seeding data occured");
}

app.Run();
