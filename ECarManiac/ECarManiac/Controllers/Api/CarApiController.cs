using ECarManiac.DAOs;
using ECarManiac.Interfaces;
using ECarManiac.Models;
using Microsoft.AspNetCore.Mvc;

namespace ECarManiac.Controllers.Api
{
    [Route("api/")]
    [ApiController]
    public class CarApiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly string _dbConnectionString;
        private ICarDAO carDAO;

        public CarApiController(IConfiguration configuration)
        {
            _configuration = configuration;
            _dbConnectionString = _configuration.GetValue<string>("ConnectionString");
            carDAO = new CarDAO(_dbConnectionString);
        }

        // GET: api/
        [HttpGet]
        public List<Car> Get()
        {
            return carDAO.GetAll();
        }

        // GET api/5
        [HttpGet("{id}")]
        public Car Get(int id)
        {
            return carDAO.Get(id);
        }

        // POST api/
        [HttpPost]
        public void Post(Car car)
        {
            carDAO.Add(car);
        }

        // PUT api/5
        [HttpPut("{id}")]
        public void Put(Car car)
        {
            carDAO.Update(car);
        }

        // DELETE api/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
