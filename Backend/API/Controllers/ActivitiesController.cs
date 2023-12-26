

using API.Data;
using API.Entities;
using API.Entities.DTOs;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ActivitiesController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<ActivityDto>>> GetActivities()
        {
            var activities = await _context.Activities.ToListAsync();
            if (activities == null) return BadRequest("No activities found");

            var activityDtos = _mapper.Map<List<ActivityDto>>(activities);
            return activityDtos;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ActivityDto>> GetActivity(Guid id)
        {
            var activity = await _context.Activities.FindAsync(id);
            if (activity == null) return BadRequest("Activity not found");

            var activityDto = _mapper.Map<ActivityDto>(activity);
            return activityDto;
        }

        [HttpPost]
        public async Task<ActionResult<ActivityDto>> AddActivity(Activity activity)
        {
            var result = await _context.Activities.AddAsync(activity);

            if (result == null)
            {
                return null;
            }

            var activityDto = _mapper.Map<ActivityDto>(result);
            return activityDto;

        }

        [HttpPost("{id}")]
        public async Task<ActionResult> UpdateActivity(ActivityDto activityDto)
        {
            var activity = await _context.Activities.FindAsync(activityDto.Id);

            if (activity == null) return BadRequest("Activity not found");

            _mapper.Map(activityDto, activity);

            // Gem ændringer i databasen
            await _context.SaveChangesAsync();

            return Ok(); // Eller en anden passende responskode
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(Guid id)
        {
            var activity = await _context.Activities.FindAsync(id);

            if (activity == null) return BadRequest("Activity not found");

            // Deleting from database
            _context.Activities.Remove(activity);
            await _context.SaveChangesAsync();

            return Ok("Your Activity removed");
        }

    }
}