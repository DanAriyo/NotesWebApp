"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ComboBoxProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  choices?: { name: string }[];
  setChoices?: (name: string) => void;
  currentTag?: string;
  setCurrentTag?: (tag: string) => void;
};

export function ComboBox({
  open,
  setOpen,
  choices,
  setChoices,
  currentTag,
  setCurrentTag,
}: ComboBoxProps) {
  const [value, setValue] = React.useState("");
  const [searchString, setSearchString] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className=' w-[240px] justify-between dark:text-white dark: border-white'
        >
          {currentTag?.length == 0 ? "Select Tag" : currentTag}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0 z-[501]'>
        <Command>
          <CommandInput
            placeholder='Search Tag...'
            onValueChange={setSearchString}
            className='dark:text-white dark:placeholder-white dark:border-white'
          />
          <CommandList>
            <CommandEmpty>No Tag found.</CommandEmpty>
            <CommandGroup>
              {choices?.map((choice) => (
                <CommandItem
                  key={choice.name}
                  value={choice.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen?.(false);
                    setCurrentTag?.(currentValue === value ? "" : currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === choice.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {choice.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <Button
            className='bg-white dark:bg-slate-800 dark:text-white dark:border-white'
            onClick={() => {
              setChoices?.(searchString);
              setOpen?.(false);
            }}
            disabled={
              choices?.some((choice) => choice.name === searchString) ||
              searchString.length == 0
            }
          >
            Aggiungi
          </Button>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
