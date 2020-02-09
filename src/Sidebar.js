import React, {useState} from "react";
import Sidebar from "react-sidebar";

const SidebarMenu = props => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const onSetSidebarOpen = open => {
        setSidebarOpen(open);
    };
return (
        <Sidebar
            sidebar={<b>Sidebar content</b>}
            open={sidebarOpen}
            onSetOpen={onSetSidebarOpen}
            styles={{ sidebar: { background: "white", color: "blue" } }}
        >
            <button onClick={() => onSetSidebarOpen(true)}>
                Open sidebarSSSSSS
            </button>
        </Sidebar>
        )
};

export default SidebarMenu;