// LyricsParser.tsx
import React, { useState } from 'react';
import parse from 'html-react-parser';

// Function to handle HTML parsing, preserving spaces and new lines
export const formatLyricsWithHtml = (lyrics: string): React.ReactNode => {
    // Split the lyrics by new lines and map over each line
    return lyrics.split('\n').map((line, index) => (
        <span key={index}>
            {/* Parse the HTML within each line */}
            {parse(line)}
            <br /> {/* Add a line break after each line */}
        </span>
    ));
};

const LyricsParser: React.FC = () => {
    const [lyricsText, setLyricsText] = useState<string>('');  // State to store lyrics input
    const [formattedLyrics, setFormattedLyrics] = useState<React.ReactNode | null>(null);  // State to store formatted lyrics

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormattedLyrics(formatLyricsWithHtml(lyricsText));  // Format and store the parsed lyrics with spaces and line breaks
    };

    return (
        <div>
            <h2>Song Lyrics Parser</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="lyricsInput">Enter Lyrics with HTML:</label>
                    <textarea
                        id="lyricsInput"
                        value={lyricsText}
                        onChange={(e) => setLyricsText(e.target.value)}  // Update the state with new lyrics input
                        rows={10}
                        cols={50}
                    />
                </div>
                <button type="submit">Save Lyrics</button>
            </form>

            {/* Display formatted lyrics */}
            {formattedLyrics && (
                <div>
                    <h3>Formatted Lyrics Output:</h3>
                    <div>{formattedLyrics}</div>
                </div>
            )}
        </div>
    );
};

export default LyricsParser;
