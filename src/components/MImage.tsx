import React from 'react';

interface Props {
    src: string;
    alt: string;
    width: string;
    height: string;
    rounded?: boolean;
}

export const MImage: React.FC<Props> = (props: Props) => {
    return (
        <div 
            className="m-image-wrapper" 
            style={{
                width: props.width, 
                height: props.height, 
                borderRadius: props.rounded ? '8px' : undefined
            }}>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default MImage;