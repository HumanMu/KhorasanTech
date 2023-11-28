
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Entities;
using API.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(SignupDto signupDto)
        {
            if(await UserExest(signupDto.UserName)) return BadRequest("Username is already taken");

            using var hmac = new HMACSHA512();
            var user = new User
            {
                UserName = signupDto.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(signupDto.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(LoginDto loginDto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(
                x => x.UserName == loginDto.UserName
            );
            if(user == null) return BadRequest("Username not found");

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password)); // For at sammenligne input password gemte password
            for(int i = 0; i <computedHash.Length; i++) {
                if(computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
            }

            return user;
        }


        public async Task<bool> UserExest(string username)
        {
            return await  _context.Users.AnyAsync(x => x.UserName == username.ToLower());

        }

    }


}