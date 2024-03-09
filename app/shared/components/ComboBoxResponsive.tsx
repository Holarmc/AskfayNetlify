// "use client";
import * as React from "react";
import { Form } from "@remix-run/react";

import { useMediaQuery } from "react-responsive";
import { Button } from "~/shared/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/shared/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "~/shared/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/shared/components/ui/popover";

// type Status = {
//   value: string;
//   label: string;
// };

// const statuses: Status[] = [
//   {
//     value: "backlog",
//     label: "Backlog",
//   },
//   {
//     value: "todo",
//     label: "Todo",
//   },
//   {
//     value: "in progress",
//     label: "In Progress",
//   },
//   {
//     value: "done",
//     label: "Done",
//   },
//   {
//     value: "canceled",
//     label: "Canceled",
//   },
// ];

type OrderBy = "Latest" | "Oldest" | "Popular";

const orderBy: OrderBy[] = ["Latest", "Oldest", "Popular"];

type contentType = "Community" | "Articles" | "Videos" | "Images" | "Products";
const contentType = ["Community", "Articles", "Videos", "Images", "Products"];

export default function ComboBoxResponsive() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const [selectedStatus, setSelectedStatus] = React.useState<null>(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            className="flex-1 w-1/2 justify-start bg-light rounded-none py-3 h-full"
          >
            <span className="flex text-slate-400 text-sm leading-6 pl-3">
              Filter
              <svg
                width="24"
                height="24"
                className="pl-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9202 8.18018H11.6902H6.08024C5.12024 8.18018 4.64024 9.34018 5.32024 10.0202L10.5002 15.2002C11.3302 16.0302 12.6802 16.0302 13.5102 15.2002L15.4802 13.2302L18.6902 10.0202C19.3602 9.34018 18.8802 8.18018 17.9202 8.18018Z"
                  fill="#121212"
                  fill-opacity="0.4"
                />
              </svg>
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 bg-light" align="start">
          <StatusList setOpen={setOpen} />
          {/* setSelectedStatus={setSelectedStatus} */}
        </PopoverContent>
      </Popover>
    );
  }

  //   return (
  //     <Drawer open={open} onOpenChange={setOpen}>
  //       <DrawerTrigger asChild>
  //         <Button variant="outline" className="w-[150px] justify-start">
  //           {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
  //         </Button>
  //       </DrawerTrigger>
  //       <DrawerContent>
  //         <div className="mt-4 border-t">
  //           <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
  //         </div>
  //       </DrawerContent>
  //     </Drawer>
  //   );
  // }

  function StatusList({
    setOpen,
  }: // setSelectedStatus,
  {
    setOpen: (open: boolean) => void;
    // setSelectedStatus: (status: Status | null) => void;
  }) {
    return (
      <Command>
        {/* <CommandInput placeholder="Filter status..." /> */}
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {orderBy.map((order) => (
              <CommandItem
                key={order}
                value={order}
                // onSelect={(value) => {
                //   setSelectedStatus(
                //     statuses.find((priority) => priority.value === value) || null
                //   );
                //   setOpen(false);}}
              >
                <Form>
                  <input
                    type="radio"
                    id="latest"
                    name="latest"
                    value="Latest"
                  />
                  <label htmlFor="latest">Latest</label>
                </Form>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }
}
