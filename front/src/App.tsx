import AppSidebar from '@/components/AppSidebar.tsx';
import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar.tsx';
import {Outlet} from 'react-router';

function App() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                <Outlet/>
            </main>
        </SidebarProvider>
    )
}

export default App;
