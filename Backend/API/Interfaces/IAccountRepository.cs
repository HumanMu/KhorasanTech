

using API.Entities;
using API.Entities.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IAccountRepository
    {
        public Task<ActionResult<User>> Login(LoginDto loginDto);
    }
}