interface NavItemProps {
  id: number;
  name: string;
  href: string;
}

const NavItems: NavItemProps[] = [
  {
    id: 1,
    name: "Angebote",
    href: "#angebote",
  },
  {
    id: 2,
    name: "Rezensionen",
    href: "#rezensionen",
  },
  {
    id: 3,
    name: "Über uns",
    href: "#über-uns",
  },
];

export default NavItems;
