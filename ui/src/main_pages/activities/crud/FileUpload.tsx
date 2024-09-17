import { useCallback, useEffect, useState } from 'react';
import { Box, Center, Text, Image, VStack } from '@chakra-ui/react';
import {  useDropzone } from 'react-dropzone';

interface ImageUploadProps {
  onImageChange: (newImages: File[]) => void;
}
const ImageUpload = ({onImageChange}: ImageUploadProps) => {
  const [images, setImages] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages(acceptedFiles);
    onImageChange(acceptedFiles);
    console.log("Accepted files:", acceptedFiles);
  }, [onImageChange]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  
  useEffect(() => {
    if (images.length > 0) {
      console.log("Uploaded images:", images);
      console.log("Image URLs:", images.map((file) => URL.createObjectURL(file)));
    }
  }, [images]);
  
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
              <Text>Drag & drop an image, or click to select from your computer</Text>
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
