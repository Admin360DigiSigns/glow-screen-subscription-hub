import { Link } from "react-router-dom";
import { Monitor, Tv, Video, Image, Tag, ZapIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "Indoor Digital Screens",
    href: "/products?category=indoor",
    description: "High-resolution displays for retail, corporate & entertainment",
    icon: <Monitor className="h-4 w-4" />,
    color: "from-digi-green/20 to-digi-green/5"
  },
  {
    title: "Video Wall Solutions",
    href: "/products?category=videowall",
    description: "Create stunning visual experiences with seamless technology",
    icon: <Tv className="h-4 w-4" />,
    color: "from-digi-blue/20 to-digi-blue/5"
  },
  {
    title: "Outdoor LED Screens",
    href: "/products?category=outdoor",
    description: "Weather-resistant displays for any outdoor environment",
    icon: <Video className="h-4 w-4" />,
    color: "from-digi-red/20 to-digi-red/5"
  },
  {
    title: "Touchscreen Kiosks",
    href: "/products?category=touchkiosk",
    description: "Interactive solutions for self-service & information",
    icon: <ZapIcon className="h-4 w-4" />,
    color: "from-digi-blue/20 to-digi-red/5"
  },
  {
    title: "Drive-Through Kiosks",
    href: "/products?category=drivethrough",
    description: "Streamline drive-through operations with our displays",
    icon: <Image className="h-4 w-4" />,
    color: "from-digi-green/20 to-digi-blue/5"
  },
  {
    title: "Digital Billboards",
    href: "/products?category=billboard",
    description: "High-impact outdoor advertising with remote management",
    icon: <Tag className="h-4 w-4" />,
    color: "from-digi-red/20 to-digi-green/5"
  },
];

// NavigationMenu component for product categories
export function ProductNavMenu() {
  return (
    <NavigationMenu className="h-full">
      <NavigationMenuList className="h-full">
        <NavigationMenuItem className="h-full flex items-center">
          <NavigationMenuTrigger className="bg-transparent text-white hover:text-digi-green hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent h-auto py-0">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-black/90 backdrop-blur-lg border border-gray-800">
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                  color={product.color}
                >
                  <div className="flex items-center gap-2">
                    {product.icon}
                    <span>{product.description}</span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Custom ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { color?: string }
>(({ className, title, color, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800",
            `bg-gradient-to-br ${color || "from-gray-800/10 to-gray-800/5"}`,
            "group",
            className
          )}
          href={props.href}
        >
          <div className="text-sm font-medium leading-none text-white group-hover:text-digi-green">
            {title}
          </div>
          <div className="line-clamp-2 text-sm leading-snug text-gray-400 group-hover:text-gray-300">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
