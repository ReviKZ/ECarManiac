using ECarManiac.Models;

namespace ECarManiac.Interfaces
{
    public interface ICarDAO
    {
        /// <summary>
        /// Adds a new car to the database
        /// </summary>
        /// <param name="car">A dictionary with all parameters but the ID</param>
        public void Add(Dictionary<string, string> car);

        /// <summary>
        /// Updates an existing car in the database
        /// </summary>
        /// <param name="car">An object from the database, with an existing ID</param>
        public void Update(Car car);

        /// <summary>
        /// Get a car from the database by ID
        /// </summary>
        /// <param name="id">ID to get</param>
        /// <returns>An object with the given ID or null if not found</returns>
        public Car Get(int id);

        /// <summary>
        /// Get all the 
        /// </summary>
        /// <returns>All the cars int the database</returns>
        public List<Car> GetAll();

        /// <summary>
        /// Removes an existing car from the database
        /// </summary>
        /// <param name="id">The id of the car which needs to be removed</param>
        /// <returns></returns>
        public void Remove(int id);
    }
}
