import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { deleteVideoGame, getVideoGameDetail } from '../actions';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export function Detail() {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const fetchVideoGameDetail = useCallback(() => {
    dispatch(getVideoGameDetail(id));
  }, [dispatch, id]);

  const fetchDeleteVideoGame = useCallback(()=>{
    dispatch(deleteVideoGame(id))
  }, [dispatch, id]);

  useEffect(() => {
    fetchVideoGameDetail();
  }, [fetchVideoGameDetail]);

  const {
    videoGameDetail,
  } = useAppSelector((rootReducer) => rootReducer.videoGames);

  const handleDeleteButton = () => {
    fetchDeleteVideoGame();
  };

  return (
    <>
      <div>{videoGameDetail && videoGameDetail.name}</div>
      < img alt='' src={videoGameDetail && videoGameDetail.image} width={200} height={100} />
      <div>Description: {videoGameDetail && videoGameDetail.description}</div>
      <div>Released: {videoGameDetail && videoGameDetail.release_date}</div>
      <div>Rating: {videoGameDetail && videoGameDetail.rating}</div>
      <div>Platforms: <ul>{videoGameDetail && videoGameDetail.platforms && videoGameDetail.platforms.map((e: { name: string, id: number }) => <li key={e.id}>{e.name}</li>)}</ul></div>
      <div>Genres: <ul>{videoGameDetail && videoGameDetail.genres && videoGameDetail.genres.map((e: { name: string, id: number }) => <li key={e.id}>{e.name}</li>)}</ul></div>
      {isNaN(Number(id)) && <div><button onClick={handleDeleteButton}>Delete</button></div>}
    </>
  )
}
