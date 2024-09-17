
using API.Entities;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class CommentHub : Hub
    {

        public async Task SendComment(ActivityComment comment)
        {
            await Clients.All.SendAsync("ReceiveComment", comment);
        }

        public override async Task OnConnectedAsync()
        {
            var httpContext = Context.GetHttpContext();
            var activityId = httpContext.Request.Query["activityId"];
            await Groups.AddToGroupAsync(Context.ConnectionId, activityId);
            await Clients.Caller.SendAsync("LoadComments", activityId);
        }



    }
}