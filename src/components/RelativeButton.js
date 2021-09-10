import { useContext } from 'react'
import { Button, ButtonGroup } from '@material-ui/core';
import { appContext } from '../App';

function RelativeButton() {
    const { relative, setRelative } = useContext(appContext)
    return (
        <ButtonGroup>
            <Button onClick={() => setRelative(true)} disabled={relative ? true : false}>
                Relative Data
            </Button>
            <Button onClick={() => setRelative(false)} disabled={relative ? false : true}>
                Absolute Data
            </Button>
        </ButtonGroup>
    )
}

export default RelativeButton
