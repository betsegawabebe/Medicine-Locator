import { useLocation, Link } from "react-router-dom";
import { Flex, Text } from "../../ui/Blocks";
import { SideBarMenuItemProp } from "./types";
import React from "react";

export function SideBarMenuItem(props: SideBarMenuItemProp) {
  const { label, to, icon } = props.menuItem;
  const { pathname } = useLocation();
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "",
      }}
      to={`/`}
    >
      <Flex
        alignItems={"center"}
        backgroundColor={pathname.includes(to) ? "#e5e5ea" : ""}
        borderRadius={0}
        color={location.pathname.includes(to) ? "#303036" : ""}
        onClick={() => {
          props.setIsCollapsed?.(false);
          props.setshowMenu?.(false);
        }}
        p={"2px"}
        style={{ gap: "10px", cursor: "pointer" }}
      >
        <Text fontSize={3} fontWeight={2}>
          {React.createElement(icon)}
        </Text>

        {props.isCollapsed && (
          <Text
            fontFamily="Inter"
            fontSize={2}
            fontWeight={pathname.includes(to) ? 5 : 3}
            lineHeight={1}
            padding={1}
            backgroundColor={""}
          >
            {label}
          </Text>
        )}
      </Flex>
    </Link>
  );
}

export default SideBarMenuItem;
