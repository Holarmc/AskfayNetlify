import { type MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import PageFeed from "~/shared/components/ui/pagefeed";

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

export const loader = async () => {
  return "";
  // try {
  //   const data = await fetch(`${process.env.APP_API_BASE_URL}/posts/`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.APP_API_TOKEN}`,
  //     },
  //   }).then((res) => res.json());
  //   return json(data);
  // } catch (error) {
  //   console.log(error);
  // }
};

export default function Index() {
  // const {data} = useLoaderData<LoaderData>();
  // console.log(data);
  return (
    <div className="px-2">
      <PageFeed />
    </div>
  );
}
