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
                    <Link to="/">General Data</Link><br />
                </Button>
                <Button onClick={() => setPath("/vaccination")} disabled={path === "/vaccination"}>
                    <Link to="/vaccination">Vaccinaion Data</Link><br />
                </Button>
                <Button onClick={() => setPath("/test")} disabled={path === "/test"}>
                    <Link to="/test">Test Data</Link>
                </Button>
            </ButtonGroup>
        </>
    );
};

export default Links;
