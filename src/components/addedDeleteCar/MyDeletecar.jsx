"use client";

import { AlertDialog, Button, } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { RiDeleteBinLine } from "react-icons/ri";


export function MyDeleteCar({ carsId }) {
    // console.log(carsId, 'carsId');

    const handleDelete = async (e) => {
         e.preventDefault()
        const res = await fetch(`https://drive-fleet-server-self.vercel.app/bookNow/${carsId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"

            }
        })

        const data = await res.json();

        window.location.reload();

        //  console.log(data, 'delete data successfully');


    }


    return (
        <AlertDialog>
            <Button className="bg-red-50 text-red-600 hover:bg-red-600
                     hover:text-white text-xs font-bold px-5 py-2.5 rounded transition-all duration-500 cursor-pointer">
                <p className="flex gap-1 items-center"><RiDeleteBinLine />Delete</p>
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Your added car permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete your Your added car.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                className="flex items-center justify-center gap-2
                  bg-rose-600 border
                  border-rose-500/20 px-4
                   py-2.5 rounded font-semibold text-sm 
                    hover:text-white transition-all active:scale-[0.98] 
                    shadow shadow-rose-950/0 hover:shadow-rose-950/20 cursor-pointer"
                            >
                                <Trash2 size={14} />
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}