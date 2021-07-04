import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinIcon,
  LinkedinShareButton,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import { HStack } from '@chakra-ui/react';
import { IShareList } from './types';

const ShareList = ({
  description, hashTags, title, errors, url,
}: IShareList) => (
  <HStack spacing={4}>
    <EmailShareButton
      subject={title}
      body={description}
      url={url}
      disabled={errors.title?.type !== undefined}
    >
      <EmailIcon />
    </EmailShareButton>
    <TwitterShareButton
      title={title}
      hashtags={hashTags}
      url={description + url}
      disabled={errors.title?.type !== undefined}
    >
      <TwitterIcon />
    </TwitterShareButton>
    <FacebookShareButton
      url={url}
      quote={`${title} \n ${description}
    `}
      disabled={errors.title?.type !== undefined || url === ''}
      hashtag={hashTags.map((value) => (`#${value}`)).join(' ')}
    >
      <FacebookIcon />
    </FacebookShareButton>
    <LinkedinShareButton
      title={title}
      summary={description}
      url={url}
      disabled={errors.title?.type !== undefined}
    >
      <LinkedinIcon />
    </LinkedinShareButton>
    <RedditShareButton
      title={title}
      url={`${description} ${url}`}
      disabled={errors.title?.type !== undefined}
    >
      <RedditIcon />
    </RedditShareButton>
    <WhatsappShareButton
      title={title}
      url={`${description} ${url}`}
      disabled={errors.title?.type !== undefined}
    >
      <WhatsappIcon />
    </WhatsappShareButton>
  </HStack>
);

export default ShareList;
