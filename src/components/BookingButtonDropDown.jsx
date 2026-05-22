"use client";

import { Button, Dropdown, Label } from "@heroui/react";

export function BookingButtonDropDown() {
    return (
        <Dropdown>
            <Button
                // onClick={handleBookNow}
                // disabled={!availability}
                className={`w-full cursor-pointer py-4 px-6 rounded text-center text-sm font-bold shadow-lg transition-all duration-200 active:scale-[0.98] ${availability
                    ? 'bg-blue-500 border border-blue-300 text-white hover:bg-blue-700 hover:shadow-blue-200 shadow-md'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}>
                {availability ? 'Book Now This Car' : 'Currently Unavailable'}

            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                    <Dropdown.Item id="new-file" textValue="New file">
                        <Label>Yes</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                        <Label>No</Label>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}