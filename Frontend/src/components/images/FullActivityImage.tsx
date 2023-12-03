import { Box, Image } from "@chakra-ui/react";

interface Props {
    imageUrl : string
}

export default function FullActivityImage({imageUrl} : Props) {
    return(
        <Box>
            <Image {...FullImage} src={imageUrl}/>
        </Box>
    )
}

const FullImage  = {
    width: '100%',
    height: "100%",
    maxHeight: '100vh',
    maxWidth: '100vh',
}