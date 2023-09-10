import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Fetch from '../Other/Fetch';

const Car = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [car, setCar] = useState(false);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await Fetch("get", params.id, "");
            setCar(data);
            setLoading(false);
        }
        dataFetch();
    }, []);

    const deleteCar = useCallback(() => {
        Fetch("delete", params.id, "");
        navigate("/");
    }, []);

    return (
        <>
            <h1>Car Page</h1>
            {loading ?
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                : car ? (
                    <div>
                        <h2>{car.brand} {car.model} {car.subType === "null" ? "" : car.subType}</h2>
                        <ul class="list-group">
                            <li class="list-group-item">Vintage: {car.year}</li>
                            <li class="list-group-item">Manufactured in: {car.country}</li>
                            <li class="list-group-item">Body Type: {car.bodyType}</li>
                            <li class="list-group-item">Battery Type: {car.batteryType}</li>
                            <li class="list-group-item">Battery Capacity: {car.batteryCapacity} kWh</li>
                            <li class="list-group-item">Real Range: {car.realRange} km</li>
                            <li class="list-group-item">Max. Charging Speed: {car.chargingSpeed} kW</li>
                            <li class="list-group-item">Power: {car.performance} hp</li>
                            <li class="list-group-item">Torque: {car.torque} Nm</li>
                            <li class="list-group-item">0 - 100 km/h: {car.acceleration} s</li>
                            <li class="list-group-item">Max. Speed: {car.maxSpeed} km/h</li>
                            <li class="list-group-item">Trunk space: {car.trunk} l</li>
                            <li class="list-group-item">Frunk space: {car.frunk === "null" ? 0 : car.Frunk} l</li>
                        </ul>
                        <button type="button" class="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
                        <button type="button" class="btn btn-danger" onClick={deleteCar}>Delete</button>
                    </div>
                ) : (
                    <div>
                        <h2>
                            There isn't a car with this id
                        </h2>
                    </div>
                )}
        </>    
    );
}

export default Car;