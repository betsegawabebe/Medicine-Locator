import { useState } from "react";
import { Flex, Text } from "../../ui/Blocks";
import Modal from "../../ui/Modal";
import { Cross2Icon, RowsIcon } from "@radix-ui/react-icons";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import useLocalStorage from "use-local-storage";
import MenuList from "./menu";
import UserInfo from "./userInfo";
import { SideBar } from "../SideBar/sideBar";

// import { useDefaultLayoutSlice } from 'app/layouts/DefaultLayout/slice';
// import Modal from '../Bloc ks/Modal';
// import { useMediaQuery } from 'react-responsive';

function Header() {
  const [mode, setMode] = useLocalStorage("mode", "dark");

  const [openMenu, setOpenMenu] = useState(false);
  //   const isMobile = useMediaQuery({ maxWidth: 768 });
  //   useEffect(() => {
  //     setOpenMenu(false);
  //   }, [isMobile]);
  // const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Flex
        backgroundColor={mode == "dark" ? "#263238" : "#fff"}
        height={"40px"}
        left={"0px"}
        position={"fixed"}
        py={["10px"]}
        top={"0px"}
        width={"100%"}
        zIndex={"2000"}
        boxShadow={"0px 7px 13px -8px rgba(0,0,0,0.35)"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mx={3}
          width={["100%", "97vw"]}
        >
          <Text
            color={mode == "dark" ? "#f7f9fc" : "black"}
            display={["none", "none", "block"]}
            fontSize={"22px"}
            fontWeight={7}
            ml={5}
          >
            <Text fontWeight={4}>Medicine</Text>
            Locator
          </Text>
          <Text
            color={"white"}
            display={["block", "block", "none"]}
            fontSize={7}
            fontWeight={7}
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              // backgroundColor={"red"}
              // hover ={{backgroundColor:'#fff'}}
              padding={"6px"}
              borderRadius={"50%"}
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
              style={{ cursor: "pointer" }}
            >
              {openMenu ? <Cross2Icon /> : <RowsIcon />}
            </Flex>
          </Text>
          <Flex
            backgroundColor={"#FFf"}
            padding={"6px"}
            borderRadius={"50%"}
            marginLeft={"auto"}
            marginRight={"30px"}
            hover={{ cursor: "pointer", border: "1px solid #0cb7b8" }}
          >
            {mode == "dark" ? (
              <MdOutlineLightMode
                onClick={() => {
                  setMode("light");
                }}
              />
            ) : (
              <MdOutlineDarkMode
                onClick={() => {
                  setMode("dark");
                }}
              />
            )}
          </Flex>

          <UserInfo />
        </Flex>
      </Flex>
      <SideBar />
      <Modal
        open={openMenu}
        setOpen={() => {
          setOpenMenu(false);
        }}
        top={"60px"}
      >
        <MenuList
          setshowMenu={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Modal>
    </>
  );
}
export default Header;
