using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly ILogger<AccountController> _logger;
    private readonly DataContext _context;

    public AccountController(ILogger<AccountController> logger, DataContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers(){
        var users = await _context.Users.ToListAsync();
        return users;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(string username)
    {
        var user = await _context.Users.FindAsync(username);
        if(user == null) return Problem(statusCode: 400, title: "User not exist");

        return user;
    }

}
