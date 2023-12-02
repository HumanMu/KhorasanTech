import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/Store";
import { Box, Container, Heading } from "@chakra-ui/react";

export default observer(function ServerError() {
    const {commonStore} = useStore();
    return (
        <Container>
            <Heading as='h1' content='Server Error' />
            <Heading as='h5' color="red" content={commonStore.error?.message} />
            {commonStore.error?.details && (
                <Box>
                    <Heading as='h4' content='Stack trace' color="teal" />
                    <code style={{marginTop: '10px'}}>{commonStore.error.details}</code>
                </Box>
            )}
        </Container>
    )
})