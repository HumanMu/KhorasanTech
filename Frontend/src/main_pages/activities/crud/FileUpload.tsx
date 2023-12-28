import { useCallback, useEffect, useState } from 'react';
import { Box, Center, Text, Image, VStack } from '@chakra-ui/react';
import { FileWithPath, useDropzone } from 'react-dropzone';

const ImageUpload = () => {
  const [images, setImages] = useState<FileWithPath[]>([]);
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setImages(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (images.length > 0) {
      console.log(images[0]);
    }
  })

  return (
    <Center h="full">
      <VStack align="center">
        <Box
          {...getRootProps()}
          p={4}
          borderWidth={2}
          borderStyle="dashed"
          borderColor={isDragActive ? 'blue.500' : 'gray.300'}
          borderRadius="md"
          cursor="pointer"
          marginTop={images? "100px" : `${innerHeight / 2}px`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <Text>Drop the files here</Text>
          ) : (
            <>
              <Text>Drag 'n' drop some files here, or click to select files</Text>
            </>
          )}        
        </Box>
        {images.map((file, index) => (
          <Image
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Uploaded ${index + 1}`}
            style={{ maxWidth: '100%', marginTop: '10px' }}
          />
        ))}
      </VStack>
    </Center>
  );
};

export default ImageUpload;
