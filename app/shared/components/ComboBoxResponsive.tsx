// "use client";
import * as React from "react";
import { Form } from "@remix-run/react";
import { Button as Press } from "~/shared/components/Button";

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

type OrderBy = "Latest" | "Oldest" | "Popular";

const orderBy: OrderBy[] = ["Latest", "Oldest", "Popular"];

type contentType = "Community" | "Articles" | "Videos" | "Images" | "Products";
const contentType = ["Community", "Articles", "Videos", "Images", "Products"];

export default function ComboBoxResponsive() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  // const [selectedStatus, setSelectedStatus] = React.useState<null>(null);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            className="flex-1 w-2/5 justify-start bg-light rounded-none py-2 h-full"
          >
            <span className="flex text-slate-400 text-sm leading-6 pl-1">
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

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        asChild
        className="active:transition ease-out delay-150 duration-300"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="filter"
          className="absolute right-3 top-1/2 -mt-2.5 mr-[20%] md:hidden"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M21 6H19M21 12H16M21 18H16M7 20V13.5612C7 13.3532 7 13.2492 6.97958 13.1497C6.96147 13.0615 6.93151 12.9761 6.89052 12.8958C6.84431 12.8054 6.77934 12.7242 6.64939 12.5617L3.35061 8.43826C3.22066 8.27583 3.15569 8.19461 3.10948 8.10417C3.06849 8.02393 3.03853 7.93852 3.02042 7.85026C3 7.75078 3 7.64677 3 7.43875V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H13.4C13.9601 4 14.2401 4 14.454 4.10899C14.6422 4.20487 14.7951 4.35785 14.891 4.54601C15 4.75992 15 5.03995 15 5.6V7.43875C15 7.64677 15 7.75078 14.9796 7.85026C14.9615 7.93852 14.9315 8.02393 14.8905 8.10417C14.8443 8.19461 14.7793 8.27583 14.6494 8.43826L11.3506 12.5617C11.2207 12.7242 11.1557 12.8054 11.1095 12.8958C11.0685 12.9761 11.0385 13.0615 11.0204 13.1497C11 13.2492 11 13.3532 11 13.5612V17L7 20Z"
              stroke="#1e293b"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </DrawerTrigger>
      <DrawerContent className="w-full p-2 bg-gray-100">
        <div className="mt-4 border-t">
          <StatusList setOpen={setOpen} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
}: // setSelectedStatus,
{
  setOpen: (open: boolean) => void;
}) {
  {
    return (
      <Command>
        <CommandList>
          <CommandGroup>
            <Form>
              <section className="p-2 text-sm leading-6">
                <header className="font-medium text-slate-600 pt-2">
                  ORDER BY
                </header>
                <main className="flex flex-col gap-1">
                  {orderBy.map((order) => (
                    <CommandItem key={order} value={order}>
                      <span className="flex gap-2">
                        <input
                          type="radio"
                          id={order}
                          name="filter-by"
                          value={order}
                          className="active:bg-pink-200 border-pink-200"
                        />
                        <label htmlFor={order}>{order}</label>
                      </span>
                    </CommandItem>
                  ))}{" "}
                </main>
              </section>

              <section className="p-2 text-sm leading-6">
                <header className="font-medium text-slate-600 pt-2">
                  CONTENT BY
                </header>
                <main className="flex flex-col gap-1">
                  {contentType.map((content) => (
                    <CommandItem key={content} value={content}>
                      <span className="flex gap-2">
                        <input
                          type="checkbox"
                          id={content}
                          name={content}
                          value={content}
                        />
                        <label htmlFor={content}>{content}</label>
                      </span>
                    </CommandItem>
                  ))}{" "}
                </main>
              </section>
              <div className="flex place-content-around pt-2">
                <Press name="_action" value="reset" noStyle={true}>
                  Reset
                </Press>
                <Press name="_action" value="filter" noStyle={false}>
                  Apply Filter
                </Press>
              </div>
            </Form>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }
}
