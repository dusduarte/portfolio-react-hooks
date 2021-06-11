import React, { ReactElement, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { ANCHOR } from '../../Menu/Menu';
import {
  IVideo,
  ICarouselVideos,
  IVideoYoutube,
  IYoutubeRequest,
  IYoutubeResponse,
} from './video.interface';
import Carousel from '../../shared/components/Carousel/Carousel';
import { throws } from 'assert';

const params: IYoutubeRequest = {
  part: 'snippet',
  channelId: 'UChmhPmp1dm-jJWWY_J2dxew',
  key: 'AIzaSyDHq1CMNEiXDfKor8B8dbNB3Gb_2RhwM2k',
  maxResults: 50,
  type: 'video',
  order: 'date',
};

const Video = (): ReactElement => {
  const [carouselVideos, setCarouselVideos] = useState<ICarouselVideos[]>();
  const [listVideos, setListVideos] = useState<IVideo[]>();

  const qs = (): string =>
    Object.keys(params)
      .map((key) => `${key}=${(params as any)[key]}`)
      .join('&');

  // useEffect(() => {
  //   fetch(`https://www.googleapis.com/youtube/v3/search?${qs()}`)
  //     .then((resp: any) => {
  //       if (resp.status === 200) {
  //         return resp.json();
  //       }
  //       return Promise.reject('Erro de API');
  //     })
  //     .then((resp: IYoutubeResponse) => {
  //       let differentIndex = 0;
  //       resp.videos?.map(
  //         (video: IVideoYoutube, index: number, videos: IVideoYoutube[]) => {
  //           differentIndex++;
  //           setListVideos([
  //             {
  //               title: video.snippet.title,
  //               url: video.snippet.thumbnails.high.url,
  //             },
  //           ]);

  //           // two videos per step
  //           if (differentIndex === 2) {
  //             differentIndex = 0;
  //             setCarouselVideos([{ videos: listVideos || ([{}] as IVideo[]) }]);
  //           }

  //           // When the last index has a single video
  //           if (index === videos.length - 1) {
  //             setCarouselVideos([{ videos: listVideos || ([{}] as IVideo[]) }]);
  //           }
  //         }
  //       );
  //     });
  // });

  return (
    <>
      {carouselVideos?.length && (
        <ContainerCategorie title="vídeos" id={ANCHOR.Videos}>
          <Grid item={true} sm={12}>
            <Carousel data={carouselVideos} />
          </Grid>
        </ContainerCategorie>
      )}
    </>
  );
};

export default Video;
