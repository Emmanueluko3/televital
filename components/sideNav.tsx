"use client";
import { IMAGES } from "@/utils/constants";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CiHome } from "react-icons/ci";
import { MdInsights } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineDataSaverOn } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const navLinks = [
    {
      icon: <CiHome />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <MdOutlineDataSaverOn />,
      label: "Data Upload",
      href: "/data-upload",
    },
    {
      icon: <GrAnalytics />,
      label: "Analytics",
      href: "/analytics",
    },

    {
      icon: <MdInsights />,
      label: "Insights",
      href: "/insights",
    },
    {
      icon: <IoSettingsOutline />,
      label: "Settings",
      href: "/settings",
    },
  ];

  return (
    <>
      <Flex
        py="2"
        px="6"
        top="0"
        height="full"
        width="full"
        minWidth="xs"
        zIndex="modal"
        alignItems="start"
        flexDirection="column"
      >
        <Box>
          <Image src={IMAGES.logo} alt="logo" height={27} width={150} />
        </Box>

        <Box my="56px">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`my-8 rounded-lg flex items-center font-semibold hover:text-orange-400 transition-all text-xl ${
                pathname === link.href ? "text-orange-400" : "gray.700"
              }`}
            >
              <span className="mr-3 text-2xl">{link.icon}</span> {link.label}
            </Link>
          ))}
        </Box>

        <Avatar />
      </Flex>
    </>
  );
}

const Avatar = () => {
  return (
    <Flex alignItems="center" gap="4">
      <Box borderRadius="full" cursor="pointer">
        <Image
          src={IMAGES.profilePlaceholder}
          alt="logo"
          height={40}
          width={40}
          style={{ borderRadius: "100%", objectFit: "cover" }}
        />
      </Box>
    </Flex>
  );
};
