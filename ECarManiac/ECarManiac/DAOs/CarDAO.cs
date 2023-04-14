using System.Data;
using System.Data.SqlClient;
using System.Runtime.CompilerServices;
using ECarManiac.Interfaces;
using ECarManiac.Models;

namespace ECarManiac.DAOs
{
    public class CarDAO : ICarDAO
    {
        private readonly string _connectionString;

        public CarDAO(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Car car)
        {
            const string sqlCmd =
                @"INSERT INTO cars (Brand, Model, SubType, Year, Country, BodyType, BatteryType, BatteryCapacity, RealRange, ChargingSpeed, Performance, Torque,
                                    Acceleration, MaxSpeed, Trunk, Frunk)
                                    VALUES (@Brand, @Model, @SubType, @Year, @Country, @BodyType, @BatteryType, @BatteryCapacity, @RealRange, @ChargingSpeed, @Performance, @Torque,
                                    @Acceleration, @MaxSpeed, @Trunk, @Frunk)
                                    SELECT SCOPE_IDENTITY();";
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    var cmd = new SqlCommand(sqlCmd, connection);
                    if (connection.State == ConnectionState.Closed)
                    {
                        connection.Open();
                    }

                    cmd.Parameters.AddWithValue("@Brand", car.Brand);
                    cmd.Parameters.AddWithValue("@Model", car.Model);
                    cmd.Parameters.AddWithValue("@SubType", car.SubType);
                    cmd.Parameters.AddWithValue("@Year", car.Year);
                    cmd.Parameters.AddWithValue("@Country", car.Country);
                    cmd.Parameters.AddWithValue("@BodyType", car.BodyType);
                    cmd.Parameters.AddWithValue("@BatteryType", car.BatteryType);
                    cmd.Parameters.AddWithValue("@BatteryCapacity", car.BatteryCapacity);
                    cmd.Parameters.AddWithValue("@RealRange", car.RealRange);
                    cmd.Parameters.AddWithValue("@ChargingSpeed", car.ChargingSpeed);
                    cmd.Parameters.AddWithValue("@Performance", car.Performance);
                    cmd.Parameters.AddWithValue("@Torque", car.Torque);
                    cmd.Parameters.AddWithValue("@Acceleration", car.Acceleration);
                    cmd.Parameters.AddWithValue("@MaxSpeed", car.MaxSpeed);
                    cmd.Parameters.AddWithValue("@Trunk", car.Trunk);
                    cmd.Parameters.AddWithValue("@Frunk", car.Frunk);
                    cmd.ExecuteNonQuery();
                    connection.Close();
                }
            }
            catch (SqlException e)
            {
                throw new RuntimeWrappedException(e);
            }

        }

        public void Update(Car car)
        {
            const string sqlCmd =
                @"UPDATE cars
                  SET Brand = @Brand, Model = @Model, SubType = @SubType,
                      Year = @Year, Country = @Country, BodyType = @BodyType,
                      BatteryType = @BatteryType, BatteryCapacity = @BatteryCapacity, RealRange = @RealRange, ChargingSpeed = @ChargingSpeed,
                      Performance = @Performance, Torque = @Torque, Acceleration = @Acceleration, MaxSpeed = @MaxSpeed, 
                      Trunk = @Trunk, Frunk = @Frunk
                   WHERE Id = @Id";
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    var cmd = new SqlCommand(sqlCmd, connection);
                    if (connection.State == ConnectionState.Closed)
                    {
                        connection.Open();
                    }

                    cmd.Parameters.AddWithValue("@Brand", car.Brand);
                    cmd.Parameters.AddWithValue("@Model", car.Model);
                    cmd.Parameters.AddWithValue("@SubType", car.SubType);
                    cmd.Parameters.AddWithValue("@Year", car.Year);
                    cmd.Parameters.AddWithValue("@Country", car.Country);
                    cmd.Parameters.AddWithValue("@BodyType", car.BodyType);
                    cmd.Parameters.AddWithValue("@BatteryType", car.BatteryType);
                    cmd.Parameters.AddWithValue("@BatteryCapacity", car.BatteryCapacity);
                    cmd.Parameters.AddWithValue("@RealRange", car.RealRange);
                    cmd.Parameters.AddWithValue("@ChargingSpeed", car.ChargingSpeed);
                    cmd.Parameters.AddWithValue("@Performance", car.Performance);
                    cmd.Parameters.AddWithValue("@Torque", car.Torque);
                    cmd.Parameters.AddWithValue("@Acceleration", car.Acceleration);
                    cmd.Parameters.AddWithValue("@MaxSpeed", car.MaxSpeed);
                    cmd.Parameters.AddWithValue("@Trunk", car.Trunk);
                    cmd.Parameters.AddWithValue("@Frunk", car.Frunk);
                    cmd.Parameters.AddWithValue("@Id", car.Id);
                    cmd.ExecuteNonQuery();
                    connection.Close();
                }
            }
            catch (SqlException e)
            {
                throw new RuntimeWrappedException(e);
            }
        }

        public Car Get(int id)
        {
            const string sqlCmd =
                @"SELECT * FROM cars WHERE Id = @Id";
            try
            {
                string Brand;
                string Model;
                string SubType;
                int Year;
                string Country;
                string BodyType;
                string BatteryType;
                int BatteryCapacity;
                int RealRange;
                int ChargingSpeed;
                int Performance;
                int Torque;
                decimal Acceleration;
                int MaxSpeed;
                int Trunk;
                string Frunk;

                using (var connection = new SqlConnection(_connectionString))
                {
                    var cmd = new SqlCommand(sqlCmd, connection);
                    if (connection.State == ConnectionState.Closed)
                    {
                        connection.Open();
                    }

                    cmd.Parameters.AddWithValue("@Id", id);
                    var reader = cmd.ExecuteReader();
                    reader.Read();

                    Brand = (string)reader["Brand"];
                    Model = (string)reader["Model"];
                    SubType = (string)reader["SubType"];
                    Year = (int)reader["Year"];
                    Country = (string)reader["Country"];
                    BodyType = (string)reader["BodyType"];
                    BatteryType = (string)reader["BatteryType"];
                    BatteryCapacity = (int)reader["BatteryCapacity"];
                    RealRange = (int)reader["RealRange"];
                    ChargingSpeed = (int)reader["ChargingSpeed"];
                    Performance = (int)reader["Performance"];
                    Torque = (int)reader["Torque"];
                    Acceleration = (decimal)reader["Acceleration"];
                    MaxSpeed = (int)reader["MaxSpeed"];
                    Trunk = (int)reader["Trunk"];
                    Frunk = reader["Frunk"] as string;

                    connection.Close();
                }

                var car = new Car(Brand, Model, SubType,
                    Year, Country, BodyType,
                    BatteryType, BatteryCapacity, RealRange, ChargingSpeed,
                    Performance, Torque, Acceleration, MaxSpeed,
                    Trunk, Frunk);
                return car;
            }
            catch (SqlException e)
            {
                throw new RuntimeWrappedException(e);
            }
        }

        public List<Car> GetAll()
        {
            const string sqlCmd =
                @"SELECT * FROM cars";
            try
            {
                var results = new List<Car>();

                using (var connection = new SqlConnection(_connectionString))
                {
                    var cmd = new SqlCommand(sqlCmd, connection);
                    if (connection.State == ConnectionState.Closed)
                    {
                        connection.Open();
                    }
                    var reader = cmd.ExecuteReader();

                    if (!reader.HasRows)
                    {
                        return results;
                    }

                    while (reader.Read())
                    {
                        var Brand = (string)reader["Brand"];
                        var Model = (string)reader["Model"];
                        var SubType = reader["SubType"] as string;
                        var Year = (int)reader["Year"];
                        var Country = (string)reader["Country"];
                        var BodyType = (string)reader["BodyType"];
                        var BatteryType = (string)reader["BatteryType"];
                        var BatteryCapacity = (int)reader["BatteryCapacity"];
                        var RealRange = (int)reader["RealRange"];
                        var ChargingSpeed = (int)reader["ChargingSpeed"];
                        var Performance = (int)reader["Performance"];
                        var Torque = (int)reader["Torque"];
                        var Acceleration = (decimal)reader["Acceleration"];
                        var MaxSpeed = (int)reader["MaxSpeed"];
                        var Trunk = (int)reader["Trunk"];
                        var Frunk = reader["Frunk"] as string;

                        var car = new Car(Brand, Model, SubType,
                            Year, Country, BodyType,
                            BatteryType, BatteryCapacity, RealRange, ChargingSpeed,
                            Performance, Torque, Acceleration, MaxSpeed,
                            Trunk, Frunk);

                        results.Add(car);
                    }

                    connection.Close();
                }

                return results;
            }
            catch (SqlException e)
            {
                throw new RuntimeWrappedException(e);
            }
        }
    }

}
