using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SM.Login.Entities;
using SM.Login.Models;
using SM.Login.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SM.Login.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    { 
    private readonly UserRepository repository = new UserRepository();
    [HttpPost]
    [Route("Register")]
    public IActionResult Register(User user)
    {
        try
        {
            repository.Adduser(user);
            return Ok();
        }
        catch (Exception ex)
        {

            return Content(ex.Message);
        }
    }
    [HttpPost]
    [Route("Login")]
    public IActionResult Login(LoginDetails login)
    {
        try
        {
            User user = repository.Validate(login);
            return Ok(user);
        }
        catch (Exception ex)
        {

            return Content(ex.Message);
        }
    }

}

}

