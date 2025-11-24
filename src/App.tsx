import { Outlet } from 'react-router-dom';

import { Header } from '~/components';

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
