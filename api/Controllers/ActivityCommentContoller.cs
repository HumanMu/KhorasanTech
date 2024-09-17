using API.Data;
using API.Entities;
using API.Entities.DTOs;
using API.SignalR;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{
    public class ActivityCommentController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IHubContext<CommentHub> _hubContext;
        public ActivityCommentController(DataContext context, IMapper mapper, IHubContext<CommentHub> hubContext)
        {
            _context = context;
            _mapper = mapper;
            _hubContext = hubContext;
        }

        [HttpGet("{activityId}")]
        public async Task<ActionResult<List<AddCommentActivityDto>>> GetActivityComments(Guid activityId)
        {
            var activity = await _context.Activities.FindAsync(activityId);

            if (activity == null) return BadRequest("Activity not found");

            var comments = await _context.ActivityComments.Where(ac => ac.ActivityId == activity.Id).ToListAsync();
            if (comments == null) return BadRequest("No comments found for the activity");

            var commentDtos = _mapper.Map<List<AddCommentActivityDto>>(comments);
            return commentDtos;
        }


        [HttpPost]
        public async Task<ActionResult<AddCommentActivityDto>> AddCommentToActivity(ActivityComment newComment)
        {
            try
            {
                var activity = await _context.Activities.FindAsync(newComment.ActivityId);
                if (activity == null) return BadRequest("Activity not found");

                var result = await _context.ActivityComments.AddAsync(newComment);

                if (result.State == EntityState.Added)
                {
                    await _context.SaveChangesAsync();
                    var commentDto = _mapper.Map<AddCommentActivityDto>(newComment);
                    await _hubContext.Clients.All.SendAsync("ReceiveComment", commentDto);
                    return Ok(commentDto); // Return the updated activity or a success response
                }
                else
                {
                    return BadRequest("Failed to add comment to the activity");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}