import { Header } from "../../components/Header/Header";
import LastSong from "../../components/LastSong/LastSong";
import { HomePageData } from "../../data/HomePageData.mock";
import { LastSongData } from "../../data/LastSongData.mock";




export function HomePage() {
  return (

<div className="Principal">
<div className="section" >

  <Header
  
 image={HomePageData[0].image}
  />



  
</div>

<div className="section">
  
    <LastSong
    image={LastSongData[0].image}
    url={LastSongData[0].url}
    
    />


  
</div>

</div>

    
  

  );
}

