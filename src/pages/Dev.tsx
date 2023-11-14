import Button from "../components/Button/Button";
import LastSong from "../components/LastSong/LastSong";
import {LastSongData}  from "../data/LastSongData.mock"



function Dev() {
  return (
    <div>
      <div className="section">
<Button isPrimary={true} onClick={()=>{}} texto="TOUR DATES"/>
      </div>

      <LastSong
      image={LastSongData[0].image}
      url={LastSongData[0].url}
      />





    </div>
  );
}

export default Dev;