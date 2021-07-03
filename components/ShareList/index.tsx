import {
  TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon,
} from 'react-share';
import { HStack } from '@chakra-ui/react';
import { IShareList } from './types';

const ShareList = ({
  description, hashTags, title, errors, url,
}: IShareList) => (
  <HStack spacing={4}>
    <TwitterShareButton
      title={title}
      hashtags={hashTags}
      url={description}
      disabled={errors.title?.type !== undefined}
    >
      <TwitterIcon />
    </TwitterShareButton>
    <FacebookShareButton
      url={url}
      quote={`${title} \n ${description}
    `}
      disabled={errors.title?.type !== undefined || url === ''}
      hashtag={hashTags.join(' ')}
    >
      <FacebookIcon />
    </FacebookShareButton>
  </HStack>
);

export default ShareList;
