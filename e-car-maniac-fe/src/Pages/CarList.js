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
                    <div key={car.id}>
                        <p>
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-" + car.id} aria-expanded="false" aria-controls={"#collapse-" + car.id } >
                                {car.brand} {car.model} {car.subType === "null" ? "" : car.subType}
                            </button>
                        </p>
                        <div class="collapse" id={"collapse-" + car.id}>
                            <div class="card card-body">
                                Vintage: {car.year}
                            </div>
                            <div class="card card-body">
                                Manufactured in: {car.country}
                            </div>
                            <div class="card card-body">
                                Body Type: {car.bodyType}
                            </div>
                            <div class="card card-body">
                                Battery Type: {car.batteryType}
                            </div>
                            <div class="card card-body">
                                Battery Capacity: {car.batteryCapacity} kWh
                            </div>
                            <div class="card card-body">
                                Real Range: {car.realRange} km
                            </div>
                            <div class="card card-body">
                                Max. Charging Speed: {car.chargingSpeed} kW
                            </div>
                            <div class="card card-body">
                                Power: {car.performance} hp
                            </div>
                            <div class="card card-body">
                                Torque: {car.torque} Nm
                            </div>
                            <div class="card card-body">
                                0 - 100 km/h: {car.acceleration} s
                            </div>
                            <div class="card card-body">
                                Max. Speed: {car.maxSpeed} km/h
                            </div>
                            <div class="card card-body">
                                Trunk space: {car.trunk} l
                            </div>
                            <div class="card card-body">
                                Frunk space: {car.frunk === "null"? 0 : car.Frunk} l
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