"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeFacadeProps {
    videoId: string;
    title?: string;
}

export function YouTubeFacade({ videoId, title = "YouTube video" }: YouTubeFacadeProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = () => {
        setIsLoaded(true);
    };

    return (
        <div className="relative w-full h-full group">
            {!isLoaded ? (
                <>
                    {/* Thumbnail */}
                    <img
                        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={title}
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                    />
                    {/* Play Button Overlay */}
                    <button
                        onClick={handleClick}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors rounded-2xl"
                        aria-label="Play video"
                    >
                        <div className="w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all transform group-hover:scale-110 shadow-[0_0_30px_rgba(0,242,254,0.5)]">
                            <Play className="w-10 h-10 text-black fill-black ml-1" />
                        </div>
                    </button>
                </>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-2xl"
                />
            )}
        </div>
    );
}
