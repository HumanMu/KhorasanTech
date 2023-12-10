

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

    }
}