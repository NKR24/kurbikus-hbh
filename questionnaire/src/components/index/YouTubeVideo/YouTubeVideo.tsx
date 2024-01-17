import {Component, JSX, JSXElement} from 'solid-js';

interface YouTubeVideoProps {
    videoId: string;
    child: string;
}

const YouTubeVideo: Component<YouTubeVideoProps> = (props: YouTubeVideoProps) => {
    const videoSrc = `https://www.youtube.com/embed/${props.videoId}`;

    return (
        <iframe class={props.child}
            src={videoSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    );
};

export default YouTubeVideo;