import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fetch from '../Other/Fetch';


const AddCar = () => {
    const navigate = useNavigate();

    const [form, updateForm] = useState({});

    const updateField = (newValue, field) => {
        updateForm({ ...form, [field]: newValue })
    }

    async function addCarToDb(event) {
        event.preventDefault();
        var formData = {
            Brand: form["Brand"],
            Model: form["Model"],
            SubType: form["SubType"],
            Year: form["Year"],
            Country: form["Country"],
            BodyType: form["BodyType"],
            BatteryType: form["BatteryType"],
            BatteryCapacity: form["BatteryCapacity"],
            RealRange: form["RealRange"],
            ChargingSpeed: form["ChargingSpeed"],
            Performance: form["Performance"],
            Torque: form["Torque"],
            Acceleration: form["Acceleration"],
            MaxSpeed: form["MaxSpeed"],
            Trunk: form["Trunk"],
            Frunk: form["Frunk"]? form["Frunk"] : null
        };

        Fetch("post", "", formData);
        navigate("/");

    };

    return (
        <>
            <h1>Add Car Page</h1>

            <form>
                <div>
                    <p>Brand: </p>
                    <input onChange={(e) => updateField(e.target.value, "Brand")} id="Brand" type="text" />
                </div>
                <div>
                    <p>Model: </p>
                    <input onChange={(e) => updateField(e.target.value, "Model")} id="Model" type="text" />
                </div>
                <div>
                    <p>SubType: </p>
                    <input onChange={(e) => updateField(e.target.value, "SubType")} id="SubType" type="text" />
                </div>
                <div>
                    <p>Vintage: </p>
                    <input onChange={(e) => updateField(e.target.value, "Year")} id="Year" type="text" />
                </div>
                <div>
                    <p>Country of Origin: </p>
                    <input onChange={(e) => updateField(e.target.value, "Country")} id="Country" type="text" />
                </div>
                <div>
                    <p>Body Type: </p>
                    <input onChange={(e) => updateField(e.target.value, "BodyType")} id="BodyType" type="text" />
                </div>
                <div>
                    <p>Battery Type: </p>
                    <input onChange={(e) => updateField(e.target.value, "BatteryType")} id="BatteryType" type="text" />
                </div>
                <div>
                    <p>Battery Capacity: </p>
                    <input onChange={(e) => updateField(e.target.value, "BatteryCapacity")} id="BatteryCapacity" type="text" /><p>kWh</p>
                </div>
                <div>
                    <p>Real Range: </p>
                    <input onChange={(e) => updateField(e.target.value, "RealRange")} id="RealRange" type="text" /><p>km</p>
                </div>
                <div>
                    <p>Charging Speed: </p>
                    <input onChange={(e) => updateField(e.target.value, "ChargingSpeed")} id="ChargingSpeed" type="text" /><p>min</p>
                </div>
                <div>
                    <p>Power: </p>
                    <input onChange={(e) => updateField(e.target.value, "Performance")} id="Performance" type="text" /><p>hp</p>
                </div>
                <div>
                    <p>Torque: </p>
                    <input onChange={(e) => updateField(e.target.value, "Torque")} id="Torque" type="text" /><p>Nm</p>
                </div>
                <div>
                    <p>Acceleration (0-100 km/h): </p>
                    <input onChange={(e) => updateField(e.target.value, "Acceleration")} id="Acceleration" type="text" /><p>s</p>
                </div>
                <div>
                    <p>Maximum Speed: </p>
                    <input onChange={(e) => updateField(e.target.value, "MaxSpeed")} id="MaxSpeed" type="text" /><p>km/h</p>
                </div>
                <div>
                    <p>Trunk Space: </p>
                    <input onChange={(e) => updateField(e.target.value, "Trunk")} id="Trunk" type="text" /><p>l</p>
                </div>
                <div>
                    <p>Frunk Space: </p>
                    <input onChange={(e) => updateField(e.target.value, "Frunk")} id="Frunk" type="text" /><p>l</p>
                </div>

                <button type="submit" class="btn btn-success"
                    onClick={addCarToDb}>Add Car</button>

            </form>

        </>    
    );
}

export default AddCar;