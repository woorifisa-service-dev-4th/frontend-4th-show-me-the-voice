'use client';

import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@radix-ui/react-icons";

const SelectDemo = ({children, defaultValue}) => {

    const [value, setValue] = React.useState(defaultValue);

    return (
    <Select.Root defaultValue={value} onValueChange={(v) => setValue(v)}>
        <Select.Trigger
            className="inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-violet11 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9"
            aria-label="Food"
        >
            <Select.Value ></Select.Value>
            <Select.Icon className="text-violet11">
                <ChevronDownIcon />
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
            <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
                    <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-[5px]">
                    <Select.Group>
                        {/* <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                        Options
                        </Select.Label> */}
                        {Object.entries(children).map(item => <SelectItem key={item[0]} value={item[0]}>{item[1]}</SelectItem>)}
                    </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
                    <ChevronDownIcon />
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
)}




const SelectItem = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
        return (
            <Select.Item
                className={classnames(
                    "relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-violet11 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none",
                    className,
                )}
                {...props}
                ref={forwardedRef}
            >
                <Select.ItemText>{children}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                    <CheckIcon />
                </Select.ItemIndicator>
            </Select.Item>
        );
    },
);

export default SelectDemo;
