import { ReactElement, useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/menu.enum';
import {
  IVideo,
  IVideoYoutube,
  IYoutubeRequest,
  IYoutubeResponse,
} from './video.interface';
import Carousel, { Type } from '../../shared/components/Carousel/Carousel';
import image from '../../assets/img/006.png';
import useStyle from './Video.style';
import customFetch from '../../shared/helpers/fetch/fetch';

const params: IYoutubeRequest = {
  part: 'snippet',
  channelId: 'UCAF9UVmpuvir8_rg5ifqiHQ',
  key: 'AIzaSyCUFDC8z5shBUKPUXoXmf4EGLiQLKxwRFk',
  maxResults: 15,
  type: 'video',
  order: 'date',
};

const Video = (): ReactElement => {
  const [listVideos, setListVideos] = useState<IVideo[]>([]);
  const theme = useTheme();
  const classNames = useStyle({ backgroundImage: image });

  const qs = (): string => Object.keys(params)
    .map(key => `${key}=${(params as any)[key]}`)
    .join('&');

  useEffect(() => {
    customFetch(`https://www.googleapis.com/youtube/v3/search?${qs()}`)
      .then((resp: IYoutubeResponse) => {
        resp.items?.map(
          (video: IVideoYoutube) => {
            setListVideos((listCurrentVideos: IVideo[]) => [
              ...listCurrentVideos,
              {
                title: video.snippet.title,
                url: video.snippet.thumbnails.high.url
              }
            ]);
          }
        );
      });
  }, []);

  return (
    <ContainerCategorie
      color={theme.palette.primary.light}
      title={Category.Videos}
      id={Anchor.Videos}
    >
      {listVideos?.length !== 0 && (
        <Carousel data={listVideos} type={Type.Video} achor={Anchor.Videos} />
      )}

      {listVideos?.length === 0
        && (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a
            className={classNames.root}
            href="https://www.youtube.com/channel/UChmhPmp1dm-jJWWY_J2dxew"
            target="_blank"
          >
            <div aria-label="Imagem de um banner do canal do youtube Pedi, tá pronto?" />
          </a>
        )}
    </ContainerCategorie>
  );
};

export default Video;
