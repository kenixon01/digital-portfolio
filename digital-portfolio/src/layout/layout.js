import Sidebar from '../components/Sidebar';

function Layout(props) {
    return(
        <div style={{ display: "flex" }}>
            <Sidebar/>
            {props.children}
        </div>
    );
}

export default Layout;