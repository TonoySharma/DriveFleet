"use server"

export const addCar = async (formdata) => {
    const newCar = Object.fromEntries(formdata.entries());
    // console.log(addCar, 'addCar');

    const modifiedData = {
        carName: newCar.carName,
        dailyPrice: newCar.dailyPrice,
        carType: newCar.carType,
        imageUrl: newCar.imageUrl,
        seatCapacity: newCar.seatCapacity,
        pickupLocation: newCar.pickupLocation,
        description: newCar.description,
        isAvailable: newCar.isAvailable,
        userEmail: newCar.userEmail,
    }
    console.log(modifiedData, 'modifiedData');

    const res = await fetch("https://drive-fleet-server-self.vercel.app/my-added-cars", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },

        body: JSON.stringify(modifiedData),
    });
    const data = await res.json();

    // console.log(data,  'car data');
    
    return data;
}