import { Flex, Text } from "../../ui/Blocks";
// import { Link } from "react-router-dom";

// import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { SideBarMenuItemProp } from "./types";
// import { selectRole } from 'app/layouts/DefaultLayout/slice/selectors';
// import { useMediaQuery } from 'react-responsive';

export function SideBarMenuItem(props: SideBarMenuItemProp) {
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  // const { label, to } = props.menuItem;
  // const { pathname } = useLocation();
  // const role = 'admin';
  // console.log(props.isCollapsed);
  return (
    // <Link
    //   style={{
    //     textDecoration: 'none',
    //     color: 'inherit',
    //   }}
    // to={`/`}
    // >
    <Flex
      alignItems={"center"}
      // backgroundColor={pathname.includes(to) ? "#e5e5ea" : ""}
      borderRadius={0}
      // color={pathname.includes(to) ? "#303036" : ""}
      onClick={() => {
        props.setIsCollapsed?.(false);
        props.setshowMenu?.(false);
      }}
      p={"7px 15px"}
      style={{ gap: "10px", cursor: "pointer" }}
    >
      <Text fontSize={5} fontWeight={3}>
        {/* {React.createElement(icon)} */}
      </Text>

      {props.isCollapsed && (
        <Text
          fontFamily="Inter"
          fontSize={3}
          // fontWeight={pathname.includes(to) ? 5 : 3}
          lineHeight={6}
        >
          hello
        </Text>
      )}
    </Flex>
    //  </Link>
  );
}

export default SideBarMenuItem;
