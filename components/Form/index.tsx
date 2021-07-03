import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Flex,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import HashTagList from '../HashtagList';
import ShareList from '../ShareList';
import { IFormInputs } from './types';

const TITLE = 'title';
const DESCRIPTION = 'description';
const URL = 'url';

// eslint-disable-next-line no-useless-escape
const URL_PATTERN = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&=]*)/;

const Form = () => {
  const [hashTags, setHashTags] = useState<string[]>([]);
  const {
    register, watch, formState: { errors }, handleSubmit,
  } = useForm<IFormInputs>();

  const handleHashTags = (newTags: string[]) => {
    setHashTags(newTags);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="70%"
    >
      <Flex onChange={handleSubmit(() => {})} boxShadow="xl" w="80%" borderRadius="24px" padding="8" gridGap="4" backgroundColor="white" flexDirection="column">
        <FormControl id="title" isRequired isInvalid={errors.title?.type === 'required'}>
          <FormLabel>Title</FormLabel>
          <Input {...register(TITLE, { required: true })} type="title" />
          <FormErrorMessage>This field has to be filled</FormErrorMessage>
        </FormControl>
        <FormControl id="url" isInvalid={errors.url?.type === 'pattern'}>
          <FormLabel>Page Url</FormLabel>
          <Input {...register(URL, { pattern: URL_PATTERN, minLength: 3 })} type="url" />
          <FormHelperText>Facebook needs a URL to share</FormHelperText>
          <FormErrorMessage>The field should contain a url or be empty</FormErrorMessage>
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea {...register(DESCRIPTION)} maxH="400px" type="description" />
        </FormControl>
        <HashTagList hashTags={hashTags} setHashTags={handleHashTags} />
        <ShareList errors={errors} hashTags={hashTags} {...watch()} />
      </Flex>
    </Flex>
  );
};

export default Form;
