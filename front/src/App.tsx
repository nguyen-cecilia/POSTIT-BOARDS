import AppSidebar from '@/components/AppSidebar.tsx';
import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar.tsx';
import {Outlet} from 'react-router';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store.ts';

function App() {
    const {currentBoard} = useSelector((state: RootState) => state.app);

    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className="flex-1">
                <header className="flex items-center gap-3 p-2 border-b border-border">
                    <SidebarTrigger/>
                    {currentBoard.title}
                </header>

                <Outlet/>
            </main>
        </SidebarProvider>
    )
}

export default App;
