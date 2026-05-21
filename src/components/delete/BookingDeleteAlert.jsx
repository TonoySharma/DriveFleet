"use client";

import { AlertDialog, Button,} from "@heroui/react";
import { RiDeleteBinLine } from "react-icons/ri";

export function BookingDeleteAlet({carsId}) {
// console.log(carsId, 'carsId');

const handleDelete = async () =>{
   const res = await fetch (`http://localhost:5000/bookNow/${carsId}`,{
    method:"DELETE",
    headers:{
      "content-type":"application/json"

     }
   })

   const data = await res.json();

  //  window.location.reload();


   console.log(data, 'delete data successfully');
   
   
}


  return (
    <AlertDialog>
      <Button className="bg-red-50 text-red-600 hover:bg-red-600
         hover:text-white text-xs font-bold px-5 py-2.5 rounded transition-all duration-200 cursor-pointer">
        <p className="flex gap-1 items-center"><RiDeleteBinLine />Delete</p>
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete booking car permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete your booking car.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}