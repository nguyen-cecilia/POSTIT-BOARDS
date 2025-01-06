import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar.tsx";
import {Plus, Folder} from 'lucide-react';
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.ts";

const AppSidebar = () => {
    const {boards} = useSelector((state: RootState) => state.app);

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Boards</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus/> <span className="sr-only">Add Board</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {boards.map((board) => (
                                <SidebarMenuItem key={board.id}>
                                    <SidebarMenuButton asChild>
                                        <a href={board.id}>
                                            <Folder/>
                                            <span>{board.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;