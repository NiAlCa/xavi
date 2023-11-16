import './Logo.scss'

interface Logo {
    image: string;
  }

export function Logo( {image } : Logo) {

    return (
        <div className="Logo">
            <img src={image}/>
        </div>
    )
}

