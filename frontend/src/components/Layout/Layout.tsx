import { ReactNode } from "react";


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {children}
        </div>
    )
}

export default Layout;