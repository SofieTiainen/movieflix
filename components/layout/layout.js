import Navbar from "./navbar";

/*Layouten är den komponenten där alla sidor och 
innehåll hamnar i därför använder vi oss av 
props children. 

I main lägger vi in allting som vi vill
ha i vår layout-hantering*/

const Layout = (props) => {
    return (
        <>
        <Navbar />
        <main>{props.children}</main>
        </>
    )
}

export default Layout;