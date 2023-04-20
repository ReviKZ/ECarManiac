import { useEffect, useState } from 'react';
import Fetch from '../Other/Fetch';

const CarList = () => {
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState(false);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await Fetch("get", "", "");
            setCars(data);
            setLoading(false);
        }
        dataFetch();
    }, []);



    return (
        <>
            <h1>CarList Page</h1>
            {loading ?
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                : cars ? cars.map((car) => (
                    <div>
                        <p>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#" + car.Id} aria-expanded="false" aria-controls="collapseExample">
                                {car.Brand} {car.Model} {car.SubType == "null" ? "" : car.SubType}
                            </button>
                        </p>
                        <div class="collapse" id={car.Id}>
                            <div class="card card-body">
                                Vintage: {car.Year}
                            </div>
                            <div class="card card-body">
                                Manufactured in: {car.Country}
                            </div>
                            <div class="card card-body">
                                Body Type: {car.BodyType}
                            </div>
                            <div class="card card-body">
                                Battery Type: {car.BatterType}
                            </div>
                            <div class="card card-body">
                                Battery Capacity: {car.BatteryCapacity} kWh
                            </div>
                            <div class="card card-body">
                                Real Range: {car.RealRange} km
                            </div>
                            <div class="card card-body">
                                Max. Charging Speed: {car.ChargingSpeed} kW
                            </div>
                            <div class="card card-body">
                                Power: {car.Performance} hp
                            </div>
                            <div class="card card-body">
                                Torque: {car.Year} Nm
                            </div>
                            <div class="card card-body">
                                0 - 100 km/h: {car.Acceleration} s
                            </div>
                            <div class="card card-body">
                                Max. Speed: {car.MaxSpeed} km/h
                            </div>
                            <div class="card card-body">
                                Trunk space: {car.Trunk} l
                            </div>
                            <div class="card card-body">
                                Frunk space: {car.Frunk == "null"? 0 : car.Frunk} l
                            </div>
                        </div>
                    </div>
                
                )) : (
                        <div>
                            <p>Something went wrong while fetching</p>
                        </div>       
                )
            }
           
        </>    
    );
}

export default CarList;