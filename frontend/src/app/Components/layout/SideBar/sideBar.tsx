import useLocalStorage from "use-local-storage";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
import { Box, Flex } from "../../ui/Blocks";
import SideBarMenu from "./sideBarMenu";


export function SideBar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [mode] = useLocalStorage('mode','')
    return (
      <Box
     
        backgroundColor={ mode == 'dark'? '#263238' :'#fff' }
        // border={"1px solid #44"}
        display={["none", "none", "block"]}
        height="calc(100% - 40px)"
       
        position="fixed"
        left={0}
        border={'1px solid #263238'}
        boxShadow={' -11px 1px 15px 5px rgba(0,0,0,0.61)'}
        style={{ transition: "width 0.03s linear" }}
        top={"40px"}
        width={isCollapsed ? ["24%", "25%", "15%"] : ["9%", "8%", "8%", "5%"]}
        zIndex={"1000"}
      >
        <Flex
          flexDirection={"column"}
          height={"calc(100vh - 63px)"}
          justifyContent={"space-between"}
          py={4}
        >
          <SideBarMenu
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
          <Flex
            bottom={1}
            position={"absolute"}
            right={1}
            paddingBottom={2}
            marginRight={2}
          >
            {isCollapsed ? (
              <AiFillCaretLeft
                fontSize={"20px"}
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                }}
              />
            ) : (
              <AiFillCaretRight
                fontSize={"20px"}
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                }}
              />
            )}
          </Flex>
        </Flex>
      </Box>
    );
  }