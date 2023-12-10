
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Entities;
using API.Entities.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public AccountController(DataContext context, ITokenService tokenService, IMapper mapper)
        {
            _context = context;
            _tokenService = tokenService;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<ActionResult<string>> Register(SignupDto signupDto)
        {
            if (await UserExest(signupDto.UserName)) return BadRequest("Username is taken");

            using var hmac = new HMACSHA512();
            var user = new User
            {
                UserName = signupDto.UserName.ToLower(),
                FirstName = signupDto.Firstname,
                LastName = signupDto.Lastname,
                Email = signupDto.Email,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(signupDto.Password)),
                PasswordSalt = hmac.Key
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return "Success";

            /*return new UserDto
            {
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user),
            };*/
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            if (await UserExest(loginDto.UserName)) return BadRequest("Username is taken");

            var user = await _context.Users.SingleOrDefaultAsync(
                x => x.UserName == loginDto.UserName
            );
            if (user == null) return BadRequest("Username not found");

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password)); // For at sammenligne input password gemte password
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
            }

            var userDto = new UserDto
            {
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user),
            };

            return _mapper.Map<UserDto>(userDto);
        }

        public async Task<bool> UserExest(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());

        }
    }
}