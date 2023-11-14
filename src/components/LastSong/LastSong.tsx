import React from 'react';
import Button from "../Button/Button";
import './LastSong.scss';



interface LastSongProps {
  image: string;
  url: string;
}
export default function LastSong({ image, url }: LastSongProps) {
  const handleClick = () => {
      window.open(url, '_blank');
  };

    const handleMouseMove = (evt: React.MouseEvent<HTMLDivElement>) => {
        const el = evt.currentTarget;
        const { clientHeight, clientWidth } = el;
        const clientX = evt.nativeEvent.offsetX;
        const clientY = evt.nativeEvent.offsetY;

        const yRotation = ((clientX - clientWidth / 2) / clientWidth) * 20;
        const xRotation = ((clientY - clientHeight / 2) / clientHeight) * 20;

        const transformString = `scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        el.style.transform = transformString;
    };

    const handleMouseOut = (evt: React.MouseEvent<HTMLDivElement>) => {
        const el = evt.currentTarget;
        el.style.transform = 'scale(1)';
    };

    return (
        <div className="LastSong">
            <div className="LastSongImage"
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseOut}
                 id='poster'
                 style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="LastSongButton">
                <Button isSecondary={true} onClick={handleClick} texto="Listen now" />
            </div>
        </div>
    );
}
