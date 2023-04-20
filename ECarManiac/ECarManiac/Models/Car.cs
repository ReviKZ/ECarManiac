using System.Security;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.VisualBasic;

namespace ECarManiac.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string SubType { get; set; }
        public int Year { get; set; }
        public string Country { get; set; }
        public string BodyType { get; set; }
        public string BatteryType { get; set; }
        public int BatteryCapacity { get; set; }
        public int RealRange { get; set; }
        public int ChargingSpeed { get; set; }
        public int Performance { get; set; }
        public int Torque { get; set; }
        public decimal Acceleration { get; set; }
        public int MaxSpeed { get; set; }
        public int Trunk { get; set; }
        public string Frunk { get; set; }

        public Car(int id, string brand, string model, string sub_type, int year, string country, string body_type, string battery_type, int battery_capacity,
            int real_range, int charging_speed, int performance, int torque, decimal acceleration, int max_speed, int trunk, string frunk)
        {
            Id = id;
            Brand = brand;
            Model = model;
            SubType = sub_type;
            Year = year;
            Country = country;
            BodyType = body_type;
            BatteryType = battery_type;
            BatteryCapacity = battery_capacity;
            RealRange = real_range;
            ChargingSpeed = charging_speed;
            Performance = performance;
            Torque = torque;
            Acceleration = acceleration;
            MaxSpeed = max_speed;
            Trunk = trunk;
            Frunk = frunk;
        }

        public override string ToString()
        {
            return new string($"{Brand} {Model} {SubType}");
        }
    }
}
