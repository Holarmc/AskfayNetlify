import type { MetaFunction } from "@remix-run/node";

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

    <h2 className="text-sm text-slate-200">Hello there!</h2>
  );
}
