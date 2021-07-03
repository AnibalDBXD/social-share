import {
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Input,
  IconButton,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IHashTagList } from './types';

const hashtagInput = 'hashtagInput';

const HashTagList = ({ hashTags, setHashTags }: IHashTagList) => {
  const {
    register, handleSubmit, setValue,
  } = useForm();

  const onSubmit: SubmitHandler<{ hashtagInput: string}> = (data) => {
    setHashTags([data.hashtagInput, ...hashTags]);
    setValue(hashtagInput, '');
  };

  const deleteTag = (tag: string) => {
    setHashTags(hashTags.filter((predicate) => predicate !== tag));
  };

  return (
    <>
      <InputGroup w="13rem">
        <InputLeftAddon>#</InputLeftAddon>
        <Input placeholder="Add a HashTag" {...register(hashtagInput, { required: true })} />
        <InputRightElement>
          <IconButton
            aria-label="Add Hashtag"
            icon={<AddIcon />}
            variant="unstyled"
            onClick={handleSubmit(onSubmit)}
            display="flex"
          />
        </InputRightElement>
      </InputGroup>
      {
        hashTags.toString() !== '' && (
          <HStack spacing={4}>
            {
              hashTags.map((value) => (
                <Tag key={value} size="lg" colorScheme="cyan">
                  <TagLabel>
                    #
                    {value}
                  </TagLabel>
                  <TagCloseButton onClick={() => deleteTag(value)} />
                </Tag>
              ))
            }
          </HStack>
        )
      }
    </>
  );
};

export default HashTagList;
