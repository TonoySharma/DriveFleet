"use client"; 

const carCategory =
 ["All Car Category", 
  "Tesla Model 3", 
  "BMW X5", "Audi A6",
   "Mercedes C-Class", 
   "Honda Civic",
    "Chevrolet Camaro",
    "Nissan GT-R", 
    "Kia Sportage"];

export default function CarDrouDownFilter({carModel, setCarModel}) {

//   const [carModel, setCarModel] = useState("")


  const handleFilter =(e) =>{
    const value = e.target.value

    const expectedCars = cars.filter((car) => car.carModel === value);
    carCategory (expectedCars)

    console.log(value, 'value');
    

    setCarModel (value);
  }


  return (
    <div className="mt-5">
    
      
      {/* Drop-down Component*/}
      <select 
        value={carModel} 
        onChange={handleFilter}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px"
        }}>
        {carCategory.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}