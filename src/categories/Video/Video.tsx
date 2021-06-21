import React, { ReactElement, useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/menu.enum';
import {
  IVideo,
  IVideoYoutube,
  IYoutubeRequest,
  IYoutubeResponse,
} from './video.interface';
import Carousel, { IType } from '../../shared/components/Carousel/Carousel';
import image from '../../assets/img/006.png';
import { mockYoutube } from './mock-test';
import useStyle from './Video.style';

const params: IYoutubeRequest = {
  part: 'snippet',
  channelId: 'UChmhPmp1dm-jJWWY_J2dxew',
  key: 'AIzaSyDHq1CMNEiXDfKor8B8dbNB3Gb_2RhwM2k',
  maxResults: 15,
  type: 'video',
  order: 'date',
};

const Video = (): ReactElement => {
  const [listVideos, setListVideos] = useState<IVideo[]>([]);
  const theme = useTheme();
  const classNames = useStyle({ backgroundImage: image });

  const qs = (): string =>
    Object.keys(params)
      .map((key) => `${key}=${(params as any)[key]}`)
      .join('&');

  // useEffect(() => {
  //   mockYoutube.items?.map(
  //     (video: IVideoYoutube) => {
  //       setListVideos((listCurrentVideos: IVideo[]) => [
  //         ...listCurrentVideos,
  //         {
  //           title: video.snippet.title,
  //           url: video.snippet.thumbnails.high.url
  //         }
  //       ])
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch(`https://www.googleapis.com/youtube/v3/search?${qs()}`)
  //     .then((resp: any) => {
  //       if (resp.status === 200) {
  //         return resp.json();
  //       }
  //       return Promise.reject('Erro de API');
  //     })
  //     .then((resp: IYoutubeResponse) => {
  //       resp.items?.map(
  //         (video: IVideoYoutube) => {
  //           setListVideos((listCurrentVideos: IVideo[]) => [
  //             ...listCurrentVideos,
  //             {
  //               title: video.snippet.title,
  //               url: video.snippet.thumbnails.high.url
  //             }
  //           ]);
  //         });
  //     });
  // }, []);

  return (
    <ContainerCategorie
      color={theme.palette.primary.light}
      title={Category.Videos}
      id={Anchor.Videos}>
      {listVideos?.length !== 0 && (
        <Carousel data={listVideos} type={IType.Video} achor={Anchor.Videos} />
      )}

      {listVideos?.length === 0
        && (
          <a className={classNames.root} href='https://www.youtube.com/channel/UChmhPmp1dm-jJWWY_J2dxew' target='_blank'>
            <div />
          </a>
        )}
    </ContainerCategorie>
  );
};

export default Video;
