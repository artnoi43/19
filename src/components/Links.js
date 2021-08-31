import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';

function Links() {
    return (
        <>
            <ButtonGroup>
                <Button>
                    <Link to="/">Click Here For General Data</Link><br />
                </Button>
                <Button>
                    <Link to="/vaccination">Click Here for Vaccinaion Data</Link><br />
                </Button>
                <Button>
                    <Link to="/test">Click Here for Test Data</Link>
                </Button>
            </ButtonGroup>
        </>
    )
}

export default Links
