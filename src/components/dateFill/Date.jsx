"use client"
import { DateField, Description, FieldError, Label } from '@heroui/react';
import React, { useState } from 'react';
import { authClient } from '../../lib/auth-client';

const DepartureDatePicker = ({car}) => {
  const {data: section} = authClient.useSession()
  const user = section?.user;

  // console.log(user);
  
  const [departuredate, setDeparturedate] = useState(null)

  // console.log(new Date (departuredate));
 const data = new Date (departuredate)
 const date = data.toDateString()
 const time = data.toLocaleString()

  // console.log(time);


    return (
        <div className='w-fit '>
               <DateField onChange={setDeparturedate}>
                <p className='font-bold '>Departure Date</p>
                
                  <DateField.Group className=' border border-dotted border-gray-400 rounded'>
                    <DateField.Input >
                      {(segment) => <DateField.Segment segment={segment}/>}
                    </DateField.Input>
                  </DateField.Group>
                  <Description />
                  <FieldError />
                </DateField>
        </div>
    );
};

export default DepartureDatePicker;