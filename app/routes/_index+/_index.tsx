import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

// import { Button } from "~/shared/components/Button";
export const meta: MetaFunction = () => {
  return [
    { title: "AskFay" },
    {
      name: "description",
      content:
        "Revolutionizing the delivery of SRH information and services to reach young people at scale",
    },
  ];
};

export default function Index() {
  return (
    //Todo:
    //Adjust the css to allow for complete grid span of the main

    <div>
      <h2 className="text-sm">Index</h2>
    </div>
  );
}
