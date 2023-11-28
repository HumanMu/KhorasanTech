

using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities() {
            var activities = await _context.Activities.ToListAsync();
            if(activities == null) return BadRequest("No activities found");


            return activities;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            var activity = await _context.Activities.FindAsync(id);
            if(activity == null) return BadRequest("Activity not found");


            return activity;
        }

    }
}