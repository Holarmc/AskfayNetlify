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
    <main className="grid col-span-full md:col-end-13 md:col-span-8 bg-black40">
      <h2 className="text-sm text-slate-200">Hello there!</h2>
    </main>
  );
}
