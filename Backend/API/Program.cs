
using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container - Rækkefølgen IKKE vigtigt

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(options => {
    options.UseSqlite(builder.Configuration.GetConnectionString("KhorasanTechDatabase"));
});

builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline - Rækkefølgen ER vigtigt
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173") );
app.UseAuthorization();

app.MapControllers();

app.Run();
