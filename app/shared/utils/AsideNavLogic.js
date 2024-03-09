import avater from "~/assets/profile-picture.jpeg";
import {
  CommunityIcon,
  ArticleIcon,
  VisualMediaIcon,
  BookmarkIcon,
  FaqIcon,
  NotificationIcon,
  YouthexchangeIcon,
  JhPiegoIcon,
  SFHIcon,
  CPHIIcon,
} from "~/assets/Icons";

export const serviceMenu = [
  {
    text: "Community",
    icon: <CommunityIcon />,
  },
  {
    text: "Articles",
    icon: <ArticleIcon />,
  },
  {
    text: "Visual-media",
    icon: <VisualMediaIcon />,
  },
  {
    text: "Bookmarks",
    icon: <BookmarkIcon />,
  },
  {
    text: "FAQ",
    icon: <FaqIcon />,
  },
  {
    text: "Notifications",
    icon: <NotificationIcon />,
  },
];

export const serviceProvider = [
  { icon: <YouthexchangeIcon />, id: 1 },
  { icon: <JhPiegoIcon /> },
  { icon: <SFHIcon />, id: 2 },
  { icon: <CPHIIcon />, id: 3 },
];

export const topContributors = [
  {
    avater:
      "https://s3-alpha-sig.figma.com/img/c035/d306/25179bb3f357db8616e8f183db2b26c6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zg6xn30mV9tH4Ou8XhjyQhQ3Ds6oUh7xoH11Vcs0mp68JNDnLBhyXi282190UH2YHuJCbJCvAWMd2Ms2QVD3fmR1gfMvoqwcMa41AKY~VhHS-6IEgy4q6~m4p1LDM~cAVdvHsD70aOwQ9wsSkfMkJmRtmMqX-BKxWk9rNfAxX0AUVWEdvK2MRLFX7uggNKv9QQpf7Au1afrCXv~UUZT-8T29L6VYxTl6khmnal8oYskeVEr-44ETudDxy6lpIMTUeUSUhlb~7d6ptqsntBjmZWaVq7k7XiJo2dOTUhs1U8Ua7EHy8plDDkQRmNdXMJyNtnwH15PzpgWMnGLCMfg6dw__",
    name: "Charity",
  },
  { avater: avater, name: "Charity" },
  { avater: avater, name: "Charity" },
  { avater: avater, name: "Charity" },
  { avater: avater, name: "Charity" },
];
