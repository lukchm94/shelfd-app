'use client'; // This tells Next.js this component lives in the browser

import * as React from 'react';
import { ShelfCard } from './cards/shelf';
import type { ShelfDTO } from '@shelfd/dtos';

export function ShelfCardWrapper({
  shelf,
  showOpenButton,
}: {
  shelf: ShelfDTO;
  showOpenButton?: boolean;
}) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isVisited, setIsVisited] = React.useState(false);
  const { id, title } = shelf;

  return (
    <ShelfCard
      shelf={shelf}
      isLiked={isLiked}
      isVisited={isVisited}
      onLikeToggle={() => setIsLiked(!isLiked)}
      onVisitTrack={() => setIsVisited(true)}
      showOpenButton={showOpenButton}
    />
  );
}
