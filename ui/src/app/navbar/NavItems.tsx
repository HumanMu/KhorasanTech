export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Chat",
    children: [
      {
        label: "Explore the world",
        subLabel: "Chat with random people from cross the globe",
        href: "/chatroom",
      },
      {
        label: "New Friends",
        subLabel: "Do you like someone in the chat make them friend of yours",
        href: "#",
      },
    ],
  },
  {
    label: "About us",
    children: [
      {
        label: "Who we are",
        subLabel: "Read about Khorasan Technology",
        href: "/aboutus",
      },
      {
        label: "Our vision",
        subLabel: "Read about our values",
        href: "/vission",
      },
      {
        label: "Our mission",
        subLabel: "Read what our mission is",
        href: "/mission",
      },
    ],
  },
  {
    label: "Contact us",
    subLabel: "Coming soon",
    href: "/contactus",
  },
];
