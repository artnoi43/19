import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import { appContext } from '../App';

function Links() {
    const { path, setPath } = useContext(appContext);
    return (
        <>
            <ButtonGroup>
                <Button onClick={() => setPath("/")} disabled={path === "/"}>
                    <Link to="/">Click Here For General Data</Link><br />
                </Button>
                <Button onClick={() => setPath("/vaccination")} disabled={path === "/vaccination"}>
                    <Link to="/vaccination">Click Here for Vaccinaion Data</Link><br />
                </Button>
                <Button onClick={() => setPath("/test")} disabled={path === "/test"}>
                    <Link to="/test">Click Here for Test Data</Link>
                </Button>
            </ButtonGroup>
        </>
    )
}

export default Links
