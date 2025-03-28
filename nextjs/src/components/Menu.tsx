import Image from "next/image";
import Link from "next/link";

const menuItems = [ 
  { 
    title: "MENU", 
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/admin",
      },
      {
        icon: "/product.png",
        label: "Product",
        href: "/list/product",
      },
      {
        icon: "/student.png",
        label: "Users",
        href: "/list/users",
      },
      {
        icon: "/Order.png",
        label: "Order",
        href: "/list/orders",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "",
      },
    ],
  },
];

export default function Menu  () {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
            >
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

