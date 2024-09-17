
using API.Data;
using API.Entities;
using API.Entities.DTOs;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extentions
{
    public static class ApplicationServiceExtentions // Using "static" so there is no need for instantiating, but to call when there are need for it methods
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("KhorasanTechDatabase"));
            });
            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();
            services.AddSignalR();

            // Configure AutoMapper using an expression
            services.AddAutoMapper(config =>
            {
                config.CreateMap<Activity, ActivityDto>();
                config.CreateMap<ActivityDto, Activity>();
                config.CreateMap<UserDto, LoginDto>();
                config.CreateMap<ActivityComment, AddCommentActivityDto>();
            });

            return services;
        }
    }
}